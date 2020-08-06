import React from "react";
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
  UserGrimoireSkeleton,
} from "./components";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import { Typography, Grid, Divider } from "@material-ui/core";
import { useSnackbar } from "notistack";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    list: {
      margin: "2rem 0 4rem -8px",
      padding: 0,
      listStyle: "none",
    },
    grimoire: {
      padding: "2rem",
    },
    divider: {
      margin: "2rem 0",
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
  const { enqueueSnackbar } = useSnackbar();

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
    enqueueSnackbar("Unable to log you in :(", { variant: "error" });
    return <h2>Error</h2>;
  }

  if (loading) {
    // if (true) {
    return (
      <>
        <UserProfileSkeleton />
        <Divider className={classes.divider} />
        <Typography component="h2" variant="h5">
          Your grimoires
        </Typography>
        <Typography component="p" color="textSecondary">
          Here is the list of grimoires you created:
        </Typography>
        <Grid container component={"ul"} className={classes.list} spacing={2}>
          <Grid item component={"li"} xs={12} sm={6} md={3}>
            <UserGrimoireSkeleton />
          </Grid>
          <Grid item component={"li"} xs={12} sm={6} md={3}>
            <UserGrimoireSkeleton />
          </Grid>
          <Grid item component={"li"} xs={12} sm={6} md={3}>
            <UserGrimoireSkeleton />
          </Grid>
        </Grid>
      </>
    );
  }

  return (
    <>
      {userProfileElement}
      <Divider className={classes.divider} />
      <Typography component="h2" variant="h5">
        Your grimoires
      </Typography>
      <Typography component="p" color="textSecondary">
        Here is the list of grimoires you created:
      </Typography>
      {userGrimoires}
    </>
  );
};
