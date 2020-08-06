import React from "react";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import { Paper } from "@material-ui/core";
import { Skeleton } from "@material-ui/lab";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    grimoire: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      padding: "1rem 2rem",
    },
    header: {
      marginBottom: "1rem",
    },
    level: {
      position: "absolute",
      top: "5px",
      right: "1rem",
    },
    marginBottom: {
      marginBottom: "8px !important",
    },
    button: {
      marginTop: "2rem",
      borderRadius: "4px",
    },
  })
);

export const UserGrimoireSkeleton = () => {
  const classes = useStyles();

  return (
    <Paper className={classes.grimoire}>
      <Skeleton
        className={classes.header}
        width="120px"
        height="35px"
        variant="text"
        animation="wave"
      />
      <Skeleton
        className={classes.level}
        width="40px"
        height="18px"
        variant="text"
        animation="wave"
      />
      <Skeleton width="100px" height="25px" variant="text" animation="wave" />
      <Skeleton width="100px" height="25px" variant="text" animation="wave" />
      <Skeleton
        className={classes.button}
        width="80px"
        height="36px"
        variant="rect"
        animation="wave"
      />
    </Paper>
  );
};
