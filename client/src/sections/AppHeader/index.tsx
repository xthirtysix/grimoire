import React from 'react'
import { Layout, Input } from 'antd'
import { BookOutlined } from '@ant-design/icons'
import { Link, RouteComponentProps, withRouter } from 'react-router-dom'
import { MenuItems } from './components'
import { displayErrorMessage } from '../../lib/utils'
//Data
import { Viewer } from '../../lib/types'
//Styles
import s from './styles/AppHeader.module.scss'

const { Header } = Layout
const { Search } = Input

interface Props {
  viewer: Viewer
  setViewer: (viewer: Viewer) => void
}

export const AppHeader = withRouter(
  ({ viewer, setViewer, history }: Props & RouteComponentProps) => {
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
      <Header className={s.header}>
        <Link to="/" className={s.logo}>
          <BookOutlined />
          <span>Grimoire</span>
        </Link>
        <Search
          placeholder="Search 'Fireball'"
          size="middle"
          enterButton
          onSearch={onSearch}
          className={s.search}
        />
        <div className={s.list}>
          <MenuItems viewer={viewer} setViewer={setViewer} />
        </div>
      </Header>
    )
  }
)
