import React from 'react'
import { Collapse, Tag, Typography } from 'antd'
import {
  ArrowsAltOutlined,
  ClockCircleOutlined,
  HourglassOutlined,
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
}

export const SpellList = ({ spells }: Props) => {
  const total = spells && spells.total ? spells.total : null
  const result = spells && spells.result ? spells.result : null

  const spellLevels = Array.from(Array(MAX_SPELL_LEVEL).keys())

  //Panel Tags *START*
  const concentrationTag = (isConcentration: boolean) => {
    return isConcentration ? (
      <Tag>
        <SafetyOutlined />
      </Tag>
    ) : null
  }

  const schoolTag = (school: string) => (
    <Tag color={schoolToColor.get(school)}>{shortenSpellSchool(school)}</Tag>
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
    <Tag>
      <ClockCircleOutlined />
      {shortenScalar(scalarData(castingTime))}
    </Tag>
  )

  const durationTag = (duration: Spells_spells_result_duration) => (
    <Tag>
      <HourglassOutlined />
      {shortenScalar(scalarData(duration))}
    </Tag>
  )

  const rangeTag = (range: Spells_spells_result_range) => (
    <Tag>
      <ArrowsAltOutlined />
      {shortenScalar(scalarData(range))}
    </Tag>
  )

  const componentsTag = (
    components: Spells_spells_result_components | null
  ) => {
    return components ? (
      <Tag>
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

  const spellList =
    total && result
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
                        extra={spellDetailes(spell)}
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
