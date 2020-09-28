import React from 'react'
import { Select } from 'antd'
// Data
import { SpellsSort } from '../../graphql/globalTypes'
// Constants
import { SORT_OPTIONS } from '../../constants'
// Styles
import s from './styles/SpellSort.module.scss'

interface Props {
  defaultSort: SpellsSort
  onSortChange: (value: SpellsSort) => void
}

export const SpellSort = ({ defaultSort, onSortChange }: Props) => {
  return (
    <label className={s.container}>
      <span className={s.label}>Sort by: </span>
      <Select
        className={s.select}
        defaultValue={defaultSort}
        onChange={onSortChange}
        options={SORT_OPTIONS}
      />
    </label>
  )
}
