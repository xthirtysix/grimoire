import React from 'react'
import { Descriptions, Tag } from 'antd'
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
    atHigherLevels,
    atHigherSlots,
    castingTime,
    classes,
    components,
    damageDice,
    damageScale,
    damageType,
    duration,
    isConcentration,
    isRitual,
    materials,
    range,
    saveRequired,
    school,
    tags,
  } = spell

  const concentrationCell = isConcentration ? (
    <Item label="Concentration">Required</Item>
  ) : null

  const ritualCell = isRitual ? <Item label="Ritual">Required</Item> : null

  const schoolCell = school ? (
    <Item label="School">
      {school.charAt(0) + school.slice(1).toLowerCase()}
    </Item>
  ) : null

  const castingTimeCell = castingTime ? (
    <Item label="Casting time">{castingTimeToDisplayed.get(castingTime)}</Item>
  ) : null

  const classesInfo = classes ? (
    <div>
      {classes.map((cls) => {
        return <Tag key={cls}>{cls.charAt(0) + cls.slice(1).toLowerCase()}</Tag>
      })}
    </div>
  ) : null

  const atHigherLevelsInfo = atHigherLevels ? <p>{atHigherLevels}</p> : null

  const tagsInfo = tags ? (
    <div>
      {tags.map((tag) => {
        return <Tag key={tag}>{tag.charAt(0) + tag.slice(1).toLowerCase()}</Tag>
      })}
    </div>
  ) : null

  const saveThrowCell = saveRequired ? (
    <Item label="Save">
      {saveRequired}
    </Item>
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

  const damageCells =
    damageDice && damageType ? (
      <>
        <Item label="Basic damage">
          {damageDice.quantity}
          {damageDice.dice}
        </Item>
        <Item label="Damage type">{damageType}</Item>
      </>
    ) : null

  const levelScaleCell = damageScale ? (
    <Item label="On higher levels">
      {damageScale.map((value) => {
        return (
          <React.Fragment key={value?.level}>
            <span>{`on ${value?.level} level: ${value?.dice.quantity}${value?.dice.dice}`}</span>
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
      {ritualCell}
      {schoolCell}
      {castingTimeCell}
      {durationCell}
      {rangeCell}
      {componentsCell}
      {damageCells}
      {levelScaleCell}
      {saveThrowCell}
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
      {atHigherLevelsInfo}
      {tagsInfo}
      {classesInfo}
    </>
  )
}
