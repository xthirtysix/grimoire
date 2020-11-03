import React from 'react';
import { Skeleton } from 'antd';
//Styles
import s from './styles/UserProfileSkeleton.module.scss';

const { Avatar, Input } = Skeleton;

export const UserProfileSkeleton = () => {
  return (
    <div className={s.userinfo}>
      <Avatar active={true} size={64} />
      <div className={s.userInfoDataSkeleton}>
        <Input
          active={true}
          size={'default'}
          style={{ width: 140, height: 20, marginBottom: 15 }}
        />
        <Input
          active={true}
          size={'default'}
          style={{ width: 200, height: 12, marginBottom: 10 }}
        />
        <Input
          active={true}
          size={'default'}
          style={{ width: 150, height: 12, marginBottom: 10 }}
        />
      </div>
    </div>
  );
};
