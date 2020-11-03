import React, { useEffect, useRef } from 'react';
import { Card, Layout, Spin, Typography } from 'antd';
import { ErrorBanner } from '../../lib/components';
import { displayErrorMessage, displaySuccessMessage } from '../../lib/utils';
import { Redirect } from 'react-router-dom';
import { FormattedMessage, useIntl } from 'react-intl';
//Data
import { AUTH_URL } from '../../lib/graphql/queries';
import { AuthUrl as AuthUrlData } from '../../lib/graphql/queries/AuthUrl/__generated__/AuthUrl';
import { LOG_IN } from '../../lib/graphql/mutations';
import {
  LogIn as LogInData,
  LogInVariables,
} from '../../lib/graphql/mutations/LogIn/__generated__/LogIn';
import { useApolloClient, useMutation } from 'react-apollo';
import { Viewer } from '../../lib/types';
//Styles
import s from './styles/Login.module.scss';
//Assets
import googleLogo from './assets/google_logo.png';

const { Content } = Layout;
const { Text, Title } = Typography;

interface Props {
  setViewer: (viewer: Viewer) => void;
}

export const LogIn = ({ setViewer }: Props): JSX.Element => {
  const client = useApolloClient();

  const [
    logIn,
    { data: logInData, loading: logInLoading, error: logInError },
  ] = useMutation<LogInData, LogInVariables>(LOG_IN, {
    onCompleted: (data) => {
      if (data && data.logIn && data.logIn.token) {
        setViewer(data.logIn);
        sessionStorage.setItem('token', data.logIn.token);
        displaySuccessMessage(intl.formatMessage({ id: 'loginSuccess' }));
      }
    },
  });
  const logInRef = useRef(logIn);
  const intl = useIntl();

  useEffect(() => {
    const code = new URL(window.location.href).searchParams.get('code');
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
      displayErrorMessage(intl.formatMessage({ id: 'loginError' }));
    }
  };

  if (logInLoading) {
    return (
      <Content className="container">
        <Spin className="centered" />
      </Content>
    );
  }

  if (logInData && logInData.logIn) {
    const { id: viewerId } = logInData.logIn;
    return <Redirect to={`/user/${viewerId}`} />;
  }

  const logInErrorBannerElement = logInError ? (
    <ErrorBanner description={intl.formatMessage({ id: 'loginError' })} />
  ) : null;

  return (
    <>
      {logInErrorBannerElement}
      <Card className={s.loginCard}>
        <Title level={3}>
          <span role="img" aria-label="wave">
            👋
          </span>
        </Title>
        <Title level={3} className={s.loginIntroTitle}>
          <FormattedMessage id="loginPageHeader" />
        </Title>
        <Text className={s.loginDescription}>
          <FormattedMessage id="loginPageSubheader" />
        </Text>
        <button onClick={onAuthorize} className={s.googleButton}>
          <span className={s.googleButtonImageContainer}>
            <img src={googleLogo} alt="Google logo" />
          </span>
          <span>
            <FormattedMessage id="loginPageGoogleBtn" />
          </span>
        </button>
        <Text className={s.loginNote} type="secondary">
          <FormattedMessage id="loginNote" />
        </Text>
      </Card>
    </>
  );
};
