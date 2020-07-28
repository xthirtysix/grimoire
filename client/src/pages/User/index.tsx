import React, { useState } from "react";
import { RouteComponentProps } from "react-router-dom";
import { useQuery } from "react-apollo";
import { USER } from "../../lib/graphql/queries";
import {
  User as UserData,
  UserVariables,
} from "../../lib/graphql/queries/User/__generated__/User";
import { UserProfile, UserGrimoire } from "./components";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import { Typography, Paper, Button } from "@material-ui/core";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    list: {
      margin: "2rem 0",
      padding: 0,
      listStyle: "none",
      display: "grid",
      gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))",
      alignItems: "stretch",
      gridGap: "1rem",
    },
    grimoire: {
      padding: "2rem",
    },
  })
);

interface MatchParams {
  id: string;
}

export const User = ({ match }: RouteComponentProps<MatchParams>) => {
  const { data, loading, error } = useQuery<UserData, UserVariables>(USER, {
    variables: {
      id: match.params.id,
    },
  });

  const classes = useStyles();

  const user = data ? data.user : null;
  const userProfileElement = user ? <UserProfile user={user} /> : null;

  const userGrimoires = user && user.grimoires ? user.grimoires : null;

  const userGrimoiresList = userGrimoires
    ? userGrimoires.map((grimoire) => (
        <li key={grimoire?.id}>
          <UserGrimoire grimoire={grimoire} />
        </li>
      ))
    : null;

  return (
    <>
      {userProfileElement}
      <Typography component="h2" variant="h5">
        Your grimoires
      </Typography>
      <Typography component="p" color="textSecondary">
        Here is the list of grimoires you created:
      </Typography>
      <ul className={classes.list}>{userGrimoiresList}</ul>
    </>
  );
};
