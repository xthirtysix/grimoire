import React from 'react'
import { Button, Typography } from 'antd'
import { Link } from 'react-router-dom'
import classnames from 'classnames'
//Styles
import s from './styles/HomeAllSpells.module.scss'
import home from '../../styles/Home.module.scss'

const { Text } = Typography

export const HomeAllSpells = () => {
  return (
    <section className={home.whiteBackground}>
      <h2 className="visually-hidden">All spells</h2>
      <div className={classnames(home.container, s.container)}>
        <p className={home.sectionHeader}>
          Not sure wich spell school to choose?
        </p>
        <Text className={s.subtitle}>Here you go!</Text>
        <Link to="/spells">
          <Button type="primary" size="large">
            See all spells
          </Button>
        </Link>
      </div>
    </section>
  )
}
