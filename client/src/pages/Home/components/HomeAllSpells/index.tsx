import React from 'react'
import { Button, Typography} from 'antd'
import { Link } from 'react-router-dom'
//Styles
import s from './styles/HomeAllSpells.module.scss'

const { Title, Text } = Typography

export const HomeAllSpells = () => {
  return (
    <>
      <section className={s.container}>
        <Title level={2} className={s.title}>
          Not sure wich spell school to choose?
        </Title>
        <Text className={s.subtitle}>Here you go!</Text>
        <Link to="/spells">
          <Button type="primary" size="large">
            See all spells
          </Button>
        </Link>
      </section>
    </>
  )
}
