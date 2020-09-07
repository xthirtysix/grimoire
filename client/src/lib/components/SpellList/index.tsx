import React, { MouseEvent } from 'react'
import { Button, Collapse, Tag, Typography } from 'antd'
import {
  ArrowsAltOutlined,
  ClockCircleOutlined,
  HourglassOutlined,
  MinusOutlined,
  PlusOutlined,
  SafetyOutlined,
} from '@ant-design/icons'
import { Spell as SpellComponent } from '../'
import { shortenSpellSchool, shortenScalar } from '../../utils'
//Data
import {
  Spells_spells,
  Spells_spells_result,
  Spells_spells_result_castingTime,
  Spells_spells_result_components,
  Spells_spells_result_duration,
  Spells_spells_result_range,
} from '../../graphql/queries/Spells/__generated__/Spells'
import { levelNumberToString, schoolToColor } from '../../maps'
//Styles
import s from './styles/SpellList.module.scss'
//Constants
const MAX_SPELL_LEVEL = 10

const { Panel } = Collapse
const { Title } = Typography

interface Props {
  spells: Spells_spells
  grimoireSpells?: string[] | null
  editable?: boolean
  onAddSpell?: (spellID: string) => void
  onRemoveSpell?: (spellID: string) => void
}

export const SpellList = ({
  spells,
  grimoireSpells,
  editable,
  onAddSpell,
  onRemoveSpell,
}: Props) => {
  const result = spells && spells.result ? spells.result : null

  const spellLevels = Array.from(Array(MAX_SPELL_LEVEL).keys())

  const handleAddClick = onAddSpell
    ? (e: MouseEvent, spellID: string) => {
        e.stopPropagation()
        onAddSpell(spellID)
      }
    : () => {}

  const handleRemoveClick = onRemoveSpell
    ? (e: MouseEvent, spellID: string) => {
        e.stopPropagation()
        onRemoveSpell(spellID)
      }
    : () => {}

  //Panel Tags *START*
  const concentrationTag = (isConcentration: boolean) => {
    return isConcentration ? (
      <Tag>
        <SafetyOutlined />
      </Tag>
    ) : null
  }

  const schoolTag = (school: string) => (
    <Tag color={schoolToColor.get(school)} className={s.tagSchool}>{shortenSpellSchool(school)}</Tag>
  )

  const scalarData = <
    T extends
      | Spells_spells_result_castingTime
      | Spells_spells_result_duration
      | Spells_spells_result_range
  >(
    type: T
  ): string => {
    return type.value ? `${type.value} ${type.unit}` : type.unit
  }

  const castingTimeTag = (castingTime: Spells_spells_result_castingTime) => (
    <Tag className={s.tagScalar}>
      <ClockCircleOutlined />
      {shortenScalar(scalarData(castingTime))}
    </Tag>
  )

  const durationTag = (duration: Spells_spells_result_duration) => (
    <Tag className={s.tagScalar}>
      <HourglassOutlined />
      {shortenScalar(scalarData(duration))}
    </Tag>
  )

  const rangeTag = (range: Spells_spells_result_range) => (
    <Tag className={s.tagScalar}>
      <ArrowsAltOutlined />
      {shortenScalar(scalarData(range))}
    </Tag>
  )

  const componentsTag = (
    components: Spells_spells_result_components | null
  ) => {
    return components ? (
      <Tag className={s.tagComponents}>
        {`${components.verbal ? 'V' : ''} 
          ${components.somatic ? 'S' : ''} 
          ${components.material ? 'M' : ''}`}
      </Tag>
    ) : null
  }
  //Panel Tags *END*

  const spellDetailes = ({
    isConcentration,
    school,
    castingTime,
    duration,
    range,
    components,
  }: Spells_spells_result) => {
    return (
      <div className={s.tagList}>
        {concentrationTag(isConcentration)}
        {schoolTag(school)}
        {castingTimeTag(castingTime)}
        {durationTag(duration)}
        {rangeTag(range)}
        {componentsTag(components)}
      </div>
    )
  }

  const spellList = result
    ? spellLevels.map((level) => (
        <div key={`header-${level}`}>
          {result.some((spell) => spell.level === level) ? (
            <>
              <Title level={4}>{`${levelNumberToString.get(level)}`}</Title>
              <Collapse className="">
                {result
                  .filter((spell) => spell.level === level)
                  .map((spell) => (
                    <Panel
                      className={s.collapseItem}
                      key={spell.id}
                      header={spell.name}
                      extra={
                        editable && grimoireSpells ? (
                          grimoireSpells?.indexOf(spell.id) >= 0 ? (
                            <div className={s.editableContainer}>
                              {spellDetailes(spell)}{' '}
                              <Button
                                size="small"
                                danger
                                type="primary"
                                onClick={(e) => handleRemoveClick(e, spell.id)}
                              >
                                <MinusOutlined />
                                Erase
                              </Button>
                            </div>
                          ) : (
                            <div className={s.editableContainer}>
                              {spellDetailes(spell)}{' '}
                              <Button
                                size="small"
                                type="primary"
                                onClick={(e) => handleAddClick(e, spell.id)}
                              >
                                <PlusOutlined />
                                Learn
                              </Button>
                            </div>
                          )
                        ) : (
                          spellDetailes(spell)
                        )
                      }
                      style={
                        grimoireSpells && grimoireSpells.indexOf(spell.id) < 0
                          ? {
                              opacity: 0.95,
                              backgroundColor: 'whitesmoke',
                            }
                          : {}
                      }
                    >
                      <SpellComponent spell={spell} />
                    </Panel>
                  ))}
              </Collapse>
            </>
          ) : null}
        </div>
      ))
    : null

  return <>{spellList}</>
}
