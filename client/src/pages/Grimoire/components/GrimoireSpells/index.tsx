import React from "react";
import { Collapse, Divider, Typography } from "antd";
import {
  Damage,
  DamageLevelScale,
  Scalar,
  Components,
  Concentration,
  Materials,
} from "../../../../components";
//Data
import {
  Grimoire,
  Grimoire_grimoire_spells_result_damage as SpellDamage,
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

  const damageBlock = (spellDamage: SpellDamage | null) =>
    spellDamage ? (
      <>
        <div className={s.detailesBlock}>{Damage(spellDamage)}</div>
        {spellDamage.isScaleLevel ? (
          <div className={s.detailesBlock}>{DamageLevelScale(spellDamage)}</div>
        ) : null}
      </>
    ) : null;

  const materialsBlock = (spellMaterials: string | null) =>
    spellMaterials ? <>{Materials(spellMaterials)}</> : null;

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
                      <Panel key={spell.id} header={spell.name}>
                        <p className={s.detailesContainer}>
                          <div className={s.detailesBlock}>
                            {Concentration(spell.isConcentration)}
                            {Components(spell.components)}
                            {Scalar(spell.castingTime, "Casting time")}
                            {Scalar(spell.duration, "Duration")}
                            {Scalar(spell.range, "Range")}
                          </div>
                          {damageBlock(spell.damage)}
                          <Text>
                            {materialsBlock(spell.materials)}
                            <Divider className={s.divider} />
                            {spell.description}
                          </Text>
                        </p>
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
