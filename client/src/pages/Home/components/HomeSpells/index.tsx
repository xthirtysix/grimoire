import React from 'react'
import {
  GrimoireSpells,
  GrimoireSpellsSkeleton,
} from '../../../Grimoire/components'
import { Layout, Typography } from 'antd'
//Data
import { useQuery } from 'react-apollo'
import {
  Spells as SpellsData,
  SpellsVariables,
} from '../../../../lib/graphql/queries/Spells/__generated__/Spells'
import { SpellsFilter } from '../../../../lib/graphql/globalTypes'
import { SPELLS } from '../../../../lib/graphql/queries/Spells'
//Style
import s from '../../styles/HomeSpells.module.scss'

const SPELLS_NUMBER = 4
const { Content } = Layout
const { Title } = Typography

export const HomeSpells = () => {
  const { loading, data } = useQuery<SpellsData, SpellsVariables>(SPELLS, {
    variables: {
      filter: SpellsFilter.LEVEL_LOW_TO_HIGH,
      limit: SPELLS_NUMBER,
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
    <Content className={s.container}>
      <Title level={3} className={s.title}>
        Sample Grimoire
      </Title>
      <div className="container">{spellList}</div>
    </Content>
  )
}
