import React from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import { MenuItems } from "./components";
import { Viewer } from "../../lib/types";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    bar: {
      background: "#667eea",
      backgroundImage: "linear-gradient(115deg, #667eea 0%, #764ba2 100%)",
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
  })
);

interface Props {
  viewer: Viewer;
  setViewer: (viewer: Viewer) => void;
}

export const AppHeader = ({ viewer, setViewer }: Props) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="fixed" className={classes.bar}>
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            Grimoire
          </Typography>
          <MenuItems viewer={viewer} setViewer={setViewer} />
        </Toolbar>
      </AppBar>
    </div>
  );
};
