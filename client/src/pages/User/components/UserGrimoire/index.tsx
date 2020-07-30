import React from "react";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import { User_user_grimoires as Grimoire } from "../../../../lib/graphql/queries/User/__generated__/User";
import { Paper, Typography, Button } from "@material-ui/core";

interface Props {
  grimoire: Grimoire | null;
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    grimoire: {
      display: "flex",
      flexDirection: "column",
      padding: "2rem",
    },
  })
);

export const UserGrimoire = ({ grimoire }: Props) => {
  const classes = useStyles();

  if (grimoire) {
    return (
      <Paper className={classes.grimoire}>
        <Typography component="h3" variant="subtitle1" color="textSecondary">
          Character name:
        </Typography>
        <Typography component="h3" variant="h6">
          {grimoire.name}
        </Typography>
        <Typography component="h3" variant="subtitle1" color="textSecondary">
          Class:
        </Typography>
        <Typography component="p">
          {grimoire?.characterClasses[0].class}
        </Typography>
        <Typography component="h3" variant="subtitle1" color="textSecondary">
          Level:
        </Typography>
        <Typography component="p" gutterBottom>
          {grimoire?.characterClasses[0].level}
        </Typography>
        <Button variant="contained" color="primary">
          Open
        </Button>
      </Paper>
    );
  }

  return null;
};
