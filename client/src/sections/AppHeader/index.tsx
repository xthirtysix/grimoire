import React from 'react'
import { Layout } from 'antd'
import { BookOutlined } from '@ant-design/icons'
import { Link } from 'react-router-dom'
import { MenuItems } from './components'
import { Viewer } from '../../lib/types'
import s from './styles/AppHeader.module.scss'

const { Header } = Layout

interface Props {
  viewer: Viewer
  setViewer: (viewer: Viewer) => void
}

export const AppHeader = ({ viewer, setViewer }: Props) => {
  return (
    <Header className={s.header}>
      <Link to="/" className={s.logo}>
        <BookOutlined />
        <span>Grimoire</span>
      </Link>
      <div className={s.list}>
        <MenuItems viewer={viewer} setViewer={setViewer} />
      </div>
    </Header>
  )
}
