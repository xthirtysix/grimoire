import React from 'react'
import { Card, Input, Typography } from 'antd'
import {
  BlockOutlined,
  EnvironmentOutlined,
  EyeOutlined,
  FireOutlined,
  SafetyOutlined,
  StarOutlined,
  StopOutlined,
  ThunderboltOutlined,
} from '@ant-design/icons'
import { Link } from 'react-router-dom'
//Styles
import s from './styles/HomeSchools.module.scss'

const { Title } = Typography
const { Search } = Input

interface Props {
  onSearch: (value: string) => void
}

export const HomeSchools = ({ onSearch }: Props) => {
  return (
    <div className={s.schools}>
      <div>
        <Title>Find a spell you'd like to cast</Title>
        <Search
          placeholder="Search 'Fireball'"
          size="large"
          enterButton
          className={s.search}
          onSearch={onSearch}
        />
      </div>
      <ul className={s.list}>
        {' '}
        <li>
          <Link to="/spells/illusion">
            <Card
              className={s.illusion}
              cover={
                <EyeOutlined style={{ fontSize: '64px', paddingTop: '2rem' }} />
              }
            >
              Illusion
            </Card>
          </Link>
        </li>
        <li>
          <Link to="/spells/conjuration">
            <Card
              className={s.conjuration}
              cover={
                <EnvironmentOutlined
                  style={{ fontSize: '64px', paddingTop: '2rem' }}
                />
              }
            >
              Conjuration
            </Card>
          </Link>
        </li>
        <li>
          <Link to="/spells/necromancy">
            <Card
              className={s.necromancy}
              cover={
                <StopOutlined
                  style={{ fontSize: '64px', paddingTop: '2rem' }}
                />
              }
            >
              Necromancy
            </Card>
          </Link>
        </li>{' '}
        <li>
          <Link to="/spells/divination">
            <Card
              className={s.divination}
              cover={
                <ThunderboltOutlined
                  style={{ fontSize: '64px', paddingTop: '2rem' }}
                />
              }
            >
              Divination
            </Card>
          </Link>
        </li>
        <li>
          <Link to="/spells/evocation">
            <Card
              className={s.evocation}
              cover={
                <FireOutlined
                  style={{ fontSize: '64px', paddingTop: '2rem' }}
                />
              }
            >
              Evocation
            </Card>
          </Link>
        </li>
        <li>
          <Link to="/spells/enchantment">
            <Card
              className={s.enchantment}
              cover={
                <StarOutlined
                  style={{ fontSize: '64px', paddingTop: '2rem' }}
                />
              }
            >
              Enchantment
            </Card>
          </Link>
        </li>
        <li>
          <Link to="/spells/abjuration">
            <Card
              className={s.abjuration}
              cover={
                <SafetyOutlined
                  style={{ fontSize: '64px', paddingTop: '2rem' }}
                />
              }
            >
              Abjuration
            </Card>
          </Link>
        </li>
        <li>
          <Link to="/spells/transmutation">
            <Card
              className={s.transmutation}
              cover={
                <BlockOutlined
                  style={{ fontSize: '64px', paddingTop: '2rem' }}
                />
              }
            >
              Transmutation
            </Card>
          </Link>
        </li>
      </ul>
    </div>
  )
}
