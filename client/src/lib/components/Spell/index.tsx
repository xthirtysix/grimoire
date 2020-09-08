import React from 'react'
import { Descriptions } from 'antd'
import DOMPurify from 'dompurify'
//Data
import { Spell as SpellData } from '../../../lib/graphql/queries/Spell/__generated__/Spell'
import { castingTimeToDisplayed } from '../../maps'

const { Item } = Descriptions

interface Props {
  spell: SpellData['spell']
}

export const Spell = ({ spell }: Props) => {
  if (!spell) {
    return <h3>Spell could not be found</h3>
  }

  const {
    castingTime,
    components,
    damage,
    duration,
    isConcentration,
    materials,
    range,
    school,
  } = spell

  const concentrationCell = isConcentration ? (
    <Item label="Concentration">Required</Item>
  ) : null

  const schoolCell = school ? <Item label="School">{school}</Item> : null

  const castingTimeCell = castingTime ? (
    <Item label="Casting time">{castingTimeToDisplayed.get(castingTime)}</Item>
  ) : null

  const durationCell = duration ? (
    <Item label="Duration">
      {duration.value ? `${duration.value} ${duration.unit}` : duration.unit}
    </Item>
  ) : null

  const rangeCell = spell ? (
    <Item label="Range">
      {range.value ? `${range.value} ${range.unit}` : range.unit}
    </Item>
  ) : null

  const componentsCell = components ? (
    <Item label="Components">
      {`${components.verbal ? 'V' : ''}
      ${components.somatic ? 'S' : ''}
      ${components.material ? 'M' : ''}`}
    </Item>
  ) : null

  const damageCells = damage ? (
    <>
      <Item label="Basic damage">{damage.basic}</Item>
      <Item label="Damage type">{damage.type}</Item>
    </>
  ) : null

  const levelScaleCell = damage?.isScaleLevel ? (
    <Item label="On higher levels">
      {Object.entries(damage)
        .filter((key) => {
          return key[0].indexOf('level') > -1 && key[1]
        })
        .map((key) => {
          return (
            <React.Fragment key={key[0]}>
              <span>{`on ${key[0].slice('level'.length)}: ${key[1]}`}</span>
              <br></br>
            </React.Fragment>
          )
        })}
    </Item>
  ) : null

  const materialsCell = materials ? (
    <Item label="Materials">{materials}</Item>
  ) : null

  const spellDataTable = (
    <Descriptions bordered style={{ marginBottom: '1rem' }}>
      {concentrationCell}
      {schoolCell}
      {castingTimeCell}
      {durationCell}
      {rangeCell}
      {componentsCell}
      {damageCells}
      {levelScaleCell}
      {materialsCell}
    </Descriptions>
  )

  const spellDescription = (
    <div
      dangerouslySetInnerHTML={{
        __html: DOMPurify.sanitize(spell.description),
      }}
    ></div>
  )

  return (
    <>
      {spellDataTable}
      {spellDescription}
    </>
  )
}
