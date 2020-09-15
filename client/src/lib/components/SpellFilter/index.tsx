import React, { useState } from 'react'
import { Select, Tag } from 'antd'
import { ClockCircleOutlined, FilterOutlined } from '@ant-design/icons'
//Data
import { SpellsFilter, SpellsSort } from '../../graphql/globalTypes'
//Maps
import { schoolToColor } from '../../maps'
//Styles
import s from './styles/SpellFilter.module.scss'
//Constants
import {
  CASTING_TIME_FILTER_OPTIONS,
  CLASS_FILTER_OPTIONS,
  LEVEL_FILTER_OPTIONS,
  SAVE_REQUIRED_FILTER_OPTIONS,
  SPELL_SCHOOL_FILTER_OPTIONS,
  SORT_OPTIONS,
  TAG_FILTER_OPTIONS,
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
  classes?: SpellsFilter[]
  saves?: SpellsFilter[]
  tags?: SpellsFilter[]
}

export const SpellFilter = ({
  defaultSort,
  onFilterChange,
  onSortChange,
}: Props) => {
  const [filters, setFilters] = useState<Filters | undefined>()

  //Filter change handlers *START*
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
  const onClassesChange = (values: SpellsFilter[]) => {
    setFilters({ ...filters, classes: [...values] })
    if (filters === undefined) {
      return onFilterChange([...values])
    }
    const { classes, ...newFilters } = filters
    return onFilterChange([...Object.values(newFilters).flat(), ...values])
  }
  const onSavesChange = (values: SpellsFilter[]) => {
    setFilters({ ...filters, saves: [...values] })
    if (filters === undefined) {
      return onFilterChange([...values])
    }
    const { saves, ...newFilters } = filters
    return onFilterChange([...Object.values(newFilters).flat(), ...values])
  }
  const onTagsChange = (values: SpellsFilter[]) => {
    setFilters({ ...filters, tags: [...values] })
    if (filters === undefined) {
      return onFilterChange([...values])
    }
    const { tags, ...newFilters } = filters
    return onFilterChange([...Object.values(newFilters).flat(), ...values])
  }

  //Filter change handlers *END*

  //Tag renderers *START*
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
  //Tag renderers *END*

  return (
    <div className={s.filter}>
      <label className={s.filterSection}>
        <span>Sort by:</span>
        <Select
          defaultValue={defaultSort}
          onChange={onSortChange}
          options={SORT_OPTIONS}
          className={s.sortSelect}
        />
      </label>
      <label className={s.filterSection}>
        <span>
          <FilterOutlined /> by school:
        </span>
        <Select
          allowClear
          mode="multiple"
          onChange={onSchoolsChange}
          options={SPELL_SCHOOL_FILTER_OPTIONS}
          tagRender={schoolTagRender}
          placeholder="Select 'Conjuration'"
        />
      </label>
      <label className={s.filterSection}>
        <span>
          <FilterOutlined /> by casting time:
        </span>
        <Select
          allowClear
          mode="multiple"
          onChange={onCastingTimesChange}
          options={CASTING_TIME_FILTER_OPTIONS}
          optionFilterProp="label"
          filterOption={(input: string, option: any) =>
            option.label.toLowerCase().indexOf(input.toLowerCase()) >= 0
          }
          tagRender={castingTimeTagRender}
          placeholder="Select '1 Action'"
        />
      </label>
      <label className={s.filterSection}>
        <span>
          <FilterOutlined /> by level:
        </span>
        <Select
          allowClear
          mode="multiple"
          onChange={onLevelsChange}
          options={LEVEL_FILTER_OPTIONS}
          optionFilterProp="label"
          filterOption={(input: string, option: any) =>
            option.label.toLowerCase().indexOf(input.toLowerCase()) >= 0
          }
          tagRender={levelTagRender}
          placeholder="Select 'Cantrip' or '4th'"
        />
      </label>
      <label className={s.filterSection}>
        <span>
          <FilterOutlined /> by class:
        </span>
        <Select
          allowClear
          mode="multiple"
          onChange={onClassesChange}
          options={CLASS_FILTER_OPTIONS}
          optionFilterProp="label"
          filterOption={(input: string, option: any) =>
            option.label.toLowerCase().indexOf(input.toLowerCase()) >= 0
          }
          tagRender={levelTagRender}
          placeholder="Select 'Wizard'"
        />
      </label>
      <label className={s.filterSection}>
        <span>
          <FilterOutlined /> by required save:
        </span>
        <Select
          allowClear
          mode="multiple"
          onChange={onSavesChange}
          options={SAVE_REQUIRED_FILTER_OPTIONS}
          optionFilterProp="label"
          filterOption={(input: string, option: any) =>
            option.label.toLowerCase().indexOf(input.toLowerCase()) >= 0
          }
          tagRender={levelTagRender}
          placeholder="Select 'Dexterity'"
        />
      </label>
      <label className={s.filterSection}>
        <span>
          <FilterOutlined /> by tags:
        </span>
        <Select
          allowClear
          mode="multiple"
          onChange={onTagsChange}
          options={TAG_FILTER_OPTIONS}
          optionFilterProp="label"
          filterOption={(input: string, option: any) =>
            option.label.toLowerCase().indexOf(input.toLowerCase()) >= 0
          }
          tagRender={levelTagRender}
          placeholder="Select 'Deafening'"
        />
      </label>
    </div>
  )
}
