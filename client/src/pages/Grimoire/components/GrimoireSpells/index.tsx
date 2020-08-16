import React from "react";
import { Collapse, Typography, Descriptions, Tag } from "antd";
//Data
import {
  Grimoire,
  Grimoire_grimoire_spells_result,
} from "../../../../lib/graphql/queries/Grimoire/__generated__/Grimoire";
//Styles
import s from "./styles/GrimoireSpells.module.scss";

const { Panel } = Collapse;
const { Title, Text } = Typography;

interface Props {
  grimoireSpells: Grimoire["grimoire"]["spells"];
}

export const GrimoireSpells = ({ grimoireSpells }: Props) => {
  const total =
    grimoireSpells && grimoireSpells.total ? grimoireSpells.total : null;
  const result =
    grimoireSpells && grimoireSpells.result ? grimoireSpells.result : null;

  const spellLevels = Array.from(Array(10).keys());

  const spellDetailes = (spell: Grimoire_grimoire_spells_result) => {
    return (
      <>
        {spell.isConcentration ? <Tag>Concentration</Tag> : null}
        <Tag>
          T:{" "}
          {spell.castingTime.value
            ? `${spell.castingTime.value} ${spell.castingTime.unit}`
            : spell.castingTime.unit}
        </Tag>
        <Tag>
          D:{" "}
          {spell.duration.value
            ? `${spell.duration.value} ${spell.duration.unit}`
            : spell.duration.unit}
        </Tag>
        <Tag>
          R:{" "}
          {spell.range.value
            ? `${spell.range.value} ${spell.range.unit}`
            : spell.range.unit}
        </Tag>
        {spell.components ? (
          <Tag>
            {spell.components.verbal ? "V " : null}
            {spell.components.somatic ? "S " : null}
            {spell.components.material ? "M" : null}
          </Tag>
        ) : null}
      </>
    );
  };

  const levelNumberToString = new Map([
    [0, "Cantrips"],
    [1, "Level 1"],
    [2, "Level 2"],
    [3, "Level 3"],
    [4, "Level 4"],
    [5, "Level 5"],
    [6, "Level 6"],
    [7, "Level 7"],
    [8, "Level 8"],
    [9, "Level 9"],
  ]);

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
                        <Descriptions bordered className={s.detailes}>
                          {spell.isConcentration ? (
                            <Descriptions.Item label="Concentration">
                              required
                            </Descriptions.Item>
                          ) : null}
                          {spell.components ? (
                            <Descriptions.Item label="Components">
                              {spell.components.verbal ? "V " : null}
                              {spell.components.somatic ? "S " : null}
                              {spell.components.material ? "M" : null}
                            </Descriptions.Item>
                          ) : null}
                          <Descriptions.Item label="Casting time">
                            {spell.castingTime.value
                              ? `${spell.castingTime.value} ${spell.castingTime.unit}`
                              : spell.castingTime.unit}
                          </Descriptions.Item>
                          <Descriptions.Item label="Duration">
                            {spell.duration.value
                              ? `${spell.duration.value} ${spell.duration.unit}`
                              : spell.duration.unit}
                          </Descriptions.Item>
                          <Descriptions.Item label="Range">
                            {spell.range.value
                              ? `${spell.range.value} ${spell.range.unit}`
                              : spell.range.unit}
                          </Descriptions.Item>
                          {spell.damage ? (
                            <>
                              <Descriptions.Item label="Basic damage">
                                {spell.damage.basic}
                              </Descriptions.Item>
                              <Descriptions.Item label="Damage type">
                                {spell.damage.type}
                              </Descriptions.Item>
                            </>
                          ) : null}
                          {spell.damage && spell.damage.isScaleLevel ? (
                            <Descriptions.Item label="On higher levels">
                              {Object.entries(spell.damage)
                                .filter((key) => {
                                  return key[0].indexOf("level") > -1 && key[1];
                                })
                                .map((key) => {
                                  return (
                                    <>
                                      <span key={key[0]}>
                                        {`on ${key[0].slice("level".length)}: ${
                                          key[1]
                                        }`}
                                      </span>
                                      <br></br>
                                    </>
                                  );
                                })}
                            </Descriptions.Item>
                          ) : null}
                          {spell.materials ? (
                            <Descriptions.Item label="Materials" span={3}>
                              {spell.materials}
                            </Descriptions.Item>
                          ) : null}
                        </Descriptions>
                        <Text>{spell.description}</Text>
                      </Panel>
                    ))}
                </Collapse>
              </>
            ) : null}
          </div>
        ))
      : null;

  return <>{spellList}</>;
};
