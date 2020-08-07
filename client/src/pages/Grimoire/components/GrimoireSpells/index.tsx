import React from "react";
import { Grimoire } from "../../../../lib/graphql/queries/Grimoire/__generated__/Grimoire";
import { List, ListItem, ListItemText, ListSubheader } from "@material-ui/core";

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
    [0, "Cantrip"],
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
          <li key={`section-${level}`}>
            <ul>
              {result.some((spell) => spell.level === level) ? (
                <ListSubheader>{`${levelNumberToString.get(
                  level
                )}`}</ListSubheader>
              ) : null}
              {result
                .filter((spell) => spell.level === level)
                .map((spell) => (
                  <ListItem key={`item-${level}-${spell.id}`}>
                    <ListItemText primary={`${spell.name}`} />
                  </ListItem>
                ))}
            </ul>
          </li>
        ))
      : null;

  return <List subheader={<li />}>{spellList}</List>;
};
