import React from "react";
import { gql } from "apollo-boost";
import { useQuery } from "react-apollo";
import {
  Spells as SpellsData,
  Spells_spells as Spell,
  Spells_scalar as Scalar,
  Spells_spells_damage as Damage,
} from "./__generated__/Spells";
import {
  Card,
  CardContent,
  Typography,
  CardHeader,
  Divider,
} from "@material-ui/core";
import s from "./styles/Spells.module.scss";

const SPELLS = gql`
  query Spells {
    spells {
      id
      name
      level
      school
      castingTime {
        value
        unit
      }
      range {
        value
        unit
      }
      duration {
        value
        unit
      }
      isConcentration
      components {
        verbal
        somatic
        material
      }
      materials
      description
      damage {
        type
        isScaleLevel
        isScaleSlot
        basic
        level2
        level3
        level4
        level5
        level6
        level7
        level8
        level9
        level10
        level11
        level12
        level13
        level14
        level15
        level16
        level17
        level18
        level19
        level20
      }
      source
    }
  }
`;

export const Spells = () => {
  const { data, loading, error } = useQuery<SpellsData>(SPELLS);

  const spells = data ? data.spells : null;

  const name = (spell: Spell) => {
    return (
      <Typography variant="h5" component="h2">
        {spell.name}
      </Typography>
    );
  };

  const schoolAndLevel = (spell: Spell) => {
    return (
      <Typography>
        {spell.school}, {spell.level}
      </Typography>
    );
  };

  const scalar = (scalar: Scalar, title: string) => {
    return (
      <Typography>
        <span className={s.__title}>{title}: </span>
        <span>
          {scalar.value ? scalar.value + " " + scalar.unit : scalar.unit}
        </span>
      </Typography>
    );
  };

  const components = (spell: Spell) => {
    return spell.components ? (
      <Typography>
        <span className={s.__title}>Components:</span>
        <span>
          {spell.components.verbal ? " V" : null}
          {spell.components.somatic ? " S" : null}
          {spell.components.material ? " M" : null}
        </span>
      </Typography>
    ) : null;
  };

  const description = (spell: Spell) => {
    return <Typography>{spell.description}</Typography>;
  };

  const damage = (dmg: Damage | null) => {
    return dmg ? (
      <Typography>
        <span className={s.__title}>Damage: </span>
        <span>{dmg.basic}</span>
      </Typography>
    ) : null;
  };

  const damageByLevel = (damage: Damage | null, level: number) => {
    if (damage && damage.isScaleLevel) {
      let dice = damage.basic;

      const obj = Object.entries(damage).filter((item) => {
        return item[0].startsWith("level") && item[1] !== null;
      });

      for (let i = 0; i < obj.length; i++) {
        if (parseInt(obj[i][0].replace("level", "")) <= level) {
          dice = obj[i][1];
        } else {
          break;
        }
      }

      return (
        <Typography>
          <span className={s.__title}>Damage at level {level}: </span>
          <span>{dice}</span>
        </Typography>
      );
    }
  };

  const source = (spell: Spell) => {
    return (
      <Typography color="textSecondary" className={s.__source}>
        {spell.source}
      </Typography>
    );
  };

  const spellList = spells ? (
    <ul className={s.__list}>
      {spells.map((spell) => {
        let damageInfo;
        if (spell.damage && spell.damage.isScaleLevel) {
          damageInfo = damageByLevel(spell.damage, 1);
        } else {
          damageInfo = damage(spell.damage);
        }
        return (
          <li key={spell.id}>
            <Card className={s.__card} tabIndex={0}>
              <CardHeader
                className={s.__header}
                title={name(spell)}
                subheader={[schoolAndLevel(spell), source(spell)]}
              />
              <Divider />
              <CardContent>
                {scalar(spell.castingTime, "Casting time")}
                {scalar(spell.duration, "Duration")}
                {scalar(spell.range, "Range")}
                {components(spell)}
                {damageInfo}
              </CardContent>
              <Divider />
              <CardContent>
                {description(spell)}
              </CardContent>
            </Card>
          </li>
        );
      })}
    </ul>
  ) : null;

  if (loading) {
    return <h2>Loading</h2>;
  }

  if (error) {
    return <h2>Error</h2>;
  }

  return (
    <>
      <h2 className="visually-hidden">Spells</h2>
      {spellList}
    </>
  );
};
