import React from 'react'
import { Card, Skeleton } from 'antd'
//Styles
import s from './styles/UserGrimoiresSkeleton.module.scss'

const { Input, Button } = Skeleton

export const UserGrimoiresSkeleton = () => {
  const grimoireSkeleton = (
    <Card>
      <Input
        active={true}
        size={'default'}
        style={{ width: 140, height: 20, marginBottom: 15 }}
      />
      <div className={s.cardCharacterClassSkeleton}>
        <Input
          active={true}
          size={'default'}
          style={{
            width: 40,
            height: 14,
            display: 'inline-block',
            marginRight: 10,
          }}
        />
        <Input
          active={true}
          size={'default'}
          style={{
            width: 40,
            height: 14,
            display: 'inline-block',
            marginRight: 10,
          }}
        />
        <Input
          active={true}
          size={'default'}
          style={{ width: 10, height: 14, display: 'inline-block' }}
        />
      </div>
      <div className={s.cardButtonContainer}>
        <Button active={true} size={'default'} style={{ height: 14 }} />
        <Button active={true} size={'default'} style={{ height: 14 }} />
        <Button active={true} size={'default'} style={{ height: 14 }} />
      </div>
    </Card>
  )

  const grimoires = []
  const SKELETONS_COUNT = 3

  for (let i = 0; i < SKELETONS_COUNT; i++) {
    grimoires.push(<li key={i}>{grimoireSkeleton}</li>)
  }

  return <ul className={s.grid}>{grimoires}</ul>
}
