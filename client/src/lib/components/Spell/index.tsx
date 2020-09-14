import React from 'react'
import { Descriptions, Tag } from 'antd'
import DOMPurify from 'dompurify'
//Data
import { Spell as SpellData } from '../../../lib/graphql/queries/Spell/__generated__/Spell'
import { castingTimeToDisplayed } from '../../maps'
//Styles
import s from './styles/Spell.module.scss'

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
      <b>Classes: </b>
      {classes.map((cls) => {
        return <Tag key={cls}>{cls.charAt(0) + cls.slice(1).toLowerCase()}</Tag>
      })}
    </div>
  ) : null

  const atHigherLevelsInfo = atHigherLevels ? (
    <p>
      <b>At higher levels:</b> {atHigherLevels}
    </p>
  ) : null
  const atHigherSlotsInfo = atHigherSlots ? (
    <p>
      <b>Using higher spell slots:</b> {atHigherSlots}
    </p>
  ) : null

  const tagsInfo = tags ? (
    <div>
      <b>Tags: </b>
      {tags.map((tag) => {
        return <Tag key={tag}>{tag.charAt(0) + tag.slice(1).toLowerCase()}</Tag>
      })}
    </div>
  ) : null

  const saveThrowCell = saveRequired ? (
    <Item label="Saving throw">
      {saveRequired.charAt(0) + saveRequired.slice(1).toLowerCase()}
    </Item>
  ) : null

  const durationCell = duration ? (
    <Item label="Duration">
      {duration.value
        ? `${duration.value} ${
            duration.unit.charAt(0).toUpperCase() + duration.unit.slice(1)
          }`
        : duration.unit.charAt(0).toUpperCase() + duration.unit.slice(1)}
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
          {damageDice.dice.toLowerCase()}
        </Item>
        <Item label="Damage type">
          {damageType.charAt(0) + damageType.slice(1).toLowerCase()}
        </Item>
      </>
    ) : null

  const levelScaleCell = damageScale ? (
    <Item label="At higher levels">
      {damageScale.map((value) => {
        return (
          <React.Fragment key={value?.level}>
            <span>{`${value?.level}th level: ${
              value?.dice.quantity
            }${value?.dice.dice.toLowerCase()}`}</span>
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
      {saveThrowCell}
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
      {atHigherLevelsInfo}
      {atHigherSlotsInfo}
      <div className={s.tagsContainer}>
        {tagsInfo}
        {classesInfo}
      </div>
    </>
  )
}
