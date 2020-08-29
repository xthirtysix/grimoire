import React from 'react'
import { Collapse, Skeleton } from 'antd'
//Styles
import s from './styles/SpellListSkeleton.module.scss'
//Constants
const PANEL_COUNT = 7
const TAG_COUNT = 5

const { Input } = Skeleton
const { Panel } = Collapse

export const SpellListSkeleton = () => {
  const panels = Array.from(Array(PANEL_COUNT).keys())
  const tags = Array.from(Array(TAG_COUNT).keys())

  return (
    <>
      <Input active={true} size={'default'} className={s.title} />
      <Collapse className={s.collapse}>
        {panels.map((_panel, idx) => (
          <Panel
            key={`panel${idx}`}
            className={s.panel}
            header={<Input active size="default" className={s.header} />}
            extra={tags.map((_tag, idx) => (
              <Input
                key={`tag${idx}`}
                active
                size="default"
                className={s.tag}
              />
            ))}
            disabled
            showArrow={false}
          />
        ))}
      </Collapse>
    </>
  )
}
