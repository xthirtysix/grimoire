import React from "react";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import { Skeleton } from "@material-ui/lab";

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

export const UserProfileSkeleton = () => {
  const classes = useStyles();

  return (
    <div className={classes.profile}>
      <Skeleton
        animation="wave"
        variant="circle"
        width="80px"
        height="80px"
        className={classes.avatar}
      />
      <div className={classes.detailes}>
        <Skeleton variant="text" width="140px" height="24px" animation="wave" />
        <Skeleton variant="text" width="170px" height="24px" animation="wave" />
        <Skeleton
          className={classes.count}
          variant="text"
          width="140px"
          height="24px"
          animation="wave"
        />
      </div>
    </div>
  );
};
