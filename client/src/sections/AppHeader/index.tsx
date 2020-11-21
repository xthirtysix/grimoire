import React, { useEffect, useState } from 'react';
import { Affix, Input, Layout, Switch } from 'antd';
import { BookOutlined } from '@ant-design/icons';
import { Link, RouteComponentProps, withRouter } from 'react-router-dom';
import { MenuItems } from './components';
import { displayErrorMessage } from '../../lib/utils';
import { useIntl } from 'react-intl';
import { useLocale } from '../../lib/hooks/useLocale';
import { useDispatch } from 'react-redux';
import { LANGUAGE, store } from '../../redux/store';
//Data
import { Viewer } from '../../lib/types';
//Styles
import s from './styles/AppHeader.module.scss';

const { Header } = Layout;
const { Search } = Input;

interface Props {
  viewer: Viewer;
  setViewer: (viewer: Viewer) => void;
}

export const AppHeader = withRouter(
  ({ viewer, setViewer, history, location }: Props & RouteComponentProps) => {
    const [search, setSearch] = useState('');
    const intl = useIntl();

    const dispatch = useDispatch();

    useLocale();

    useEffect(() => {
      const { pathname } = location;
      const pathnameSubStrings = pathname.split('/');

      if (!pathname.includes('/spell')) {
        setSearch('');
        return;
      }

      if (pathnameSubStrings[1] === 'spell' && pathnameSubStrings.length === 3) {
        setSearch(pathnameSubStrings[2]);
        return;
      }
    }, [location]);

    const onSearch = (value: string) => {
      const trimmedValue = value
        .trim()
        .split(' ')
        .map((substr) => {
          return substr.toLowerCase() !== 'the'
            ? substr.charAt(0).toUpperCase() + substr.slice(1).toLowerCase()
            : substr.toLowerCase();
        })
        .join(' ');

      if (trimmedValue) {
        history.push(`/spell/${trimmedValue}`);
      } else {
        displayErrorMessage('Please enter a valid search');
      }
    };

    return (
      <Header className={s.header}>
        <Affix offsetTop={0} style={{ zIndex: 100, width: '100%' }}>
          <div className={s.container}>
            <Link to="/" className={s.logo}>
              <BookOutlined />
              <span>Grimoire</span>
            </Link>
            <Search
              placeholder={intl.formatMessage({ id: 'mainSearchPlaceholder' })}
              size="middle"
              enterButton
              onChange={(evt) => setSearch(evt.target.value)}
              value={search}
              onSearch={onSearch}
              className={s.search}
            />
            <Switch
              className={s.switch}
              checkedChildren="En"
              unCheckedChildren="Ru"
              defaultChecked={store.getState().language === LANGUAGE.RU}
              onChange={() => dispatch({ type: 'SWITCH_LANGUAGE' })}
            />
            <div className={s.list}>
              <MenuItems viewer={viewer} setViewer={setViewer} />
            </div>
          </div>
        </Affix>
      </Header>
    );
  }
);
