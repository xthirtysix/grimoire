import React from 'react'
import { SpellList, SpellListSkeleton } from '../../lib/components'
import { RouteComponentProps } from 'react-router-dom'
//Data
import { SPELLS } from '../../lib/graphql/queries/Spells'
import {
  Spells as SpellsData,
  SpellsVariables,
} from '../../lib/graphql/queries/Spells/__generated__/Spells'
import { SpellsFilter } from '../../lib/graphql/globalTypes'
import { useQuery } from 'react-apollo'

interface MatchParams {
  filter: string
}

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

  const spells = data ? data.spells : null

  if (loading) {
    return (
      <div className="container" >
        <SpellListSkeleton />
      </div>
    )
  }

  const spellList = spells ? <SpellList spells={spells} /> : null

  return <div className="container">{spellList}</div>
}
