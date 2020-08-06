import React from "react";
import { User as UserData } from "../../../../lib/graphql/queries/User/__generated__/User";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import { Grid, Paper, Avatar, Divider, Typography } from "@material-ui/core";

interface Props {
  user: UserData["user"];
  grimoires: number | null;
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    profile: {
      display: "flex",
    },
    avatar: {
      margin: 0,
      width: theme.spacing(10),
      height: theme.spacing(10),
    },
    detailes: {
      display: "flex",
      flexDirection: "column",
      paddingLeft: "2rem",
    },
    count: {
      marginTop: "auto",
    },
  })
);

export const UserProfile = ({ user, grimoires }: Props) => {
  const classes = useStyles();

  return (
    <div className={classes.profile}>
      <Avatar className={classes.avatar} alt={user.name} src={user.avatar} />
      <div className={classes.detailes}>
        <Typography>{user.name}</Typography>
        <Typography color="textSecondary">{user.contact}</Typography>
        <Typography className={classes.count}>
          Grimoires created: {grimoires}
        </Typography>
      </div>
    </div>
  );
};
