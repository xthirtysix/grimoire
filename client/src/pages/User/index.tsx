import React from "react";
import { Layout, Divider, Typography } from "antd";
import { RouteComponentProps } from "react-router-dom";
import { useQuery } from "react-apollo";
import { USER } from "../../lib/graphql/queries";
import {
  User as UserData,
  UserVariables,
} from "../../lib/graphql/queries/User/__generated__/User";
import {
  UserProfile,
  UserGrimoire,
  UserProfileSkeleton,
  UserGrimoireSkeleton
} from "./components";

import s from "./styles/User.module.scss";

const { Content } = Layout;
const { Title, Text } = Typography;

interface MatchParams {
  id: string;
}

export const User = ({ match }: RouteComponentProps<MatchParams>) => {
  const { data, loading, error } = useQuery<UserData, UserVariables>(USER, {
    variables: {
      id: match.params.id,
    },
  });

  const user = data ? data.user : null;
  const grimoiresCount = user && user.grimoires ? user.grimoires.total : 0;
  const userProfileElement = user ? (
    <UserProfile user={user} grimoires={grimoiresCount} />
  ) : null;
  const userGrimoires =
    user && user.grimoires ? (
      <UserGrimoire userGrimoires={user.grimoires} />
    ) : null;

  if (error) {
    return <h2>Error</h2>;
  }

  if (loading) {
    return (
      <Content className={s.userContainer}>
        <UserProfileSkeleton />
        <Divider className={s.divider} />
        <Title level={3}>Your grimoires</Title>
        <Text>Here is the list of grimoires you created:</Text>
        {/* <Grid container component={"ul"} className={classes.list} spacing={2}>
          <Grid item component={"li"} xs={12} sm={6} md={3}>
            <UserGrimoireSkeleton />
          </Grid>
          <Grid item component={"li"} xs={12} sm={6} md={3}>
            <UserGrimoireSkeleton />
          </Grid>
          <Grid item component={"li"} xs={12} sm={6} md={3}>
            <UserGrimoireSkeleton />
          </Grid>
        </Grid> */}
      </Content>
    );
  }

  return (
    <Content className={s.userContainer}>
      {userProfileElement}
      <Divider className={s.divider} />
      <Title level={3}>Your grimoires</Title>
      <Text className={s.grimoiresSubheader}>Here is the list of grimoires you created:</Text>
      {userGrimoires}
    </Content>
  );
};
