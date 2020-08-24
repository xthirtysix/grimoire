import React from 'react'
import { Layout, Divider } from 'antd'
import { RouteComponentProps } from 'react-router-dom'
import { GrimoireDetailes, GrimoireDetailesSkeleton } from './components'
import { SpellList, SpellListSkeleton } from '../../lib/components'
// Data
import { useQuery } from 'react-apollo'
import { GRIMOIRE } from '../../lib/graphql/queries'
import {
  Grimoire as GrimoireData,
  GrimoireVariables,
} from '../../lib/graphql/queries/Grimoire/__generated__/Grimoire'
// Styles

const { Content } = Layout

interface MatchParams {
  id: string
}

export const Grimoire = ({ match }: RouteComponentProps<MatchParams>) => {
  const { data, loading, error } = useQuery<GrimoireData, GrimoireVariables>(
    GRIMOIRE,
    {
      variables: {
        id: match.params.id,
      },
    }
  )

  const grimoireDetailes = data?.grimoire ? data.grimoire : null

  const spellList =
    data &&
    data.grimoire &&
    data.grimoire.spells &&
    data.grimoire.spells.total ? (
      <SpellList spells={data.grimoire.spells} />
    ) : null

  if (error) {
    return <h2>Error</h2>
  }

  if (loading) {
    return (
      <Content className="container">
        <GrimoireDetailesSkeleton />
        <SpellListSkeleton />
      </Content>
    )
  }

  return (
    <Content className="container">
      <GrimoireDetailes grimoireDetailes={grimoireDetailes} />
      <Divider className="divider" />
      {spellList}
    </Content>
  )
}
