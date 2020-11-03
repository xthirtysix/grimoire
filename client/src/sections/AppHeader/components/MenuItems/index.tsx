import React from 'react';
import { Avatar, Menu, Button } from 'antd';
import { LogoutOutlined, UserOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';
//Data
import { useMutation } from 'react-apollo';
import { LOG_OUT } from '../../../../lib/graphql/mutations';
import { LogOut as LogOutData } from '../../../../lib/graphql/mutations/LogOut/__generated__/LogOut';
import { Viewer } from '../../../../lib/types';
import { displaySuccessMessage, displayErrorMessage } from '../../../../lib/utils';
//Styles
import s from './styles/MenuItems.module.scss';
import { FormattedMessage, useIntl } from 'react-intl';

const { Item, SubMenu } = Menu;

interface Props {
  viewer: Viewer;
  setViewer: (viewer: Viewer) => void;
}

export const MenuItems = ({ viewer, setViewer }: Props): JSX.Element => {
  const intl = useIntl();
  const [logOut] = useMutation<LogOutData>(LOG_OUT, {
    onCompleted: (data) => {
      if (data && data.logOut) {
        setViewer(data.logOut);
        sessionStorage.removeItem('token');
        displaySuccessMessage(intl.formatMessage({ id: 'onLogout' }));
      }
    },
    onError: () => {
      displayErrorMessage(intl.formatMessage({ id: 'onLoginError' }));
    },
  });

  const handleLogout = () => {
    logOut().then();
  };

  const submenuLogin =
    viewer.id && viewer.avatar ? (
      <SubMenu title={<Avatar src={viewer.avatar} />} className={s.avatar}>
        <Item key="/user">
          <Link to={`/user/${viewer.id}`}>
            <UserOutlined />
            <FormattedMessage id="userMenuGrimoires" />
          </Link>
        </Item>
        <Item key-="/logout" onClick={handleLogout}>
          <Link to="/">
            <LogoutOutlined />
            <FormattedMessage id="userMenuLogOut" />
          </Link>
        </Item>
      </SubMenu>
    ) : (
      <Item>
        <Link to="/login">
          <Button type="primary">
            <FormattedMessage id="userMenuSignIn" />
          </Button>
        </Link>
      </Item>
    );

  return (
    <Menu theme="light" mode="horizontal" selectable={false}>
      <Item key="/spells">
        <Link to="/spells">
          <FormattedMessage id="headerSpells" />
        </Link>
      </Item>
      {submenuLogin}
    </Menu>
  );
};
