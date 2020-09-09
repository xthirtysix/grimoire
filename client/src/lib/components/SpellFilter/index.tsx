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
  filterCastingTimeOptions,
  sortOptions,
} from '../../constants'

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
  const [schools, setSchools] = useState<SpellsFilter[]>()
  const [castingTimes, setCastingTimes] = useState<SpellsFilter[]>()

  const onSchoolsSelectChange = (filters: SpellsFilter[]) => {
    setSchools(filters)
    let arr: SpellsFilter[] = []
    if (castingTimes) {
      arr = [...arr, ...castingTimes]
    }

    return onFilterChange([...arr, ...filters])
  }

  const onCastingTimesSelectChange = (filters: SpellsFilter[]) => {
    setCastingTimes(filters)
    let arr: SpellsFilter[] = []
    if (schools) {
      arr = [...arr, ...schools]
    }

    return onFilterChange([...arr, ...filters])
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
          onChange={onSchoolsSelectChange}
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
          onChange={onCastingTimesSelectChange}
          options={filterCastingTimeOptions}
          optionFilterProp="label"
          filterOption={(input: string, option: any) =>
            option.label.toLowerCase().indexOf(input.toLowerCase()) >= 0
          }
          tagRender={castingTimeTagRender}
          placeholder="Select '1 Action'"
        />
      </label>
    </div>
  )
}
