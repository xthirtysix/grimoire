import React from 'react'
import { User as UserData } from '../../../../lib/graphql/queries/User/__generated__/User'
import { Avatar, Typography } from 'antd'

import s from '../../styles/UserProfile.module.scss'

const { Title, Text } = Typography

interface Props {
  user: UserData['user']
  grimoires: number | null
}

export const UserProfile = ({ user, grimoires }: Props) => {
  return (
    <div className={s.userinfo}>
      <Avatar alt={user.name} src={user.avatar} size={64} />
      <div>
        <Title level={4}>{user.name}</Title>
        <Text className={s.userinfoData}>{user.contact}</Text>
        <Text className={s.userinfoData}>Grimoires created: {grimoires}</Text>
      </div>
    </div>
  )
}
