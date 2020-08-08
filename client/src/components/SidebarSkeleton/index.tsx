import React from "react";
import { Drawer, Hidden, Divider } from "@material-ui/core";
import { Skeleton } from "@material-ui/lab";
import {
  makeStyles,
  useTheme,
  Theme,
  createStyles,
} from "@material-ui/core/styles";

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
    listItem: { margin: "1.5rem 0" },
    drawerPaper: {
      width: drawerWidth,
    },
    content: {
      flexGrow: 1,
      padding: theme.spacing(3),
    },
  })
);

interface Props {
  window?: () => Window;
}

export const SidebarSkeleton = ({ window }: Props) => {
  const classes = useStyles();
  const theme = useTheme();

  const drawer = (
    <div>
      <div className={classes.toolbar}>
        <Skeleton
          className={classes.header}
          variant="text"
          width={110}
          height={19}
        />
        <Skeleton variant="text" width={140} height={16} />
      </div>
      <Divider />
      <div className={classes.list}>
        <Skeleton variant="text" width={80} height={16}></Skeleton>
        <Skeleton className={classes.listItem} variant="text" width={110} height={20}></Skeleton>
        <Skeleton className={classes.listItem} variant="text" width={80} height={20}></Skeleton>
        <Skeleton className={classes.listItem} variant="text" width={70} height={20}></Skeleton>
        <Skeleton className={classes.listItem} variant="text" width={90} height={20}></Skeleton>
        <Skeleton className={classes.listItem} variant="text" width={95} height={20}></Skeleton>
        <Skeleton className={classes.listItem} variant="text" width={70} height={20}></Skeleton>
        <Skeleton className={classes.listItem} variant="text" width={100} height={20}></Skeleton>
        <Skeleton className={classes.listItem} variant="text" width={90} height={20}></Skeleton>
      </div>
    </div>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <nav className={classes.drawer} aria-label="mailbox folders">
      {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
      <Hidden smUp implementation="css">
        <Drawer
          container={container}
          variant="temporary"
          anchor={theme.direction === "rtl" ? "right" : "left"}
          classes={{
            paper: classes.drawerPaper,
          }}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
        >
          {drawer}
        </Drawer>
      </Hidden>
      <Hidden xsDown implementation="css">
        <Drawer
          classes={{
            paper: classes.drawerPaper,
          }}
          variant="permanent"
          open
        >
          {drawer}
        </Drawer>
      </Hidden>
    </nav>
  );
};
