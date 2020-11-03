import React, { useState, useEffect, useRef, Fragment } from 'react';
import { Layout, Spin } from 'antd';
import { AppHeader, AppHeaderSkeleton, AppFooter } from './sections';
import {
  Home,
  CreateGrimoire,
  Grimoire,
  Spell,
  Spells,
  User,
  NotFound,
  LogIn,
} from './pages';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import * as serviceWorker from './serviceWorker';
import { createStore } from 'redux';
import { Provider as ReduxProvider, RootStateOrAny, useSelector } from 'react-redux';
import { IntlProvider } from 'react-intl';
//Data
import ApolloClient from 'apollo-boost';
import { ApolloProvider, useMutation } from 'react-apollo';
import { LOG_IN } from './lib/graphql/mutations';
import {
  LogIn as LogInData,
  LogInVariables,
} from './lib/graphql/mutations/LogIn/__generated__/LogIn';
import { Viewer } from './lib/types';
import { rootReducer } from './redux/rootReducer';
import { messages } from './lib/i18n';
//Styles
import './index.scss';
import 'antd/dist/antd.css';
import { displayErrorMessage } from './lib/utils';
import { LOCALES } from './lib/constants';

const store = createStore(rootReducer);

const client = new ApolloClient({
  uri: '/api',
  request: async (operation) => {
    const token = sessionStorage.getItem('token');
    operation.setContext({
      headers: {
        'X-CSRF-TOKEN': token || '',
      },
    });
  },
});

const initialViewer: Viewer = {
  id: null,
  token: null,
  avatar: null,
  didRequest: false,
};

const { Content } = Layout;

const App = () => {
  const [viewer, setViewer] = useState<Viewer>(initialViewer);
  const [logIn, { error }] = useMutation<LogInData, LogInVariables>(LOG_IN, {
    onCompleted: (data) => {
      if (data && data.logIn) {
        setViewer(data.logIn);

        if (data.logIn.token) {
          sessionStorage.setItem('token', data.logIn.token);
        } else {
          sessionStorage.removeItem('token');
        }
      }
    },
  });

  const logInRef = useRef(logIn);

  const isTranslated = useSelector((state: RootStateOrAny) => state.isTranslated);

  useEffect(() => {
    logInRef.current();
  }, []);

  if (!viewer.didRequest && !error) {
    return (
      <>
        <AppHeaderSkeleton />
        <Spin
          wrapperClassName="container"
          className="centered"
          tip="Casting a spell..."
        />
      </>
    );
  }

  if (error) {
    displayErrorMessage("Sorry! We weren't able to log you in. Please try later");
  }

  return (
    <IntlProvider
      locale={isTranslated ? LOCALES.RUSSIAN : LOCALES.ENGLISH}
      textComponent={Fragment}
      defaultLocale={LOCALES.RUSSIAN}
      messages={messages[isTranslated ? LOCALES.RUSSIAN : LOCALES.ENGLISH]}
    >
      <Router>
        <>
          <AppHeader viewer={viewer} setViewer={setViewer} />
          <Content className="main-content">
            <Switch>
              <Route exact path="/" component={Home} />
              <Route
                exact
                path="/grimoire/create"
                render={(props) => <CreateGrimoire {...props} viewer={viewer} />}
              />
              <Route exact path="/grimoire/:id" component={Grimoire} />
              <Route exact path="/grimoire/:id/:edit" component={Grimoire} />
              <Route exact path="/spell/:name" component={Spell} />
              <Route exact path="/spells" component={Spells} />
              <Route exact path="/spells/:filter" component={Spells} />
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
          </Content>
          <AppFooter />
        </>
      </Router>
    </IntlProvider>
  );
};

ReactDOM.render(
  <ApolloProvider client={client}>
    <ReduxProvider store={store}>
      <App />
    </ReduxProvider>
  </ApolloProvider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA

serviceWorker.unregister();
