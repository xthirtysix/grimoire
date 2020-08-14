import React, { useState } from "react";
import { Avatar, Menu, Button } from "antd";
import { LogoutOutlined, UserOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
import s from "./styles/MenuItems.module.scss";
import { useMutation } from "react-apollo";
import { LOG_OUT } from "../../../../lib/graphql/mutations";
import { LogOut as LogOutData } from "../../../../lib/graphql/mutations/LogOut/__generated__/LogOut";
import { Viewer } from "../../../../lib/types";

const { Item, SubMenu } = Menu;

interface Props {
  viewer: Viewer;
  setViewer: (viewer: Viewer) => void;
}

export const MenuItems = ({ viewer, setViewer }: Props) => {
  const [logOut] = useMutation<LogOutData>(LOG_OUT, {
    onCompleted: (data) => {
      if (data && data.logOut) {
        setViewer(data.logOut);
        sessionStorage.removeItem("token");
      }
    },
  });

  const handleLogout = () => {
    logOut();
  };

  const submenuLogin =
    viewer.id && viewer.avatar ? (
      <SubMenu title={<Avatar src={viewer.avatar} />}>
        <Item key="/user">
          <Link to={`/user/${viewer.id}`}>
            <UserOutlined />
            User
          </Link>
        </Item>
        <Item key-="/logout" onClick={handleLogout}>
          <Link to="/">
            <LogoutOutlined />
            Logout
          </Link>
        </Item>
      </SubMenu>
    ) : (
      <Item>
        <Link to="/login">
          <Button type="primary">Sign In</Button>
        </Link>
      </Item>
    );

  return (
    <Menu theme="light" mode="horizontal" selectable={false}>
      <Item key="/spells">
        <Link to="/spells">Spells</Link>
      </Item>
      {submenuLogin}
    </Menu>
  );
};
