import React from "react";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import { Grid } from "@material-ui/core";
import { Skeleton } from "@material-ui/lab";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    header: {
      marginBottom: "1rem",
    }
  })
);

export const SpellSkeleton = () => {
  const classes = useStyles();

  return (
    <>
      <Skeleton className={classes.header} variant={"text"} width={220} height={42} animation={"wave"} />
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6} lg={3}>
          <Skeleton variant={"rect"} height={300} animation={"wave"} />
        </Grid>
        <Grid item xs={12} sm={6} lg={3}>
          <Skeleton variant={"rect"} height={300} animation={"wave"} />
        </Grid>
        <Grid item xs={12} sm={12} lg={6}>
          <Skeleton variant={"rect"} height={300} animation={"wave"} />
        </Grid>
      </Grid>
    </>
  );
};
