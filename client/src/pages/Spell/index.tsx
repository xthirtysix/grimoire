import React from 'react'
import { Card, Empty } from 'antd'
import { Spell as SpellComponent, SpellSkeleton } from '../../lib/components'
import { RouteComponentProps } from 'react-router-dom'
//Data
import { SPELL } from '../../lib/graphql/queries/Spell'
import {
  Spell as SpellData,
  SpellVariables,
} from '../../lib/graphql/queries/Spell/__generated__/Spell'
import { useQuery } from 'react-apollo'

interface MatchParams {
  name: string
}

export const Spell = ({ match }: RouteComponentProps<MatchParams>) => {
  const { loading, data, error } = useQuery<SpellData, SpellVariables>(SPELL, {
    variables: {
      name: match.params.name,
    },
  })

  if (loading) {
    return (
      <div className="container">
        <SpellSkeleton />
      </div>
    )
  }

  if (error) {
    return (
      <div className="container">
        <Empty
          description={`There's no spell called ${match.params.name}. Maybe one day you'll write it!?`}
        />
      </div>
    )
  }

  const spell = data && data.spell ? data.spell : null

  return spell ? (
    <div className="container">
      <Card title={spell.name}>
        <SpellComponent spell={spell}/>
      </Card>
    </div>
  ) : (
    <Empty
      description={`There's no spell called ${match.params.name}. Maybe one day you'll write it!?`}
    />
  )
}
