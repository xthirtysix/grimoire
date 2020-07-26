import React, { useEffect, useRef } from "react";
import { useApolloClient, useMutation } from "react-apollo";
import { Paper, Typography, Button, CircularProgress } from "@material-ui/core";
import { useSnackbar } from "notistack";
import { Viewer } from "../../lib/types";
import { AUTH_URL } from "../../lib/graphql/queries";
import { AuthUrl as AuthUrlData } from "../../lib/graphql/queries/AuthUrl/__generated__/AuthUrl";
import { LOG_IN } from "../../lib/graphql/mutations";
import {
  LogIn as LogInData,
  LogInVariables,
} from "../../lib/graphql/mutations/LogIn/__generated__/LogIn";
import s from "./styles/Login.module.scss";
import googleLogo from "./assets/google_logo.jpg";
import { Redirect } from "react-router-dom";

interface Props {
  setViewer: (viewer: Viewer) => void;
}

export const LogIn = ({ setViewer }: Props) => {
  const { enqueueSnackbar } = useSnackbar();
  const client = useApolloClient();
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
      <div className={s.__container}>
        <div className={s.__login}>
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
    <div className={s.__container}>
      <Paper className={s.__login}>
        <div className={s.__intro}>
          <Typography>
            <span role="img" aria-label="wave">
              👋
            </span>
          </Typography>
          <Typography className={s.__title} variant="h5" component="h2">
            Login to Grimoire
          </Typography>
          <Typography color="textSecondary">
            Sign in with Google to fullfill your own Grimoire!
          </Typography>
        </div>
        <Button
          onClick={onAuthorize}
          className={s.__button}
          variant="contained"
          color="primary"
        >
          <img className={s.__logo} src={googleLogo} alt="Google logo" />
          <span>Sign in with Google</span>
        </Button>
        <Typography color="textSecondary">
          Note: By signing in, you'll be redirected to the Google consent form
          to sign in with your Google account.
        </Typography>
      </Paper>
    </div>
  );
};
