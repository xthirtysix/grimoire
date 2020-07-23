import React, { useState } from "react";
import ReactDOM from "react-dom";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import * as serviceWorker from "./serviceWorker";
import { AppHeader } from "./sections";
import {
  Home,
  Grimoires,
  Grimoire,
  Spells,
  Spell,
  User,
  NotFound,
  LogIn,
} from "./pages";
import { SnackbarProvider } from "notistack";
import { Viewer } from "./lib/types";
import "./index.css";

const client = new ApolloClient({
  uri: "/api",
});

const initialViewer: Viewer = {
  id: null,
  token: null,
  avatar: null,
  didRequest: false,
};

const App = () => {
  const [viewer, setViewer] = useState<Viewer>(initialViewer);

  return (
    <Router>
      <AppHeader viewer={viewer} setViewer={setViewer}/>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/grimoires" component={Grimoires} />
        <Route exact path="/grimoire:id" component={Grimoire} />
        <Route exact path="/spells" component={Spells} />
        <Route exact path="/spell:id" component={Spell} />
        <Route exact path="/user:id" component={User} />
        <Route
          exact
          path="/login"
          render={(props) => <LogIn {...props} setViewer={setViewer} />}
        />
        <Route component={NotFound} />
      </Switch>
    </Router>
  );
};

ReactDOM.render(
  <ApolloProvider client={client}>
    <SnackbarProvider maxSnack={3}>
      <App />
    </SnackbarProvider>
  </ApolloProvider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
