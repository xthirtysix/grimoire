import React, { useEffect, useState } from 'react';
import { FormattedMessage, useIntl } from 'react-intl';
import { RootStateOrAny, useSelector } from 'react-redux';
import { useQuery } from 'react-apollo';
import { useLocale } from '../../hooks/useLocale';
import { displayErrorMessage } from '../../utils';
import { RouteComponentProps, withRouter } from 'react-router-dom';
import { AutoComplete, Input } from 'antd';
import { SizeType } from 'antd/lib/config-provider/SizeContext';
// Data
import { SpellNames as SpellsData } from '../../graphql/queries/SpellNames/__generated__/SpellNames';
import { SPELL_NAMES } from '../../graphql/queries';
// Styles
import s from '../../../sections/AppHeader/styles/AppHeader.module.scss';

interface Props {
  style?: string;
  size?: SizeType;
}

export const SpellSearch = withRouter(
  ({ style, size, history, location }: Props & RouteComponentProps): JSX.Element => {
    const [search, setSearch] = useState('');
    const [options, setOptions] = useState<{ value: string; label: JSX.Element }[]>([]);
    const intl = useIntl();
    const lang = useSelector((state: RootStateOrAny) => state.language).toLowerCase();

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
      <AutoComplete
        options={options}
        onBlur={() => setOptions([])}
        onChange={onChange}
        onSelect={onSearch}
        value={search}
        className={style ? style : s.search}
      >
        <Input.Search
          size={size ? size : 'middle'}
          placeholder={intl.formatMessage({ id: 'mainSearchPlaceholder' })}
          onSearch={onSearch}
          enterButton
        />
      </AutoComplete>
    );
  }
);
