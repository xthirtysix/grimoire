import React from "react";
import { Layout } from "antd";
import s from '../AppHeader/styles/AppHeader.module.scss';

const { Header } = Layout;

export const AppHeaderSkeleton = () => {
  return (
    <Header className={s.header}>
      <a href='/' className={s.logo}>Grimoire</a>
    </Header>
  );
};
