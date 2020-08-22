import React from 'react'
import { GrimoireSpells, GrimoireSpellsSkeleton } from '../Grimoire/components'
import { Layout } from 'antd'
import { RouteComponentProps } from 'react-router-dom'
//Data
import { useQuery } from 'react-apollo'
import {
  Spells as SpellsData,
  SpellsVariables,
} from '../../lib/graphql/queries/Spells/__generated__/Spells'
import { SpellsFilter } from '../../lib/graphql/globalTypes'
import { SPELLS } from '../../lib/graphql/queries/Spells'
//Style

interface MatchParams {
  filter: string
}

const { Content } = Layout

export const Spells = ({ match }: RouteComponentProps<MatchParams>) => {
  let filter
  if (match.params.filter) {
    let trimmedRouteParam = match.params.filter.trim()

    switch (trimmedRouteParam) {
      case 'abjuration':
        filter = SpellsFilter.ABJURATION
        break
      case 'conjuration':
        filter = SpellsFilter.CONJURATION
        break
      case 'divination':
        filter = SpellsFilter.DIVINATION
        break
      case 'enchantment':
        filter = SpellsFilter.ENCHANTMENT
        break
      case 'evocation':
        filter = SpellsFilter.EVOCATION
        break
      case 'illusion':
        filter = SpellsFilter.ILLUSION
        break
      case 'necromancy':
        filter = SpellsFilter.NECROMANCY
        break
      case 'transmutation':
        filter = SpellsFilter.TRANSMUTATION
        break
      default:
        filter = undefined
    }
  }

  const { loading, data } = useQuery<SpellsData, SpellsVariables>(SPELLS, {
    variables: {
      filter,
    },
  })

  let spellList

  if (loading) {
    spellList = <GrimoireSpellsSkeleton />
  }

  if (data) {
    spellList = <GrimoireSpells grimoireSpells={data.spells} />
  }

  return (
    <Content>
      <div className="container">{spellList}</div>
    </Content>
  )
}
