import React from "react";
import ReactDOM from "react-dom";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";
import * as serviceWorker from "./serviceWorker";
import { Spells } from "./pages";
import "./index.css";

const client = new ApolloClient({
  uri: "/api",
});

ReactDOM.render(
  <ApolloProvider client={client}>
    <Spells />
  </ApolloProvider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
