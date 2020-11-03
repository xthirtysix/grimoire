import React from 'react';
import { Layout } from 'antd';
//Styles
import s from './styles/AppHeaderSkeleton.module.scss';

const { Header } = Layout;

export const AppHeaderSkeleton = () => {
  return (
    <Header className={s.header}>
      <a href="/" className={s.logo}>
        Grimoire
      </a>
    </Header>
  );
};
