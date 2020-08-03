import React, { useState, useEffect, useRef } from "react";
import ReactDOM from "react-dom";
import ApolloClient from "apollo-boost";
import { ApolloProvider, useMutation } from "react-apollo";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import * as serviceWorker from "./serviceWorker";
import { AppHeader, AppHeaderSkeleton } from "./sections";
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
import { CircularProgress } from "@material-ui/core";
import { LOG_IN } from "./lib/graphql/mutations";
import {
  LogIn as LogInData,
  LogInVariables,
} from "./lib/graphql/mutations/LogIn/__generated__/LogIn";
import { SnackbarProvider, useSnackbar } from "notistack";
import { Viewer } from "./lib/types";
import "./index.css";

const client = new ApolloClient({
  uri: "/api",
  request: async (opearation) => {
    const token = sessionStorage.getItem("token");
    opearation.setContext({
      headers: {
        "X-CSRF-TOKEN": token || "",
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

const App = () => {
  const [viewer, setViewer] = useState<Viewer>(initialViewer);
  const [logIn, { error }] = useMutation<LogInData, LogInVariables>(LOG_IN, {
    onCompleted: (data) => {
      if (data && data.logIn) {
        setViewer(data.logIn);

        if (data.logIn.token) {
          sessionStorage.setItem("token", data.logIn.token);
        } else {
          sessionStorage.removeItem("token");
        }
      }
    },
  });
  const { enqueueSnackbar } = useSnackbar();

  const logInRef = useRef(logIn);

  useEffect(() => {
    logInRef.current();
  }, []);

  if (!viewer.didRequest && !error) {
    return (
      <>
        <AppHeaderSkeleton />
        <div className="container">
          <div className="spinnerWrapper">
            <CircularProgress />
          </div>
        </div>
      </>
    );
  }

  if (error) {
    enqueueSnackbar("We weren't able to log you in. Try later", {
      variant: "error",
    });
  }

  return (
    <Router>
      <AppHeader viewer={viewer} setViewer={setViewer} />
      <div className="container">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/grimoires" component={Grimoires} />
          <Route exact path="/grimoire/:id" component={Grimoire} />
          <Route exact path="/spells" component={Spells} />
          <Route exact path="/spell/:id" component={Spell} />
          <Route exact path="/user/:id" component={User} />
          <Route
            exact
            path="/login"
            render={(props) => <LogIn {...props} setViewer={setViewer} />}
          />
          <Route component={NotFound} />
        </Switch>
      </div>
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
