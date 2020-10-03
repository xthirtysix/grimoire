import React from 'react'
import { Divider, Layout, Typography } from 'antd'
import {
  UserGrimoires,
  UserGrimoiresSkeleton,
  UserProfile,
  UserProfileSkeleton,
} from './components'
import { PlusOutlined } from '@ant-design/icons'
import { RouteComponentProps, Link } from 'react-router-dom'
//Data
import { USER } from '../../lib/graphql/queries'
import {
  User as UserData,
  UserVariables,
} from '../../lib/graphql/queries/User/__generated__/User'
import { useQuery } from 'react-apollo'
import { Viewer } from '../../lib/types'
//Styles
import s from './styles/User.module.scss'
//Constants
const MAX_GRIMOIRE_COUNT = 6

const { Content } = Layout
const { Text, Title } = Typography

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
    <UserProfile
      user={user}
      grimoires={grimoiresCount}
      maxGrimoires={MAX_GRIMOIRE_COUNT}
    />
  ) : null
  const userGrimoires =
    user && user.grimoires ? (
      <UserGrimoires
        userGrimoires={user.grimoires}
        viewerIsUser={viewerIsUser}
        userId={viewer.id}
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
      <div className={s.titleContainer}>
        <Title level={3}>Your grimoires</Title>
        {grimoiresCount < MAX_GRIMOIRE_COUNT ? (
          <Link
            to="/grimoire/create"
            className="ant-btn ant-btn-primary ant-btn-sm"
          >
            <PlusOutlined /> New Grimoire
          </Link>
        ) : null}
      </div>
      <Text className={s.grimoiresSubheader}>
        Here is the list of grimoires you created:
      </Text>
      {userGrimoires}
    </Content>
  )
}
