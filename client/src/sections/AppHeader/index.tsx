import React, { useEffect, useState } from 'react';
import { Affix, AutoComplete, Input, Layout, Switch } from 'antd';
import { BookOutlined } from '@ant-design/icons';
import { Link, RouteComponentProps, withRouter } from 'react-router-dom';
import { MenuItems } from './components';
import { FormattedMessage, useIntl } from 'react-intl';
import { useLocale } from '../../lib/hooks/useLocale';
import { RootStateOrAny, useDispatch, useSelector } from 'react-redux';
import { useQuery } from 'react-apollo';
import { LANGUAGE, store } from '../../redux/store';
import { displayErrorMessage } from '../../lib/utils';
//Data
import { Viewer } from '../../lib/types';
import { SpellNames as SpellsData } from '../../lib/graphql/queries/SpellNames/__generated__/SpellNames';
import { SPELL_NAMES } from '../../lib/graphql/queries';
//Styles
import s from './styles/AppHeader.module.scss';

const { Header } = Layout;

interface Props {
  viewer: Viewer;
  setViewer: (viewer: Viewer) => void;
}

export const AppHeader = withRouter(
  ({ viewer, setViewer, history, location }: Props & RouteComponentProps) => {
    const [search, setSearch] = useState('');
    const [options, setOptions] = useState<{ value: string; label: JSX.Element }[]>([]);

    const intl = useIntl();
    const lang = useSelector((state: RootStateOrAny) => state.language).toLowerCase();
    const dispatch = useDispatch();

    const { data } = useQuery<SpellsData>(SPELL_NAMES, {});

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

    const onChange = (value: string) => {
      setSearch(value);

      if (data?.spells?.result) {
        const options = [];
        for (let i = 0; i < data.spells.result.length; i++) {
          if (
            data.spells.result[i].name.en.toLowerCase().includes(value.toLowerCase()) ||
            data.spells.result[i].name.ru.toLowerCase().includes(value.toLowerCase())
          ) {
            options.push({
              value: data.spells.result[i].name[lang as 'en' | 'ru'],
              label: (
                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                  }}
                >
                  <span>{data.spells.result[i].name[lang as 'en' | 'ru']}</span>
                  <span style={{ color: 'lightgray', fontSize: '0.8rem' }}>
                    <FormattedMessage id={data.spells.result[i].level} />
                  </span>
                </div>
              ),
            });
          }
        }
        setOptions(options);
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
            <AutoComplete
              options={options}
              onBlur={() => setOptions([])}
              onChange={onChange}
              onSelect={onSearch}
              value={search}
              className={s.search}
            >
              <Input.Search
                size="middle"
                placeholder={intl.formatMessage({ id: 'mainSearchPlaceholder' })}
                onSearch={onSearch}
                enterButton
              />
            </AutoComplete>
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
