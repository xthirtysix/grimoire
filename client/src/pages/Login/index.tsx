import React, { useEffect, useRef } from "react";
import { Card, Layout, Typography, Spin } from "antd";
import { Redirect } from "react-router-dom";
import { ErrorBanner } from "../../lib/components";
import { displaySuccessMessage, displayErrorMessage } from "../../lib/utils";
//Data
import { useApolloClient, useMutation } from "react-apollo";
import { Viewer } from "../../lib/types";
import { AUTH_URL } from "../../lib/graphql/queries";
import { AuthUrl as AuthUrlData } from "../../lib/graphql/queries/AuthUrl/__generated__/AuthUrl";
import { LOG_IN } from "../../lib/graphql/mutations";
import {
  LogIn as LogInData,
  LogInVariables,
} from "../../lib/graphql/mutations/LogIn/__generated__/LogIn";
//Styles
import s from "./styles/Login.module.scss";
import googleLogo from "./assets/google_logo.png";

const { Content } = Layout;
const { Text, Title } = Typography;

interface Props {
  setViewer: (viewer: Viewer) => void;
}

export const LogIn = ({ setViewer }: Props) => {
  const client = useApolloClient();

  const [
    logIn,
    { data: logInData, loading: logInLoading, error: logInError },
  ] = useMutation<LogInData, LogInVariables>(LOG_IN, {
    onCompleted: (data) => {
      if (data && data.logIn && data.logIn.token) {
        setViewer(data.logIn);
        sessionStorage.setItem("token", data.logIn.token);
        displaySuccessMessage("You've successfuly loged in");
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
      displayErrorMessage(
        "Sorry! We were not able to log you in. Please try again later"
      );
    }
  };

  if (logInLoading) {
    return (
      <Content className={s.login}>
        <Spin size="large" />
      </Content>
    );
  }

  if (logInData && logInData.logIn) {
    const { id: viewerId } = logInData.logIn;
    return <Redirect to={`/user/${viewerId}`} />;
  }

  const logInErrorBannerElement = logInError ? (
    <ErrorBanner description="Sorry! We were not able to log you in. Please try again later" />
  ) : null;

  return (
    <Content className={s.login}>
      {logInErrorBannerElement}
      <Card className={s.loginCard}>
        <Title level={3}>
          <span role="img" aria-label="wave">
            👋
          </span>
        </Title>
        <Title level={3} className={s.loginIntroTitle}>
          Login to Grimoire!
        </Title>
        <Text className={s.loginDescription}>
          Sign in with Google to fullfill your own Grimoire!
        </Text>
        <button onClick={onAuthorize} className={s.googleButton}>
          <span className={s.googleButtonImageContainer}>
            <img src={googleLogo} alt="Google logo" />
          </span>
          <span>Sign in with Google</span>
        </button>
        <Text className={s.loginNote} type="secondary">
          Note: By signing in, you'll be redirected to the Google consent form
          to sign in with your Google account.
        </Text>
      </Card>
    </Content>
  );
};
