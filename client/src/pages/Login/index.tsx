import React, { useEffect, useRef } from "react";
import { Redirect } from "react-router-dom";
import { useApolloClient, useMutation } from "react-apollo";
import { Viewer } from "../../lib/types";
import { AUTH_URL } from "../../lib/graphql/queries";
import { AuthUrl as AuthUrlData } from "../../lib/graphql/queries/AuthUrl/__generated__/AuthUrl";
import { LOG_IN } from "../../lib/graphql/mutations";
import {
  LogIn as LogInData,
  LogInVariables,
} from "../../lib/graphql/mutations/LogIn/__generated__/LogIn";
import { Paper, Typography, Button, CircularProgress } from "@material-ui/core";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import googleLogo from "./assets/google_logo.jpg";
import { useSnackbar } from "notistack";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    container: {
      display: "flex",
      width: "100%",
    },
    login: {
      boxSizing: "border-box",
      minWidth: "320px",
      maxWidth: "500px",
      margin: "auto",
      padding: "4rem 2rem",
      textAlign: "center",
    },
    intro: {
      marginBottom: "3rem",
    },
    title: {
      marginBottom: "1rem !important",
    },
    button: {
      marginBottom: "3rem !important",
      padding: "2px !important",
      paddingRight: "1rem !important",
      borderRadius: "0 !important",
    },
    logo: {
      width: "45px",
      height: "45px",
      marginRight: "1rem",
    },
  })
);

interface Props {
  setViewer: (viewer: Viewer) => void;
}

export const LogIn = ({ setViewer }: Props) => {
  const { enqueueSnackbar } = useSnackbar();
  const client = useApolloClient();
  const classes = useStyles();

  const [
    logIn,
    { data: logInData, loading: logInLoading, error: logInError },
  ] = useMutation<LogInData, LogInVariables>(LOG_IN, {
    onCompleted: (data) => {
      if (data && data.logIn && data.logIn.token) {
        setViewer(data.logIn);
        sessionStorage.setItem("token", data.logIn.token);
        enqueueSnackbar("Successfully logged in", { variant: "success" });
      }
    },
  });
  const logInRef = useRef(logIn);

  useEffect(() => {
    const code = new URL(window.location.href).searchParams.get("code");
    if (code) {
      logInRef.current({
        variables: {
          input: { code },
        },
      });
    }
  }, []);

  const onAuthorize = async () => {
    try {
      const { data } = await client.query<AuthUrlData>({
        query: AUTH_URL,
      });
      window.location.href = data.authUrl;
    } catch (error) {
      enqueueSnackbar("Authorization failed", { variant: "error" });
    }
  };

  if (logInLoading) {
    enqueueSnackbar("Logging you in...");
    return (
      <div className={classes.container}>
        <div className={classes.login}>
          <CircularProgress />
        </div>
      </div>
    );
  }

  if (logInData && logInData.logIn) {
    const { id: viewerId } = logInData.logIn;
    return <Redirect to={`/user/${viewerId}`} />;
  }

  if (logInError) {
    enqueueSnackbar("Authorization error", { variant: "error" });
    return <Redirect to={"/"} />;
  }

  return (
    <div className={classes.container}>
      <Paper className={classes.login}>
        <div className={classes.intro}>
          <span role="img" aria-label="wave">
            👋
          </span>
          <Typography className={classes.title} variant="h5" component="h2">
            Login to Grimoire
          </Typography>
          <Typography color="textSecondary">
            Sign in with Google to fullfill your own Grimoire!
          </Typography>
        </div>
        <Button
          onClick={onAuthorize}
          className={classes.button}
          variant="contained"
          color="primary"
        >
          <img className={classes.logo} src={googleLogo} alt="Google logo" />
          <Typography component="span">Sign in with Google</Typography>
        </Button>
        <Typography color="textSecondary">
          Note: By signing in, you'll be redirected to the Google consent form
          to sign in with your Google account.
        </Typography>
      </Paper>
    </div>
  );
};
