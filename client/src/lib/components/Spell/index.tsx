import React from 'react';
import { Descriptions, Tag } from 'antd';
import DOMPurify from 'dompurify';
import { FormattedMessage } from 'react-intl';
//Data
import { Spell as SpellData } from '../../../lib/graphql/queries/Spell/__generated__/Spell';
//Styles
import s from './styles/Spell.module.scss';
import { RootStateOrAny, useSelector } from 'react-redux';

const { Item } = Descriptions;

interface Props {
  spell: SpellData['spell'];
}

export const Spell = ({ spell }: Props): JSX.Element => {
  const isTranslated = useSelector((state: RootStateOrAny) => state.isTranslated);

  if (!spell) {
    return <h3>Spell could not be found</h3>;
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
  } = spell;

  const concentrationCell = isConcentration ? (
    <Item label={<FormattedMessage id="spellConcentration" />}>
      <FormattedMessage id="spellRequired" />
    </Item>
  ) : null;

  const ritualCell = isRitual ? (
    <Item label={<FormattedMessage id="spellRitual" />}>
      <FormattedMessage id="spellRequired" />
    </Item>
  ) : null;

  const schoolCell = school ? (
    <Item label={<FormattedMessage id="spellSchool" />}>
      <FormattedMessage id={school} />
    </Item>
  ) : null;

  const castingTimeCell = castingTime ? (
    <Item label={<FormattedMessage id="spellCastingTime" />}>
      <FormattedMessage id={castingTime} />
    </Item>
  ) : null;

  const classesInfo = classes ? (
    <div>
      <b>
        <FormattedMessage id="spellClasses" />:{' '}
      </b>
      {classes.map((cls) => {
        return (
          <Tag key={cls}>
            <FormattedMessage id={cls} />
          </Tag>
        );
      })}
    </div>
  ) : null;

  const atHigherLevelsInfo = atHigherLevels ? (
    <p>
      <b>
        <FormattedMessage id="spellAtHigherLevels" />:
      </b>
      &nbsp;
      {isTranslated ? atHigherLevels.ru : atHigherLevels.en}
    </p>
  ) : null;
  const atHigherSlotsInfo = atHigherSlots ? (
    <p>
      <b>
        <FormattedMessage id="spellAtHigherSlots" />:
      </b>
      &nbsp;
      {isTranslated ? atHigherSlots.ru : atHigherSlots.en}
    </p>
  ) : null;

  const tagsInfo = tags ? (
    <div>
      <b>
        <FormattedMessage id="spellTags" />:{' '}
      </b>
      {tags.map((tag) => {
        return (
          <Tag key={tag}>
            <FormattedMessage id={tag} />
          </Tag>
        );
      })}
    </div>
  ) : null;

  const saveThrowCell = saveRequired ? (
    <Item label={<FormattedMessage id="spellSavingThrow" />}>
      <FormattedMessage id={saveRequired} />
    </Item>
  ) : null;

  const durationCell = duration ? (
    <Item label={<FormattedMessage id="spellDuration" />}>
      <FormattedMessage id={duration} />
    </Item>
  ) : null;

  const rangeCell = spell ? (
    <Item label={<FormattedMessage id="spellRange" />}>
      {range.value ? `${range.value} ` : null}
      <FormattedMessage id={range.unit} />
    </Item>
  ) : null;

  const componentsCell = components ? (
    <Item label={<FormattedMessage id="spellComponents" />}>
      {`
        ${components.verbal ? (isTranslated ? 'В' : 'V') : ''}
        ${components.somatic ? (isTranslated ? 'C' : 'S') : ''}
        ${components.material ? (isTranslated ? 'М' : 'M') : ''}
      `}
    </Item>
  ) : null;

  const damageCells =
    damageDice && damageType ? (
      <>
        <Item label={<FormattedMessage id="spellBasicDamage" />}>
          {damageDice.quantity}
          <FormattedMessage id={damageDice.dice} />
        </Item>
        <Item label={<FormattedMessage id="spellDamageType" />}>
          <FormattedMessage id={damageType} />
        </Item>
      </>
    ) : null;

  const levelScaleCell = damageScale ? (
    <Item label={<FormattedMessage id="spellAtHigherLevels" />}>
      {damageScale.map((value) => {
        return (
          <React.Fragment key={value?.level}>
            <span>
              {value?.level}
              <FormattedMessage id="nthLevel" />
              :&nbsp;
              {value?.dice.quantity}
              <FormattedMessage id={value?.dice.dice} />
            </span>
            <br />
          </React.Fragment>
        );
      })}
    </Item>
  ) : null;

  const materialsCell = materials ? (
    <Item label={<FormattedMessage id="spellMaterials" />}>
      {isTranslated ? materials.ru : materials.en}
    </Item>
  ) : null;

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
  );

  const spellDescription = (
    <div
      dangerouslySetInnerHTML={{
        __html: DOMPurify.sanitize(
          isTranslated ? spell.description.ru : spell.description.en
        ),
      }}
    />
  );

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
  );
};
