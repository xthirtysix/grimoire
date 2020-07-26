import React from "react";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import { User as UserData } from "../../../../lib/graphql/queries/User/__generated__/User";
import { Grid, Paper, Avatar, Divider, Typography } from "@material-ui/core";

interface Props {
  user: UserData["user"];
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    profile: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      padding: "3rem 2rem",
      textAlign: "center",
    },
    avatar: {
      margin: "0 auto",
      width: theme.spacing(10),
      height: theme.spacing(10),
    },
    divider: {
      margin: "3rem 0 1rem",
    },
  })
);

export const UserProfile = ({ user }: Props) => {
  const classes = useStyles();

  return (
    <Grid container spacing={3} justify="center">
      <Grid item xs={12} sm={6} md={4}>
        <Paper className={classes.profile}>
          <Avatar
            alt={user.name}
            src={user.avatar}
            className={classes.avatar}
          />
          <Divider className={classes.divider} />
          <Typography>{user.name}</Typography>
          <Typography color="textSecondary">{user.contact}</Typography>
        </Paper>
      </Grid>
    </Grid>
  );
};
