import React from "react";
import ReactDOM from "react-dom";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import * as serviceWorker from "./serviceWorker";
import {
  Home,
  Grimoires,
  Grimoire,
  Spells,
  Spell,
  User,
  NotFound,
} from "./pages";
import "./index.css";

const client = new ApolloClient({
  uri: "/api",
});

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/grimoires" component={Grimoires} />
        <Route exact path="/grimoire:id" component={Grimoire} />
        <Route exact path="/spells" component={Spells} />
        <Route exact path="/spell:id" component={Spell} />
        <Route exact path="/user:id" component={User} />
        <Route component={NotFound} />
      </Switch>
    </Router>
  );
};

ReactDOM.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
