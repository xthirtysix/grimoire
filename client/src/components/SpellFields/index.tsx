import React from "react";
import { Typography, Divider } from "@material-ui/core";
import {
  Spell_spell_damage as DamageData,
  Spell_spell_castingTime as ScalarData,
  Spell_spell_components as ComponentsData,
} from "../../lib/graphql/queries/Spell/__generated__/Spell";
import classes from "./styles/index.module.scss";

// Images
import diceicon from "./assets/dice.png";
import hands from "./assets/hands.png";
import timer from "./assets/timer.png";
import hourglass from "./assets/hourglass.png";
import ruler from "./assets/ruler.png";
import feather from "./assets/feather.png";
import shield from "./assets/shield.png";

export const Level = (level: number) => {
  let lvl: string | number;

  switch (level) {
    case 0:
      lvl = "cantrip";
      break;
    default:
      lvl = `level ${level}`;
      break;
  }
  return <span>{lvl}</span>;
};

export const Scalar = (scalar: ScalarData, title: string) => {
  let img: string | undefined, alt: string;

  switch (title) {
    case "Casting time":
      img = timer;
      alt = "timer";
      break;
    case "Duration":
      img = hourglass;
      alt = "hourglass";
      break;
    case "Range":
      img = ruler;
      alt = "ruler";
      break;
    default:
      img = undefined;
      alt = "";
  }

  return (
    <Typography className={classes.property}>
      <img src={img} alt={alt} />
      <span className={classes.title}>{title}: </span>
      <span className={classes.value}>
        {scalar.value ? +scalar.value + " " + scalar.unit : scalar.unit}
      </span>
    </Typography>
  );
};

export const Components = (components: ComponentsData | null) => {
  return components ? (
    <>
      <Typography className={classes.property}>
        <img src={hands} alt="hands" />
        <span className={classes.title}>Components:</span>
        <span className={classes.value}>
          {components.verbal ? " V" : null}
          {components.somatic ? " S" : null}
          {components.material ? " M" : null}
        </span>
      </Typography>
      <Divider className={classes.dividerSmall} />
    </>
  ) : null;
};

export const Concentration = (isConcentration: boolean) => {
  return isConcentration ? (
    <>
      <Typography className={classes.property}>
        <img src={shield} alt="shield" />
        <span className={classes.title}>Concentration</span>
      </Typography>
      <Divider className={classes.dividerSmall} />
    </>
  ) : null;
};

export const Materials = (materials: string | null) => {
  return materials ? (
    <>
      <Divider className={classes.dividerLarge} />
      <Typography className={classes.property}>
        <img src={feather} alt="feather" />
        <span className={classes.title}>Materials:</span>
      </Typography>
      <Typography>{materials}</Typography>
    </>
  ) : null;
};

export const Damage = (dmg: DamageData | null) => {
  return dmg ? (
    <>
      <Typography className={classes.property}>
        <img src={diceicon} alt="dice" />
        <span className={classes.title}>Basic damage: </span>
        <span className="classes.value">{dmg.basic}</span>
      </Typography>
      <Typography className={classes.property}>
        <span className={classes.title}>Damage type: </span>
        <span className="classes.value">{dmg.type}</span>
      </Typography>
    </>
  ) : null;
};

export const DamageLevelScale = (dmg: DamageData | null) => {
  const refString = "level";
  return dmg && dmg.isScaleLevel ? (
    <>
      <Divider className={classes.dividerSmall} />
      <Typography className={classes.title}>On higher levels</Typography>{" "}
      {Object.entries(dmg)
        .filter((key) => {
          return key[0].indexOf(refString) > -1 && key[1];
        })
        .map((key) => {
          return (
            <Typography key={key[0]} className={classes.property}>
                <img src={diceicon} alt="dice" />
              <span className={classes.title}>
                Level {key[0].slice(refString.length)}:
              </span>{" "}
              <span>{key[1]}</span>
            </Typography>
          );
        })}
    </>
  ) : null;
};
