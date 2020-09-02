import React from 'react'
import { Divider, Empty, Layout } from 'antd'
import { GrimoireDetailes, GrimoireDetailesSkeleton } from './components'
import { SpellList, SpellListSkeleton } from '../../lib/components'
import { Link, RouteComponentProps } from 'react-router-dom'
// Data
import { GRIMOIRE } from '../../lib/graphql/queries'
import {
  Grimoire as GrimoireData,
  GrimoireVariables,
} from '../../lib/graphql/queries/Grimoire/__generated__/Grimoire'
import { SPELLS } from '../../lib/graphql/queries'
import {
  Spells as SpellsData,
  SpellsVariables,
} from '../../lib/graphql/queries/Spells/__generated__/Spells'
import { useQuery } from 'react-apollo'
// Styles
import s from './styles/Grimoire.module.scss'

const { Content } = Layout

interface MatchParams {
  id: string
  edit: string
}

export const Grimoire = ({ match }: RouteComponentProps<MatchParams>) => {
  const grimoire = useQuery<GrimoireData, GrimoireVariables>(GRIMOIRE, {
    variables: {
      id: match.params.id,
    },
  })

  const { data, loading, error } = useQuery<SpellsData, SpellsVariables>(
    SPELLS,
    {
      variables: {
        grimoire: !match.params.edit ? match.params.id : null,
      },
    }
  )

  const grimoireSpells = grimoire?.data ? grimoire.data.grimoire.spells : null

  const grimoireDetailes = grimoire?.data ? grimoire.data.grimoire : null

  const spellList =
    data && data.spells && data.spells.result ? (
      <SpellList spells={data.spells} grimoireSpells={grimoireSpells} editable={match.params.edit === 'edit'}/>
    ) : (
      <>
        <Empty
          className={s.empty}
          description="There are no Spells in your Grimoire yet..."
          image={Empty.PRESENTED_IMAGE_SIMPLE}
        />
        <Link
          to="/spells"
          className="centered ant-btn ant-btn-primary ant-btn-lg"
        >
          Add Spells
        </Link>
      </>
    )

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
