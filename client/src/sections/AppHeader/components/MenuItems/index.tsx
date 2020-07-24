import React, { useState } from "react";
import { Menu, MenuItem, Avatar } from "@material-ui/core";
import { Link as RouterLink } from "react-router-dom";
import { useSnackbar } from "notistack";
import {
  AccountCircle,
  PersonOutline,
  Home,
  ExitToApp,
} from "@material-ui/icons";
import s from "./styles/MenuItems.module.scss";
import { LOG_OUT } from "../../../../lib/graphql/mutations";
import { useMutation } from "react-apollo";
import { LogOut as LogOutData } from "../../../../lib/graphql/mutations/LogOut/__generated__/LogOut";
import { Viewer } from "../../../../lib/types";

interface Props {
  viewer: Viewer;
  setViewer: (viewer: Viewer) => void;
}

export const MenuItems = ({ viewer, setViewer }: Props) => {
  const { enqueueSnackbar } = useSnackbar();
  const [logOut] = useMutation<LogOutData>(LOG_OUT, {
    onCompleted: (data) => {
      if (data && data.logOut) {
        setViewer(data.logOut);
        sessionStorage.removeItem("token");
        enqueueSnackbar("Successfully logged out", { variant: "success" });
      }
    },
    onError: (data) => {
      enqueueSnackbar("Sorry, we weren't able to log you out :(", {
        variant: "error",
      });
    },
  });
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const open = Boolean(anchorEl);

  const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
    event.preventDefault();
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLogOut = () => {
    logOut();
    handleClose();
  };

  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={open}
      onClose={handleClose}
    >
      <MenuItem onClick={handleClose}>
        <PersonOutline />
        Profile
      </MenuItem>
      <MenuItem onClick={handleLogOut} component={RouterLink} to={"/"}>
        <ExitToApp />
        Log out
      </MenuItem>
    </Menu>
  );

  const subMenuLogin =
    viewer.id && viewer.avatar ? (
      <>
        <MenuItem onClick={handleMenu}>
          <Avatar
            aria-label="account of current user"
            aria-controls="menu-appbar"
            aria-haspopup="true"
            color="inherit"
            src={viewer.avatar}
          />
        </MenuItem>
        {renderMenu}
      </>
    ) : (
      <MenuItem component={RouterLink} to={"/login"}>
        <AccountCircle className={s.__loginIcon} />
      </MenuItem>
    );

  return (
    <ul className={s.__menu}>
      <li>
        <MenuItem component={RouterLink} to={"/"}>
          <Home className={s.__icon} />
          <p>Home</p>
        </MenuItem>
      </li>
      <li>
        <MenuItem component={RouterLink} to={"/spells"}>
          <p>Spells</p>
        </MenuItem>
      </li>
      {subMenuLogin}
    </ul>
  );
};
