import React from 'react'
import { SpellList, SpellListSkeleton } from '../../lib/components'
import { RouteComponentProps } from 'react-router-dom'
//Data
import { SPELLS } from '../../lib/graphql/queries/Spells'
import {
  Spells as SpellsData,
  SpellsVariables,
} from '../../lib/graphql/queries/Spells/__generated__/Spells'
import { SpellsSchool } from '../../lib/graphql/globalTypes'
import { useQuery } from 'react-apollo'

interface MatchParams {
  filter: string
}

interface Filters {
  school: SpellsSchool[]
}

export const Spells = ({ match }: RouteComponentProps<MatchParams>) => {
  let filters: Filters = { school: [] }

  if (match.params.filter) {
    let trimmedRouteParam = match.params.filter.trim()

    switch (trimmedRouteParam) {
      case 'abjuration':
        filters = { school: [SpellsSchool.ABJURATION] }
        break
      case 'conjuration':
        filters = { school: [SpellsSchool.CONJURATION] }
        break
      case 'divination':
        filters = { school: [SpellsSchool.DIVINATION] }
        break
      case 'enchantment':
        filters = { school: [SpellsSchool.ENCHANTMENT] }
        break
      case 'evocation':
        filters = { school: [SpellsSchool.EVOCATION] }
        break
      case 'illusion':
        filters = { school: [SpellsSchool.ILLUSION] }
        break
      case 'necromancy':
        filters = { school: [SpellsSchool.NECROMANCY] }
        break
      case 'transmutation':
        filters = { school: [SpellsSchool.TRANSMUTATION] }
        break
      default:
        filters = { school: [] }
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
      <div className="container">
        <SpellListSkeleton />
      </div>
    )
  }

  const spellList = spells ? <SpellList spells={spells} /> : null

  return <div className="container">{spellList}</div>
}
