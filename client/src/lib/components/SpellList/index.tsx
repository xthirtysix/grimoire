import React from 'react'
import { Collapse, Typography, Descriptions, Tag } from 'antd'
import {
  ClockCircleOutlined,
  HourglassOutlined,
  ArrowsAltOutlined,
  SafetyOutlined,
} from '@ant-design/icons'
import { shortenSpellSchool, shortenScalar } from '../../utils'
import DOMPurify from 'dompurify'
//Data
import {
  Spells_spells,
  Spells_spells_result,
  Spells_spells_result_castingTime,
  Spells_spells_result_duration,
  Spells_spells_result_range,
  Spells_spells_result_components,
  Spells_spells_result_damage,
} from '../../graphql/queries/Spells/__generated__/Spells'
import { schoolToColor, levelNumberToString } from '../../maps'
//Styles
import s from './styles/SpellList.module.scss'

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

  const componentsData = (
    components: Spells_spells_result_components | null
  ) => {
    return components
      ? `${components.verbal ? 'V' : ''} 
          ${components.somatic ? 'S' : ''} 
          ${components.material ? 'M' : ''}`
      : null
  }

  const spellDetailes = (spell: Spells_spells_result) => {
    return (
      <div className={s.fastDetailes}>
        {spell.isConcentration ? (
          <Tag>
            <SafetyOutlined />
          </Tag>
        ) : null}
        <Tag color={schoolToColor.get(spell.school)}>
          {shortenSpellSchool(spell.school)}
        </Tag>
        <Tag>
          <ClockCircleOutlined />
          {shortenScalar(scalarData(spell.castingTime))}
        </Tag>
        <Tag>
          <HourglassOutlined />
          {shortenScalar(scalarData(spell.duration))}
        </Tag>
        <Tag>
          <ArrowsAltOutlined />
          {shortenScalar(scalarData(spell.range))}
        </Tag>
        {spell.components ? (
          <Tag>{componentsData(spell.components)}</Tag>
        ) : null}
      </div>
    )
  }

  const spellDamage = (damage: Spells_spells_result_damage | null) => {
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

  const spellDataTable = (spell: Spells_spells_result) => {
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
          <Descriptions.Item label="Materials">
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
                        className={s.collapseItem}
                        key={spell.id}
                        header={spell.name}
                        extra={spellDetailes(spell)}
                      >
                        {spellDataTable(spell)}
                        <div
                          dangerouslySetInnerHTML={{
                            __html: DOMPurify.sanitize(spell.description),
                          }}
                        ></div>
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
