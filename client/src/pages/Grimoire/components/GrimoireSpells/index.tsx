import React from 'react'
import { Collapse, Typography, Descriptions, Tag } from 'antd'
import {
  ClockCircleOutlined,
  HourglassOutlined,
  ArrowsAltOutlined,
} from '@ant-design/icons'
//Data
import {
  Grimoire,
  Grimoire_grimoire_spells_result,
  Grimoire_grimoire_spells_result_castingTime,
  Grimoire_grimoire_spells_result_duration,
  Grimoire_grimoire_spells_result_range,
  Grimoire_grimoire_spells_result_components,
  Grimoire_grimoire_spells_result_damage,
} from '../../../../lib/graphql/queries/Grimoire/__generated__/Grimoire'
import { schoolToColor, levelNumberToString } from '../../../../lib/maps'
//Styles
import s from './styles/GrimoireSpells.module.scss'
import { Spells_spells, Spells_spells_result } from '../../../../lib/graphql/queries/Spells/__generated__/Spells'

const { Panel } = Collapse
const { Title, Text } = Typography

interface Props {
  grimoireSpells: Grimoire['grimoire']['spells'] | Spells_spells
}

export const GrimoireSpells = ({ grimoireSpells }: Props) => {
  const total =
    grimoireSpells && grimoireSpells.total ? grimoireSpells.total : null
  const result =
    grimoireSpells && grimoireSpells.result ? grimoireSpells.result : null

  const spellLevels = Array.from(Array(10).keys())

  const scalarData = <
    T extends
      | Grimoire_grimoire_spells_result_castingTime
      | Grimoire_grimoire_spells_result_duration
      | Grimoire_grimoire_spells_result_range
  >(
    type: T
  ): string => {
    return type.value ? `${type.value} ${type.unit}` : type.unit
  }

  const componentsData = (
    components: Grimoire_grimoire_spells_result_components | null
  ) => {
    return components
      ? `${components.verbal ? 'V' : ''} 
          ${components.somatic ? 'S' : ''} 
          ${components.material ? 'M' : ''}`
      : null
  }

  const spellDetailes = (spell: Grimoire_grimoire_spells_result | Spells_spells_result) => {
    return (
      <>
        {spell.isConcentration ? <Tag>Concentration</Tag> : null}
        <Tag color={schoolToColor.get(spell.school)}>{spell.school}</Tag>
        <Tag>
          <ClockCircleOutlined /> {scalarData(spell.castingTime)}
        </Tag>
        <Tag>
          <HourglassOutlined /> {scalarData(spell.duration)}
        </Tag>
        <Tag>
          <ArrowsAltOutlined /> {scalarData(spell.range)}
        </Tag>
        {spell.components ? (
          <Tag>{componentsData(spell.components)}</Tag>
        ) : null}
      </>
    )
  }

  const spellDamage = (
    damage: Grimoire_grimoire_spells_result_damage | null
  ) => {
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

  const spellDataTable = (spell: Grimoire_grimoire_spells_result) => {
    return (
      <Descriptions bordered className={s.detailes}>
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
          <Descriptions.Item label="Materials" span={3}>
            {spell.materials}
          </Descriptions.Item>
        ) : null}
      </Descriptions>
    )
  }

  const spellList =
    total && result
      ? spellLevels.map((level) => (
          <div key={`header-${level}`}>
            {result.some((spell) => spell.level === level) ? (
              <>
                <Title level={4}>{`${levelNumberToString.get(level)}`}</Title>
                <Collapse>
                  {result
                    .filter((spell) => spell.level === level)
                    .map((spell) => (
                      <Panel
                        key={spell.id}
                        header={spell.name}
                        extra={spellDetailes(spell)}
                      >
                        {spellDataTable(spell)}
                        <Text>{spell.description}</Text>
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
