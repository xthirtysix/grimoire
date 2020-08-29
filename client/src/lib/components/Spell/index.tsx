import React from 'react'
import { Descriptions } from 'antd'
import DOMPurify from 'dompurify'
//Data
import { Spell as SpellData } from '../../../lib/graphql/queries/Spell/__generated__/Spell'

const { Item } = Descriptions

interface Props {
  spell: SpellData['spell']
}

export const Spell = ({ spell }: Props) => {
  const concentrationCell = spell?.isConcentration ? (
    <Item label="Concentration">Required</Item>
  ) : null

  const schoolCell = spell?.school ? (
    <Item label="School">{spell.school}</Item>
  ) : null

  const castingTimeCell = spell?.castingTime ? (
    <Item label="Casting time">
      {spell.castingTime.value
        ? `${spell.castingTime.value} ${spell.castingTime.unit}`
        : spell.castingTime.unit}
    </Item>
  ) : null

  const durationCell = spell?.duration ? (
    <Item label="Duration">
      {spell.duration.value
        ? `${spell.duration.value} ${spell.duration.unit}`
        : spell.duration.unit}
    </Item>
  ) : null

  const rangeCell = spell ? (
    <Item label="Range">
      {spell.range.value
        ? `${spell.range.value} ${spell.range.unit}`
        : spell.range.unit}
    </Item>
  ) : null

  const componentsCell = spell?.components ? (
    <Item label="Components">
      {`${spell.components.verbal ? 'V' : ''}
      ${spell.components.somatic ? 'S' : ''}
      ${spell.components.material ? 'M' : ''}`}
    </Item>
  ) : null

  const damageCells = spell?.damage ? (
    <>
      <Item label="Basic damage">{spell.damage.basic}</Item>
      <Item label="Damage type">{spell.damage.type}</Item>
    </>
  ) : null

  const levelScaleCell = spell?.damage?.isScaleLevel ? (
    <Item label="On higher levels">
      {Object.entries(spell.damage)
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

  const materialsCell = spell?.materials ? (
    <Item label="Materials">{spell.materials}</Item>
  ) : null

  const spellDataTable = spell ? (
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
  ) : null

  const spellDescription = spell ? (
    <div
      dangerouslySetInnerHTML={{
        __html: DOMPurify.sanitize(spell.description),
      }}
    ></div>
  ) : null

  return (
    <>
      {spellDataTable}
      {spellDescription}
    </>
  )
}
