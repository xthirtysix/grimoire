import React from 'react'
import { Card, Input } from 'antd'
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
import schools from './styles/HomeSchools.module.scss'
import home from '../../styles/Home.module.scss'

const { Search } = Input

interface Props {
  onSearch: (value: string) => void
}

export const HomeSchools = ({ onSearch }: Props) => {
  return (
    <section className={schools.container}>
      <h2 className="visually-hidden">Spell Schools</h2>
      <div className="container">
        <div>
          <p className={home.sectionHeader}>Find a spell you'd like to cast</p>
          <Search
            placeholder="Search 'Fireball'"
            size="large"
            enterButton
            className={schools.search}
            onSearch={onSearch}
          />
        </div>
        <ul className={schools.list}>
          {' '}
          <li>
            <Link to="/spells/illusion">
              <Card
                className={schools.illusion}
                cover={
                  <EyeOutlined
                    style={{ fontSize: '64px', paddingTop: '2rem' }}
                  />
                }
              >
                Illusion
              </Card>
            </Link>
          </li>
          <li>
            <Link to="/spells/conjuration">
              <Card
                className={schools.conjuration}
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
                className={schools.necromancy}
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
                className={schools.divination}
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
                className={schools.evocation}
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
                className={schools.enchantment}
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
                className={schools.abjuration}
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
                className={schools.transmutation}
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
    </section>
  )
}
