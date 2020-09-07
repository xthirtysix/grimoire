import React from 'react'
import { Select, Tag } from 'antd'
//Data
import { SpellsFilter, SpellsSort } from '../../graphql/globalTypes'
//Maps
import { schoolToColor } from '../../maps'
//Styles
import s from './styles/SpellFilter.module.scss'
//Constants
import { filterOptions, sortOptions } from '../../constants'

interface Props {
  defaultSort: SpellsSort
  onFilterChange: (value: SpellsFilter[]) => void
  onSortChange: (value: SpellsSort) => void
}

export const SpellFilter = ({
  defaultSort,
  onFilterChange,
  onSortChange,
}: Props) => {
  const tagRender = (props: any) => {
    const { label, closable, onClose } = props

    return (
      <Tag
        closable={closable}
        color={schoolToColor.get(label)}
        onClose={onClose}
        style={{ marginRight: 3 }}
      >
        {label}
      </Tag>
    )
  }

  return (
    <div className={s.filter}>
      <label className={s.filterSection}>
        Sort by:
        <Select
          defaultValue={defaultSort}
          onChange={onSortChange}
          options={sortOptions}
          className={s.sortSelect}
        />
      </label>
      <label className={s.filterSection}>
        Filter:
        <Select
          allowClear
          mode="multiple"
          onChange={onFilterChange}
          options={filterOptions}
          tagRender={tagRender}
          placeholder="Type 'Conjuration'"
        />
      </label>
    </div>
  )
}
