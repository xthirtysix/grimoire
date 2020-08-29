import React from 'react'
import { Card, Descriptions, Skeleton } from 'antd'
//Styles
import s from './styles/SpellSkeleton.module.scss'
//Constants
const TABLE_CELL_COUNT = 8
const PARAGRAPH_ROW_COUNT = 4

const { Item } = Descriptions
const { Input } = Skeleton

export const SpellSkeleton = () => {
  const tableCells = Array.from(Array(TABLE_CELL_COUNT).keys())
  const skeletonTitle = <Input active className={s.title} />
  const skeletonHeader = <Input active className={s.header} />
  const skeletonValue = <Input active className={s.value} />

  return (
    <Card title={skeletonTitle} className={s.card}>
      <Descriptions bordered className={s.table}>
        {tableCells.map((_item, idx) => (
          <Item label={skeletonHeader} key={idx}>
            {skeletonValue}
          </Item>
        ))}
      </Descriptions>
      <Skeleton
        paragraph={{ rows: PARAGRAPH_ROW_COUNT }}
        active
        title={false}
      />
    </Card>
  )
}
