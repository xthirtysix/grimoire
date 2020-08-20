import React from 'react'
import { Typography } from 'antd'
import { Link } from 'react-scroll'
//Styles
import s from '../../styles/HomeWhyRegister.module.scss'

const { Title, Text } = Typography

export const HomeWhyRegister = () => {
  return (
    <>
      <section className={s.container}>
        <Title level={2} className={s.header}>
          Why becoming a wizard?
        </Title>
        <Text className={s.subheader} type="secondary">
          and register on grimoire
        </Text>
        <Text>
          Here you can create Spellbooks where you'll store and sort{' '}
          <strong>just the spells you need</strong>. No more no less.
        </Text>
        <Text>
          Lets{' '}
          <Link
            activeClass="active"
            to="wave"
            spy={true}
            smooth={true}
            duration={1000}
          >
            dive deeper
          </Link>{' '}
          into the Weave, and see how your own Grimoire may look like...
        </Text>
      </section>
    </>
  )
}
