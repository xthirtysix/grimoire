import React from 'react'
import { Typography, Divider } from 'antd'
//Styles
import s from './styles/AppFooter.module.scss'

const { Text } = Typography

export const AppFooter = () => {
  return (
    <>
      <Divider className={s.divider} />
      <div className={s.container}>
        <Text type="secondary">
          © Copyright by <a className={s.link} href="https://github.com/xthirtysix">xthirtysix</a>{' '}
          2020
        </Text>
      </div>
    </>
  )
}
