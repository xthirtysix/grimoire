import React from 'react'
import { SpellFilterSelect } from './components'
// Data
import { SpellsFilter } from '../../graphql/globalTypes'
// Constants
import {
  CASTING_TIME_FILTER_OPTIONS,
  CLASS_FILTER_OPTIONS,
  LEVEL_FILTER_OPTIONS,
  SAVE_REQUIRED_FILTER_OPTIONS,
  SPELL_SCHOOL_FILTER_OPTIONS,
  TAG_FILTER_OPTIONS,
} from '../../constants'
// Styles
import s from './styles/SpellFilter.module.scss'

interface Props {
  filters: SpellsFilter
  onFilterChange: (value: SpellsFilter) => void
  disabledFilters?: string[] | string
}

export const SpellFilter = ({
  filters,
  onFilterChange,
  disabledFilters,
}: Props) => {
  const onChange = (values: any, type: any): void => {
    return onFilterChange({ ...filters, [type]: [...values] })
  }

  const selectFields = [
    ['school', SPELL_SCHOOL_FILTER_OPTIONS, 'Type "Conjuration"...'],
    ['castingTime', CASTING_TIME_FILTER_OPTIONS, 'Type "1 action"...'],
    ['level', LEVEL_FILTER_OPTIONS, 'Type "Cantrip"...'],
    ['classes', CLASS_FILTER_OPTIONS, 'Type "Wizard"...'],
    ['saveRequired', SAVE_REQUIRED_FILTER_OPTIONS, 'Type "Dexterity"...'],
    ['tags', TAG_FILTER_OPTIONS, 'Type "Charmed"...'],
  ]

  const disabledSelectFields = disabledFilters
    ? typeof disabledFilters === 'string'
      ? Array(disabledFilters)
      : disabledFilters
    : undefined

  const allowedSelectFields = disabledSelectFields
    ? selectFields.filter((filter: any[]) => {
        return !~disabledSelectFields.indexOf(filter[0])
      })
    : selectFields

  return (
    <div className={s.filter}>
      {allowedSelectFields.map(
        ([filterType, options, placeholderText]: any) => {
          return (
            <SpellFilterSelect
              key={filterType}
              filterType={filterType}
              options={options}
              placeholderText={placeholderText}
              onChange={onChange}
              isSchool
            />
          )
        }
      )}
    </div>
  )
}
