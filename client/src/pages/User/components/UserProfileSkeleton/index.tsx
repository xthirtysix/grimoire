import React from "react";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import { Grid, Paper, Divider } from "@material-ui/core";
import { Skeleton } from "@material-ui/lab";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    profile: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      padding: "3rem 2rem",
      alignItems: "center",
    },
    avatar: {
      margin: "0 auto",
    },
    divider: {
      width: "100%",
      margin: "3rem 0 1rem",
    },
  })
);

export const UserProfileSkeleton = () => {
  const classes = useStyles();

  return (
    <Grid container spacing={3} justify="center">
      <Grid item xs={12} sm={6} md={4}>
        <Paper className={classes.profile}>
          <Skeleton
            animation="wave"
            variant="circle"
            width="80px"
            height="80px"
            className={classes.avatar}
          />
          <Divider className={classes.divider} />
          <Skeleton variant="text" width="140px" height="24px" animation="wave" />
          <Skeleton variant="text" width="170px" height="24px" animation="wave" />
        </Paper>
      </Grid>
    </Grid>
  );
};
