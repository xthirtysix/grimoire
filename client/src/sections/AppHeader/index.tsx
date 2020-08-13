import React from "react";
import { Layout, Menu, Breadcrumb } from "antd";
import { Link } from "react-router-dom";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { MenuItems } from "./components";
import { Viewer } from "../../lib/types";
import s from './styles/AppHeader.module.scss';
import { light } from "@material-ui/core/styles/createPalette";

const { Header } = Layout;

interface Props {
  viewer: Viewer;
  setViewer: (viewer: Viewer) => void;
}

export const AppHeader = ({ viewer, setViewer }: Props) => {
  return (
    <Header className={s.header}>
      <Link to="/" className={s.logo}>Grimoire</Link>
      <div className={s.list}>
        <MenuItems viewer={viewer} setViewer={setViewer} />
      </div>
    </Header>
  );
};
