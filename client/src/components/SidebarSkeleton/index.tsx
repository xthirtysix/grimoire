import React from "react";
import { Drawer, Toolbar } from "@material-ui/core";
import { Skeleton } from "@material-ui/lab";
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";

const drawerWidth = 240;

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    drawer: {
      [theme.breakpoints.up("sm")]: {
        width: drawerWidth,
        flexShrink: 0,
      },
    },
    // necessary for content to be below app bar
    toolbar: { ...theme.mixins.toolbar, padding: "2px 16px" },
    header: { marginTop: "1.2rem" },
    list: { padding: "24px 16px 0" },
    listItem: { margin: "1.4 rem 0" },
    drawerPaper: {
      width: drawerWidth,
    },
    content: {
      flexGrow: 1,
      padding: theme.spacing(3),
    },
  })
);

export const SidebarSkeleton = () => {
  const classes = useStyles();

  return (
    <Drawer
      className={classes.drawer}
      variant="permanent"
      classes={{
        paper: classes.drawerPaper,
      }}
    >
      <Toolbar />
      <div className={classes.list}>
        <Skeleton variant="text" width={80} height={16}></Skeleton>
        <Skeleton
          className={classes.listItem}
          variant="text"
          width={110}
          height={20}
        ></Skeleton>
        <Skeleton
          className={classes.listItem}
          variant="text"
          width={80}
          height={20}
        ></Skeleton>
        <Skeleton
          className={classes.listItem}
          variant="text"
          width={70}
          height={20}
        ></Skeleton>
        <Skeleton
          className={classes.listItem}
          variant="text"
          width={90}
          height={20}
        ></Skeleton>
        <Skeleton
          className={classes.listItem}
          variant="text"
          width={95}
          height={20}
        ></Skeleton>
        <Skeleton
          className={classes.listItem}
          variant="text"
          width={70}
          height={20}
        ></Skeleton>
        <Skeleton
          className={classes.listItem}
          variant="text"
          width={100}
          height={20}
        ></Skeleton>
        <Skeleton
          className={classes.listItem}
          variant="text"
          width={90}
          height={20}
        ></Skeleton>
      </div>
    </Drawer>
  );
};
