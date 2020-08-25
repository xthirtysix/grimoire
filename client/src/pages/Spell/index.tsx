import React from 'react'
import { Descriptions, Card, Empty } from 'antd'
import DOMPurify from 'dompurify'
import { RouteComponentProps } from 'react-router-dom'
//Data
import { useQuery } from 'react-apollo'
import {
  Spell as SpellData,
  SpellVariables,
  Spell_spell,
  Spell_spell_castingTime,
  Spell_spell_duration,
  Spell_spell_range,
  Spell_spell_components,
  Spell_spell_damage,
} from '../../lib/graphql/queries/Spell/__generated__/Spell'
import { SPELL } from '../../lib/graphql/queries/Spell'

interface MatchParams {
  name: string
}

export const Spell = ({ match }: RouteComponentProps<MatchParams>) => {
  const name = match.params.name
  const { loading, data } = useQuery<SpellData, SpellVariables>(SPELL, {
    variables: {
      name,
    },
  })

  const spell = data?.spell ? data.spell : null

  const scalarData = <
    T extends Spell_spell_castingTime | Spell_spell_duration | Spell_spell_range
  >(
    type: T
  ): string => {
    return type.value ? `${type.value} ${type.unit}` : type.unit
  }

  const componentsData = (components: Spell_spell_components | null) => {
    return components
      ? `${components.verbal ? 'V' : ''} 
          ${components.somatic ? 'S' : ''} 
          ${components.material ? 'M' : ''}`
      : null
  }

  const spellDamage = (damage: Spell_spell_damage | null) => {
    return (
      <>
        {/* Basic damage */}
        {damage ? (
          <>
            <Descriptions.Item label="Basic damage">
              {damage.basic}
            </Descriptions.Item>
            <Descriptions.Item label="Damage type">
              {damage.type}
            </Descriptions.Item>
          </>
        ) : null}
        {/* Damage on higher levels */}
        {damage && damage.isScaleLevel ? (
          <Descriptions.Item label="On higher levels">
            {Object.entries(damage)
              .filter((key) => {
                return key[0].indexOf('level') > -1 && key[1]
              })
              .map((key) => {
                return (
                  <React.Fragment key={key[0]}>
                    <span>
                      {`on ${key[0].slice('level'.length)}: ${key[1]}`}
                    </span>
                    <br></br>
                  </React.Fragment>
                )
              })}
          </Descriptions.Item>
        ) : null}
      </>
    )
  }

  const spellDataTable = (spell: Spell_spell) => {
    return (
      <Descriptions bordered style={{ marginBottom: '1rem' }}>
        {spell.isConcentration ? (
          <Descriptions.Item label="Concentration">required</Descriptions.Item>
        ) : null}
        <Descriptions.Item label="School">{spell.school}</Descriptions.Item>
        {spell.components ? (
          <Descriptions.Item label="Components">
            {componentsData(spell.components)}
          </Descriptions.Item>
        ) : null}
        <Descriptions.Item label="Casting time">
          {scalarData(spell.castingTime)}
        </Descriptions.Item>
        <Descriptions.Item label="Duration">
          {scalarData(spell.duration)}
        </Descriptions.Item>
        <Descriptions.Item label="Range">
          {scalarData(spell.range)}
        </Descriptions.Item>
        {spellDamage(spell.damage)}
        {spell.materials ? (
          <Descriptions.Item label="Materials">
            {spell.materials}
          </Descriptions.Item>
        ) : null}
      </Descriptions>
    )
  }

  if (loading) {
    return <h1>Loading</h1>
  }

  return spell ? (
    <div className="container">
      <Card title={spell.name}>
        {spellDataTable(spell)}
        <div
          dangerouslySetInnerHTML={{
            __html: DOMPurify.sanitize(spell.description),
          }}
        ></div>
      </Card>
    </div>
  ) : (
    <div className="container">
      <div className="centered">
        <Empty
          description={`There's no spell called ${name}. Mabe one day you'll write
        it!?`}
        />
      </div>
    </div>
  )
}
