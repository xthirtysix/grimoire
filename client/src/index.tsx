import React, { useState, useEffect, useRef } from 'react'
import { Affix, Layout, Spin } from 'antd'
import { AppHeader, AppHeaderSkeleton, AppFooter } from './sections'
import {
  Home,
  Grimoires,
  Grimoire,
  Spell,
  User,
  NotFound,
  LogIn,
} from './pages'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import * as serviceWorker from './serviceWorker'
// import { DatePicker, message } from 'antd'
//Data
import ApolloClient from 'apollo-boost'
import { ApolloProvider, useMutation } from 'react-apollo'
import { LOG_IN } from './lib/graphql/mutations'
import {
  LogIn as LogInData,
  LogInVariables,
} from './lib/graphql/mutations/LogIn/__generated__/LogIn'
import { Viewer } from './lib/types'
//Styles
import './index.css'
import 'antd/dist/antd.css'
import { displayErrorMessage } from './lib/utils'

const client = new ApolloClient({
  uri: '/api',
  request: async (opearation) => {
    const token = sessionStorage.getItem('token')
    opearation.setContext({
      headers: {
        'X-CSRF-TOKEN': token || '',
      },
    })
  },
})

const initialViewer: Viewer = {
  id: null,
  token: null,
  avatar: null,
  didRequest: false,
}

const { Content } = Layout

const App = () => {
  const [viewer, setViewer] = useState<Viewer>(initialViewer)
  const [logIn, { error }] = useMutation<LogInData, LogInVariables>(LOG_IN, {
    onCompleted: (data) => {
      if (data && data.logIn) {
        setViewer(data.logIn)

        if (data.logIn.token) {
          sessionStorage.setItem('token', data.logIn.token)
        } else {
          sessionStorage.removeItem('token')
        }
      }
    },
  })

  const logInRef = useRef(logIn)

  useEffect(() => {
    logInRef.current()
  }, [])

  if (!viewer.didRequest && !error) {
    return (
      <>
        <AppHeaderSkeleton />
        <Content className="container">
          <Spin className="centered" tip="Casting a spell..." />
        </Content>
      </>
    )
  }

  if (error) {
    displayErrorMessage(
      "Sorry! We weren't able to log you in. Please try later"
    )
  }

  return (
    <Router>
      <Layout>
        <Affix offsetTop={0} style={{ zIndex: 100 }}>
          <AppHeader viewer={viewer} setViewer={setViewer} />
        </Affix>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/grimoires" component={Grimoires} />
          <Route exact path="/grimoire/:id" component={Grimoire} />
          <Route exact path="/spell/:id" component={Spell} />
          <Route
            exact
            path="/user/:id"
            render={(props) => <User {...props} viewer={viewer} />}
          />
          <Route
            exact
            path="/login"
            render={(props) => <LogIn {...props} setViewer={setViewer} />}
          />
          <Route component={NotFound} />
        </Switch>
        <AppFooter />
      </Layout>
    </Router>
  )
}

ReactDOM.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>,
  document.getElementById('root')
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
