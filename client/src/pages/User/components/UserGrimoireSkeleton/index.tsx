import React from "react";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import { Paper } from "@material-ui/core";
import { Skeleton } from "@material-ui/lab";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    grimoire: {
      display: "flex",
      flexDirection: "column",
      padding: "2rem",
    },
    marginBottom: {
      marginBottom: "8px !important",
    },
    button: {
      borderRadius: "4px",
    },
  })
);

export const UserGrimoireSkeleton = () => {
  const classes = useStyles();

  return (
    <Paper className={classes.grimoire}>
      <Skeleton width="120px" height="27px" variant="text" animation="wave" />
      <Skeleton width="158px" height="38px" variant="text" animation="wave" />
      <Skeleton width="45px" height="25px" variant="text" animation="wave" />
      <Skeleton width="40px" height="25px" variant="text" animation="wave" />
      <Skeleton width="25px" height="25px" variant="text" animation="wave" />
      <Skeleton
        className={classes.marginBottom}
        width="20px"
        height="22px"
        variant="text"
        animation="wave"
      />
      <Skeleton className={classes.button} width="158px" height="36px" variant="rect" animation="wave" />
    </Paper>
  );
};
