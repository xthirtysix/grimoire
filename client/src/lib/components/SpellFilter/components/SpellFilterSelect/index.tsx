import React from 'react'
import { Select, Tag } from 'antd'
import { ClockCircleOutlined } from '@ant-design/icons'
import { SelectValue } from 'antd/lib/tree-select'
// Maps
import { filterTypeToSelectLabel, schoolToColor } from '../../../../maps'
// Styles
import s from './styles/SpellFilter.module.scss'

interface Props {
  filterType: string
  options: { label: any; value: any }[]
  placeholderText: string
  onChange: (values: SelectValue, type: string) => void
  isSchool?: boolean
}

export const SpellFilterSelect = ({
  filterType,
  options,
  placeholderText,
  onChange,
  isSchool,
}: Props) => {
  const tagRenderer = (props: any) => {
    const { closable, label, onClose, value } = props
    const color = isSchool ? schoolToColor.get(value) : ''
    let icon

    switch (filterType) {
      case 'castingTime':
        icon = <ClockCircleOutlined />
        break
      default:
        icon = null
        break
    }

    return (
      <Tag
        closable={closable}
        onClose={onClose}
        style={{ marginRight: 3 }}
        color={color}
      >
        {icon} {label}
      </Tag>
    )
  }

  return (
    <label className={s.filterSection}>
      <span style={{ fontWeight: 700 }}>
        {filterTypeToSelectLabel.get(filterType)}:
      </span>
      <Select
        allowClear
        mode="multiple"
        onChange={(values) => onChange(values, filterType)}
        options={options}
        optionFilterProp="label"
        filterOption={(input: string, { label }: any) =>
          label.toLowerCase().indexOf(input.toLowerCase()) >= 0
        }
        tagRender={(props) => tagRenderer(props)}
        placeholder={placeholderText}
      />
    </label>
  )
}
