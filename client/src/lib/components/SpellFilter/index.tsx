import React, { useState } from 'react'
import { Select, Tag } from 'antd'
import { ClockCircleOutlined } from '@ant-design/icons'
//Data
import { SpellsFilter, SpellsSort } from '../../graphql/globalTypes'
//Maps
import { schoolToColor } from '../../maps'
//Styles
import s from './styles/SpellFilter.module.scss'
//Constants
import {
  filterSpellSchoolsOptions,
  filterLevelOptions,
  filterCastingTimeOptions,
  sortOptions,
} from '../../constants'

interface Props {
  defaultSort: SpellsSort
  onFilterChange: (value: SpellsFilter[]) => void
  onSortChange: (value: SpellsSort) => void
}

interface Filters {
  schools?: SpellsFilter[]
  castingTimes?: SpellsFilter[]
  levels?: SpellsFilter[]
}

export const SpellFilter = ({
  defaultSort,
  onFilterChange,
  onSortChange,
}: Props) => {
  const [filters, setFilters] = useState<Filters | undefined>()

  const onSchoolsChange = (values: SpellsFilter[]) => {
    setFilters({ ...filters, schools: [...values] })
    if (filters === undefined) {
      return onFilterChange([...values])
    }
    const { schools, ...newFilters } = filters
    return onFilterChange([...Object.values(newFilters).flat(), ...values])
  }

  const onCastingTimesChange = (values: SpellsFilter[]) => {
    setFilters({ ...filters, castingTimes: [...values] })
    if (filters === undefined) {
      return onFilterChange([...values])
    }
    const { castingTimes, ...newFilters } = filters
    return onFilterChange([...Object.values(newFilters).flat(), ...values])
  }
  const onLevelsChange = (values: SpellsFilter[]) => {
    setFilters({ ...filters, levels: [...values] })
    if (filters === undefined) {
      return onFilterChange([...values])
    }
    const { levels, ...newFilters } = filters
    return onFilterChange([...Object.values(newFilters).flat(), ...values])
  }

  const schoolTagRender = (props: any) => {
    const { closable, label, onClose, value } = props

    return (
      <Tag
        closable={closable}
        color={schoolToColor.get(value)}
        onClose={onClose}
        style={{ marginRight: 3 }}
      >
        {label}
      </Tag>
    )
  }

  const castingTimeTagRender = (props: any) => {
    const { label, closable, onClose } = props

    return (
      <Tag closable={closable} onClose={onClose} style={{ marginRight: 3 }}>
        <ClockCircleOutlined /> {label}
      </Tag>
    )
  }

  const levelTagRender = (props: any) => {
    const { label, closable, onClose } = props

    return (
      <Tag closable={closable} onClose={onClose} style={{ marginRight: 3 }}>
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
        Filter by school:
        <Select
          allowClear
          mode="multiple"
          onChange={onSchoolsChange}
          options={filterSpellSchoolsOptions}
          tagRender={schoolTagRender}
          placeholder="Select 'Conjuration'"
        />
      </label>
      <label className={s.filterSection}>
        Filter by casting time:
        <Select
          allowClear
          mode="multiple"
          onChange={onCastingTimesChange}
          options={filterCastingTimeOptions}
          optionFilterProp="label"
          filterOption={(input: string, option: any) =>
            option.label.toLowerCase().indexOf(input.toLowerCase()) >= 0
          }
          tagRender={castingTimeTagRender}
          placeholder="Select '1 Action'"
        />
      </label>
      <label className={s.filterSection}>
        Filter by level:
        <Select
          allowClear
          mode="multiple"
          onChange={onLevelsChange}
          options={filterLevelOptions}
          optionFilterProp="label"
          filterOption={(input: string, option: any) =>
            option.label.toLowerCase().indexOf(input.toLowerCase()) >= 0
          }
          tagRender={levelTagRender}
          placeholder="Select 'Cantrip' or '4th'"
        />
      </label>
    </div>
  )
}
