import React from 'react';
import { Select } from 'antd';
import { FormattedMessage, useIntl } from 'react-intl';
// Data
import { SpellsSort } from '../../graphql/globalTypes';
// Constants
import { SORT_OPTIONS } from '../../constants';
// Styles
import s from './styles/SpellSort.module.scss';

interface Props {
  defaultSort: SpellsSort;
  onSortChange: (value: SpellsSort) => void;
}

export const SpellSort = ({ defaultSort, onSortChange }: Props): JSX.Element => {
  const intl = useIntl();

  const options = SORT_OPTIONS.map((option: string) => {
    return { value: option, label: intl.formatMessage({ id: option }) };
  });

  return (
    <label className={s.container}>
      <span className={s.label}>
        <FormattedMessage id="sortBy" />
        :&nbsp;
      </span>
      <Select
        className={s.select}
        defaultValue={defaultSort}
        onChange={onSortChange}
        options={options}
      />
    </label>
  );
};
