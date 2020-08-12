import React from "react";
import {
  Grimoire,
  Grimoire_grimoire_spells_result_damage as SpellDamage,
} from "../../../../lib/graphql/queries/Grimoire/__generated__/Grimoire";
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
  Divider,
} from "@material-ui/core";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
import {
  Damage,
  DamageLevelScale,
  Scalar,
  Components,
  Concentration,
  Materials,
} from "../../../../components";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    levelHeader: {
      margin: "0.8rem 0",
      fontSize: "1rem",
      textTransform: "uppercase",
    },
    spellList: {
      marginBottom: "1rem",
    },
    spellHeader: {
      flexBasis: "70%",
      flexShrink: 0,
    },
    spellSubheader: {
      color: theme.palette.text.secondary,
      fontSize: theme.typography.pxToRem(10),
      alignSelf: "center",
      marginLeft: "auto",
    },
    detailesContainer: {
      display: "flex",
      flexWrap: "wrap",
      // gridAutoFlow: 'row-dense',
    },
    detailesBlock: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
      alignItems: "flex-start",
    },
    descriptionBlock: {
      marginTop: "2rem",
    },
    divider: {
      width: "100%",
      margin: "1rem 0",
    },
  })
);

interface Props {
  grimoireSpells: Grimoire["grimoire"]["spells"];
}

export const GrimoireSpells = ({ grimoireSpells }: Props) => {
  const total =
    grimoireSpells && grimoireSpells.total ? grimoireSpells.total : null;
  const result =
    grimoireSpells && grimoireSpells.result ? grimoireSpells.result : null;

  const classes = useStyles();

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

  const damageBlock = (spellDamage: SpellDamage | null) =>
    spellDamage ? (
      <>
        <div className={classes.detailesBlock}>{Damage(spellDamage)}</div>
        {spellDamage.isScaleLevel ? (
          <div className={classes.detailesBlock}>
            {DamageLevelScale(spellDamage)}
          </div>
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
              <Typography
                className={classes.levelHeader}
                component="h3"
              >{`${levelNumberToString.get(level)}`}</Typography>
            ) : null}
            <div className={classes.spellList}>
              {result
                .filter((spell) => spell.level === level)
                .map((spell) => (
                  <Accordion key={`spell-${spell.name}`}>
                    <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                      <Typography className={classes.spellHeader}>
                        {spell.name}
                      </Typography>
                      <Typography className={classes.spellSubheader}>
                        {spell.school}
                      </Typography>
                    </AccordionSummary>
                    <AccordionDetails className={classes.detailesContainer}>
                      <div className={classes.detailesBlock}>
                        {Concentration(spell.isConcentration)}
                        {Components(spell.components)}
                        {Scalar(spell.castingTime, "Casting time")}
                        {Scalar(spell.duration, "Duration")}
                        {Scalar(spell.range, "Range")}
                      </div>
                      {damageBlock(spell.damage)}
                      <Typography>
                        {materialsBlock(spell.materials)}
                        <Divider className={classes.divider} />
                        {spell.description}
                      </Typography>
                    </AccordionDetails>
                  </Accordion>
                ))}
            </div>
          </div>
        ))
      : null;

  return <>{spellList}</>;
};
