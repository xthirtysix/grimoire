import React from 'react'
import { Layout, Divider, Typography } from 'antd'
import {
  UserProfile,
  UserGrimoires,
  UserProfileSkeleton,
  UserGrimoiresSkeleton,
} from './components'
import { RouteComponentProps } from 'react-router-dom'
//Data
import { useQuery } from 'react-apollo'
import { USER } from '../../lib/graphql/queries'
import {
  User as UserData,
  UserVariables,
} from '../../lib/graphql/queries/User/__generated__/User'
import { Viewer } from '../../lib/types'
//Styles
import s from './styles/User.module.scss'

const { Content } = Layout
const { Title, Text } = Typography

interface Props {
  viewer: Viewer
}

interface MatchParams {
  id: string
}

export const User = ({
  viewer,
  match,
}: Props & RouteComponentProps<MatchParams>) => {
  const { data, loading, error } = useQuery<UserData, UserVariables>(USER, {
    variables: {
      id: match.params.id,
    },
  })
  

  const user = data ? data.user : null
  const grimoiresCount = user && user.grimoires ? user.grimoires.total : 0
  const viewerIsUser = viewer.id === match.params.id
  const userProfileElement = user ? (
    <UserProfile user={user} grimoires={grimoiresCount} />
  ) : null
  const userGrimoires =
    user && user.grimoires ? (
      <UserGrimoires
        userGrimoires={user.grimoires}
        viewerIsUser={viewerIsUser}
      />
    ) : null

  if (error) {
    return <h2>Error</h2>
  }

  if (loading) {
    return (
      <Content className={s.userContainer}>
        <UserProfileSkeleton />
        <Divider className={s.divider} />
        <Title level={3}>Your grimoires</Title>
        <Text className={s.grimoiresSubheader}>
          Here is the list of grimoires you created:
        </Text>
        <UserGrimoiresSkeleton />
      </Content>
    )
  }

  return (
    <Content className={s.userContainer}>
      {userProfileElement}
      <Divider className={s.divider} />
      <Title level={3}>Your grimoires</Title>
      <Text className={s.grimoiresSubheader}>
        Here is the list of grimoires you created:
      </Text>
      {userGrimoires}
    </Content>
  )
}
