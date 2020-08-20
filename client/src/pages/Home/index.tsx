import React from 'react'
import { Layout } from 'antd'
import {
  HomeSchools,
  HomeWave,
  HomeWhyRegister,
  HomeAllSpells,
  HomeSpells,
} from './components'
import { RouteComponentProps } from 'react-router-dom'
import { displayErrorMessage } from '../../lib/utils'

const { Content } = Layout

export const Home = ({ history }: RouteComponentProps) => {
  const onSearch = (value: string) => {
    const trimmedValue = value.trim()

    if (trimmedValue) {
      history.push(`/spells/${trimmedValue}`)
    } else {
      displayErrorMessage('Please enter a valid search')
    }
  }

  return (
    <>
      <Content className="container">
        <HomeSchools onSearch={onSearch} />
      </Content>
      <HomeAllSpells />
      <Content>
        <HomeWhyRegister />
      </Content>
      <HomeWave />
      <HomeSpells />
    </>
  )
}
