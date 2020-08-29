import React from 'react'
import { Avatar, Typography } from 'antd'
//Data
import { User as UserData } from '../../../../lib/graphql/queries/User/__generated__/User'
//Styles
import s from './styles/UserProfile.module.scss'

const { Text, Title } = Typography

interface Props {
  user: UserData['user']
  grimoires: number | null
  maxGrimoires: number
}

export const UserProfile = ({ user, grimoires, maxGrimoires }: Props) => {
  return (
    <div className={s.userinfo}>
      <Avatar alt={user.name} src={user.avatar} size={64} />
      <div>
        <Title level={4}>{user.name}</Title>
        <Text className={s.userinfoData}>{user.contact}</Text>
        <Text className={s.userinfoData}>
          Grimoires created: {grimoires} / {maxGrimoires}
        </Text>
      </div>
    </div>
  )
}
