import React from 'react'
import { GrimoireSpells } from '../../../Grimoire/components'
import { Layout } from 'antd'
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

export const HomeSpells = () => {
  const { loading, data } = useQuery<SpellsData, SpellsVariables>(SPELLS, {
    variables: {
      filter: SpellsFilter.LEVEL_LOW_TO_HIGH,
      limit: SPELLS_NUMBER,
    },
  })

  if (loading) {
    return <h3>Loading...</h3>
  }

  if (data) {
    return (
      <Content className={s.container}>
        <div className="container">
          <GrimoireSpells grimoireSpells={data.spells} />
        </div>
      </Content>
    )
  }

  return null
}
