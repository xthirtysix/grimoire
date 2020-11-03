import React from 'react';
import { useIntl } from 'react-intl';
import { SpellFilterSelect } from './components';
// Data
import { SpellsFilter } from '../../graphql/globalTypes';
// Constants
import {
  CASTING_TIMES,
  SPELLCASTERS,
  LEVELS,
  SAVES_REQUIRED,
  SPELL_SCHOOLS,
  TAGS,
} from '../../constants';
// Styles
import s from './styles/SpellFilter.module.scss';
import { SelectValue } from 'antd/lib/select';

interface Props {
  filters: SpellsFilter;
  onFilterChange: (value: SpellsFilter) => void;
  disabledFilters?: string[] | string;
}

export const SpellFilter = ({
  filters,
  onFilterChange,
  disabledFilters,
}: Props): JSX.Element => {
  const intl = useIntl();

  const onChange = (values: string | SelectValue, type: string): void => {
    return onFilterChange({ ...filters, [type]: [...(values as string[])] });
  };

  const translatedOptions = (options: string[]): { value: string; label: string }[] => {
    return options.map((option: string) => {
      return {
        value: option,
        label: intl.formatMessage({ id: option }),
      };
    });
  };

  const selectFields = [
    [
      'school',
      translatedOptions(SPELL_SCHOOLS),
      intl.formatMessage({ id: 'schoolPlaceholder' }),
    ],
    [
      'castingTime',
      translatedOptions(CASTING_TIMES),
      intl.formatMessage({ id: 'castingTimePlaceholder' }),
    ],
    ['level', translatedOptions(LEVELS), intl.formatMessage({ id: 'levelPlaceholder' })],
    [
      'classes',
      translatedOptions(SPELLCASTERS),
      intl.formatMessage({ id: 'classPlaceholder' }),
    ],
    [
      'saveRequired',
      translatedOptions(SAVES_REQUIRED),
      intl.formatMessage({ id: 'savePlaceholder' }),
    ],
    ['tags', translatedOptions(TAGS), intl.formatMessage({ id: 'tagPlaceholder' })],
  ];

  const disabledSelectFields = disabledFilters
    ? typeof disabledFilters === 'string'
      ? Array(disabledFilters)
      : disabledFilters
    : undefined;

  const allowedSelectFields = disabledSelectFields
    ? selectFields.filter((filter: (string | { value: string; label: string }[])[]) => {
        return !~disabledSelectFields.indexOf(filter[0] as string);
      })
    : selectFields;

  return (
    <div className={s.filter}>
      {allowedSelectFields.map(
        ([filterType, options, placeholderText]: (
          | string
          | { value: string; label: string }[]
          | string[]
        )[]) => {
          return (
            <SpellFilterSelect
              key={filterType as string}
              filterType={filterType as string}
              options={options as { value: string; label: string }[]}
              placeholderText={placeholderText as string}
              onChange={onChange}
              isSchool
            />
          );
        }
      )}
    </div>
  );
};
