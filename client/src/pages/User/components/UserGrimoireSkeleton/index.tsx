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
    },
    cardHeader: {
      position: "relative",
      padding: "1rem 2rem",
      borderTopLeftRadius: "5px",
      borderTopRightRadius: "5px",
      background: "#667eea",
      backgroundImage: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
    },
    cardContainer: {
      boxSizing: "border-box",
      padding: "1rem 2rem",
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
      <div className={classes.cardHeader}>
        <Skeleton width="120px" height="25px" variant="text" animation="wave" />
      </div>
      <div className={classes.cardContainer}>
        <Skeleton
          className={classes.level}
          width="40px"
          height="18px"
          variant="text"
          animation="wave"
        />
        <Skeleton width="100px" height="23px" variant="text" animation="wave" />
        <Skeleton width="100px" height="23px" variant="text" animation="wave" />
        <Skeleton
          className={classes.button}
          width="70px"
          height="36px"
          variant="rect"
          animation="wave"
        />
      </div>
    </Paper>
  );
};
