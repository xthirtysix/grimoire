import React from 'react';
import { Affix, Layout, Switch } from 'antd';
import { BookOutlined } from '@ant-design/icons';
import { SpellSearch } from '../../lib/components/SpellSearch';
import { Link } from 'react-router-dom';
import { MenuItems } from './components';
import { useLocale } from '../../lib/hooks/useLocale';
import { useDispatch } from 'react-redux';
import { LANGUAGE, store } from '../../redux/store';
//Data
import { Viewer } from '../../lib/types';
//Styles
import s from './styles/AppHeader.module.scss';

const { Header } = Layout;

interface Props {
  viewer: Viewer;
  setViewer: (viewer: Viewer) => void;
}

export const AppHeader = ({ viewer, setViewer }: Props): JSX.Element => {
  const dispatch = useDispatch();
  useLocale();

  return (
    <Header className={s.header}>
      <Affix offsetTop={0} style={{ zIndex: 100, width: '100%' }}>
        <div className={s.container}>
          <Link to="/" className={s.logo}>
            <BookOutlined />
            <span>Grimoire</span>
          </Link>
          <SpellSearch />
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
};
