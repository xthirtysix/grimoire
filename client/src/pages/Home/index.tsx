import React from 'react'
import { Layout } from 'antd'
import {
  HomeAllSpells,
  HomeSchools,
  HomeSpells,
  HomeWave,
  HomeWhyRegister,
} from './components'
import { displayErrorMessage } from '../../lib/utils'
import { RouteComponentProps } from 'react-router-dom'

const { Content } = Layout

export const Home = ({ history }: RouteComponentProps) => {
  const onSearch = (value: string) => {
    const trimmedValue = value
      .trim()
      .split(' ')
      .map((substr) => {
        return substr.toLowerCase() !== 'the'
          ? substr.charAt(0).toUpperCase() + substr.slice(1).toLowerCase()
          : substr.toLowerCase()
      })
      .join(' ')

    if (trimmedValue) {
      history.push(`/spell/${trimmedValue}`)
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
