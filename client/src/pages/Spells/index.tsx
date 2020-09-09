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
  let filters
  if (match.params.filter) {
    let trimmedRouteParam = match.params.filter.trim()

    switch (trimmedRouteParam) {
      case 'abjuration':
        filters = [SpellsFilter.ABJURATION]
        break
      case 'conjuration':
        filters = [SpellsFilter.CONJURATION]
        break
      case 'divination':
        filters = [SpellsFilter.DIVINATION]
        break
      case 'enchantment':
        filters = [SpellsFilter.ENCHANTMENT]
        break
      case 'evocation':
        filters = [SpellsFilter.EVOCATION]
        break
      case 'illusion':
        filters = [SpellsFilter.ILLUSION]
        break
      case 'necromancy':
        filters = [SpellsFilter.NECROMANCY]
        break
      case 'transmutation':
        filters = [SpellsFilter.TRANSMUTATION]
        break
      default:
        filters = undefined
    }
  }

  const { loading, data } = useQuery<SpellsData, SpellsVariables>(SPELLS, {
    variables: {
      filters,
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
