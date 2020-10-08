import React, { useState } from 'react'
import { Layout } from 'antd'
import {
  SpellFilter,
  SpellList,
  SpellSort,
  SpellListSkeleton,
} from '../../lib/components'
import { RouteComponentProps, Redirect } from 'react-router-dom'
// Data
import { SPELLS } from '../../lib/graphql/queries'
import {
  Spells as SpellsData,
  SpellsVariables,
} from '../../lib/graphql/queries/Spells/__generated__/Spells'
import {
  SpellsFilter,
  SpellsSort,
  SpellsSchool,
} from '../../lib/graphql/globalTypes'
import { useQuery } from 'react-apollo'
import { displayErrorMessage } from '../../lib/utils'

const { Content } = Layout

interface MatchParams {
  [key: string]: string
}

export const Spells = ({ match }: RouteComponentProps<MatchParams>) => {
  const [sort, setSort] = useState<SpellsSort>(SpellsSort.NAME_ASCENDING)
  const [filters, setFilters] = useState<SpellsFilter>({
    school: [],
    castingTime: [],
    level: [],
    classes: [],
    saveRequired: [],
    tags: [],
  })

  if (match.params.filter) {
    let trimmedRouteParam = match.params.filter.trim()
    if (match.params.filter) {
      switch (trimmedRouteParam) {
        case 'abjuration':
          filters.school = [SpellsSchool.ABJURATION]
          break
        case 'conjuration':
          filters.school = [SpellsSchool.CONJURATION]
          break
        case 'divination':
          filters.school = [SpellsSchool.DIVINATION]
          break
        case 'enchantment':
          filters.school = [SpellsSchool.ENCHANTMENT]
          break
        case 'evocation':
          filters.school = [SpellsSchool.EVOCATION]
          break
        case 'illusion':
          filters.school = [SpellsSchool.ILLUSION]
          break
        case 'necromancy':
          filters.school = [SpellsSchool.NECROMANCY]
          break
        case 'transmutation':
          filters.school = [SpellsSchool.TRANSMUTATION]
          break
        default:
          filters.school = []
      }
    }
  }

  const { data, error } = useQuery<SpellsData, SpellsVariables>(SPELLS, {
    variables: {
      filters,
      sort,
    },
  })

  if (match.params.edit && match.params.edit !== 'edit') {
    return <Redirect to="/404" />
  }

  if (!data) {
    return (
      <Content className="container">
        <SpellListSkeleton />
      </Content>
    )
  }

  if (error) {
    displayErrorMessage(
      'Uable to load spells. Check your internet connection or try again later'
    )
    return <Redirect to="/" />
  }

  return (
    <Content className="container">
      <SpellFilter
        filters={filters}
        onFilterChange={setFilters}
        disabledFilters={match.params.filter ? 'school' : undefined}
      />
      <SpellSort defaultSort={sort} onSortChange={setSort} />
      <SpellList spells={data.spells} />
    </Content>
  )
}
