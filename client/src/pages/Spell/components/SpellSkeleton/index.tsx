import React from 'react'
import { Card, Descriptions, Skeleton } from 'antd'

const TABLE_CELL_COUNT = 8

export const SpellSkeleton = () => {
  const tableCells = Array.from(Array(TABLE_CELL_COUNT).keys())
  const skeletonTitle = (
    <Skeleton.Input active style={{ width: 120, height: 20, verticalAlign: 'middle' }} />
  )
  const skeletonHeader = (
    <Skeleton.Input active style={{ width: 85, height: 14 }} />
  )
  const skeletonValue = (
    <Skeleton.Input active style={{ width: 75, height: 14 }} />
  )

  return (
    <Card title={skeletonTitle}>
      <Descriptions bordered style={{ marginBottom: '1rem' }}>
        {tableCells.map(() => {
          return (
            <Descriptions.Item label={skeletonHeader}>
              {skeletonValue}
            </Descriptions.Item>
          )
        })}
      </Descriptions>
      <Skeleton paragraph={{rows: 4}} active title={false}/>
    </Card>
  )
}
