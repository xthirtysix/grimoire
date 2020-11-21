import React, { MouseEvent } from 'react';
import { Button, Collapse, Tag, Typography } from 'antd';
import {
  ArrowsAltOutlined,
  ClockCircleOutlined,
  CopyrightOutlined,
  HourglassOutlined,
  MinusOutlined,
  PlusOutlined,
  TrademarkCircleOutlined,
} from '@ant-design/icons';
import { Spell as SpellComponent } from '../';
//Data
import {
  Spells_spells,
  Spells_spells_result,
  Spells_spells_result_components,
  Spells_spells_result_range,
} from '../../graphql/queries/Spells/__generated__/Spells';
import { CastingTime } from '../../graphql/globalTypes';
//Styles
import s from './styles/SpellList.module.scss';
//Maps
import { schoolToColor } from '../../maps';
import { FormattedMessage } from 'react-intl';
import { RootStateOrAny, useSelector } from 'react-redux';

const { Panel } = Collapse;
const { Title, Text } = Typography;

interface Props {
  spells: Spells_spells;
  grimoireSpells?: string[] | null;
  editable?: boolean;
  onAddSpell?: (spellID: string) => void;
  onRemoveSpell?: (spellID: string) => void;
}

export const SpellList = ({
  spells,
  grimoireSpells,
  editable,
  onAddSpell,
  onRemoveSpell,
}: Props): JSX.Element => {
  const lang = useSelector(
    (state: RootStateOrAny): string => state.language
  ).toLowerCase();

  const result = spells && spells.result ? spells.result : null;

  const handleAddClick = onAddSpell
    ? (e: MouseEvent, spellID: string) => {
        e.stopPropagation();
        onAddSpell(spellID);
      }
    : () => null;

  const handleRemoveClick = onRemoveSpell
    ? (e: MouseEvent, spellID: string) => {
        e.stopPropagation();
        onRemoveSpell(spellID);
      }
    : () => null;

  //Panel Tags *START*
  const schoolTag = (school: string) => (
    <Tag color={schoolToColor.get(school)} className={s.tagSchool}>
      <FormattedMessage id={`${school}_SHORTHAND`} />
    </Tag>
  );

  const castingTimeTag = (castingTime: CastingTime) => {
    return (
      <Tag className={s.tagScalar}>
        <ClockCircleOutlined />
        <FormattedMessage id={`${castingTime}_SHORTHAND`} />
      </Tag>
    );
  };

  const durationTag = (duration: string) => (
    <Tag className={s.tagScalar}>
      <HourglassOutlined />
      <FormattedMessage id={`${duration}_SHORTHAND`} />
    </Tag>
  );

  const rangeTag = (range: Spells_spells_result_range) => (
    <Tag className={s.tagScalar}>
      <ArrowsAltOutlined />
      {range.value ? `${range.value} ` : null}{' '}
      <FormattedMessage id={`${range.unit}_SHORTHAND`} />
    </Tag>
  );

  const componentsTag = (components: Spells_spells_result_components | null) => {
    return components ? (
      <Tag className={s.tagComponents}>
        {`
          ${components.verbal ? (lang === 'ru' ? 'В' : 'V') : ''} 
          ${components.somatic ? (lang === 'ru' ? 'С' : 'S') : ''} 
          ${components.material ? (lang === 'ru' ? 'М' : 'M') : ''}
        `}
      </Tag>
    ) : null;
  };
  //Panel Tags *END*

  const spellDetails = ({
    school,
    castingTime,
    duration,
    range,
    components,
  }: Spells_spells_result) => {
    return (
      <div className={s.tagList}>
        {schoolTag(school)}
        {castingTimeTag(castingTime)}
        {durationTag(duration)}
        {rangeTag(range)}
        {componentsTag(components)}
      </div>
    );
  };

  const spellList = result ? (
    <Collapse className="">
      {result.map((spell) => (
        <Panel
          className={s.collapseItem}
          key={spell.id}
          header={
            <div className={s.spellHeader}>
              <Title level={4} className={s.spellName}>
                {spell.name[lang as 'en' | 'ru']}
                {spell.isConcentration ? (
                  <>
                    &nbsp;
                    <CopyrightOutlined className={s.circleTag} />
                  </>
                ) : null}
                {spell.isRitual ? (
                  <>
                    &nbsp;
                    <TrademarkCircleOutlined className={s.circleTag} />
                  </>
                ) : null}
              </Title>
              <Text type="secondary" className={s.spellLevel}>
                <FormattedMessage id={spell.level} />
              </Text>
            </div>
          }
          extra={
            editable && grimoireSpells ? (
              grimoireSpells?.indexOf(spell.id) >= 0 ? (
                <div className={s.editableContainer}>
                  {spellDetails(spell)}&nbsp;
                  <Button
                    size="small"
                    danger
                    type="primary"
                    onClick={(e) => handleRemoveClick(e, spell.id)}
                  >
                    <MinusOutlined />
                    <FormattedMessage id="spellForget" />
                  </Button>
                </div>
              ) : (
                <div className={s.editableContainer}>
                  {spellDetails(spell)}&nbsp;
                  <Button
                    size="small"
                    type="primary"
                    onClick={(e) => handleAddClick(e, spell.id)}
                  >
                    <PlusOutlined />
                    <FormattedMessage id="spellLearn" />
                  </Button>
                </div>
              )
            ) : (
              spellDetails(spell)
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
  ) : null;

  return <>{spellList}</>;
};
