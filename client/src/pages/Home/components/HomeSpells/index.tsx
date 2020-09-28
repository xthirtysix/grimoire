import React from 'react'
import { Typography } from 'antd'
import { SpellList, SpellListSkeleton } from '../../../../lib/components'
//Data
import { SPELLS } from '../../../../lib/graphql/queries/Spells'
import {
  Spells as SpellsData,
  SpellsVariables,
} from '../../../../lib/graphql/queries/Spells/__generated__/Spells'
import { SpellsSort } from '../../../../lib/graphql/globalTypes'
import { useQuery } from 'react-apollo'
//Style
import s from './styles/HomeSpells.module.scss'
//Constants
const SPELLS_NUMBER = 4

const { Title } = Typography

export const HomeSpells = () => {
  const { loading, data } = useQuery<SpellsData, SpellsVariables>(SPELLS, {
    variables: {
      sort: SpellsSort.NAME_ASCENDING,
      limit: SPELLS_NUMBER,
    },
  })

  let spellList

  if (loading) {
    spellList = <SpellListSkeleton />
  }

  if (data) {
    spellList = <SpellList spells={data.spells} />
  }

  return (
    <section className={s.container}>
      <Title level={2} className={s.title}>
        Sample Grimoire
      </Title>
      <div className="container">{spellList}</div>
    </section>
  )
}
