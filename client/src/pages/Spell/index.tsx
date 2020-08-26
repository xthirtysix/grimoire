import React from 'react'
import { Descriptions, Card, Empty } from 'antd'
import { SpellSkeleton } from './components'
import DOMPurify from 'dompurify'
import { RouteComponentProps } from 'react-router-dom'
//Data
import { useQuery } from 'react-apollo'
import {
  Spell as SpellData,
  SpellVariables,
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
  const { loading, data, error } = useQuery<SpellData, SpellVariables>(SPELL, {
    variables: {
      name: match.params.name,
    },
  })

  const spell = data && data.spell ? data.spell : null

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

  const spellDamageTableCellElement = (damage: Spell_spell_damage | null) => {
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

  const spellDataTableElement = spell ? (
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
      {spellDamageTableCellElement(spell.damage)}
      {spell.materials ? (
        <Descriptions.Item label="Materials">
          {spell.materials}
        </Descriptions.Item>
      ) : null}
    </Descriptions>
  ) : null

  const spellDescriptionElement = spell ? (
    <div
      dangerouslySetInnerHTML={{
        __html: DOMPurify.sanitize(spell.description),
      }}
    ></div>
  ) : null

  const noDataSectionElement = (
    <Empty
      description={`There's no spell called ${match.params.name}. Maybe one day you'll write it!?`}
    />
  )

  if (loading) {
    return (
      <div className="container">
        <SpellSkeleton />
      </div>
    )
  }

  if (error) {
    return <div className="container">{noDataSectionElement}</div>
  }

  const spellSectionElement = spell ? (
    <Card title={spell.name}>
      {spellDataTableElement}
      {spellDescriptionElement}
    </Card>
  ) : (
    { noDataSectionElement }
  )

  return <div className="container">{spellSectionElement}</div>
}
