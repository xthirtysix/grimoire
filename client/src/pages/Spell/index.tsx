import React from "react";
import { RouteComponentProps } from "react-router-dom";
import { useQuery } from "react-apollo";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import { SPELL } from "../../lib/graphql/queries";
import {
  Spell as SpellData,
  Spell_spell_castingTime as Scalar,
  Spell_spell_damage as Damage,
  Spell_spell_components as Components,
  SpellVariables,
} from "../../lib/graphql/queries/Spell/__generated__/Spell";
import { Typography, Paper, Divider, Grid } from "@material-ui/core";
import { useSnackbar } from "notistack";
import { SpellSkeleton } from "./components";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    header: {
      fontSize: "1.7rem",
      textTransform: "uppercase",
      marginBottom: "1rem",
    },
    title: {
      fontWeight: "bold",
    },
    block: {
      boxSizing: "border-box",
      height: "100%",
      display: "flex",
      flexDirection: "column",
      padding: "2rem",
    },
    grid: {
      flexWrap: "nowrap",
      margin: "2rem 0",
      display: "flex",
      alignItems: "stretch",
      gridGap: "1rem",
    },
    dividerLarge: {
      margin: "1rem 0",
    },
    dividerSmall: {
      margin: "0.5rem 0",
    },
  })
);

interface MatchParams {
  id: string;
}

export const Spell = ({ match }: RouteComponentProps<MatchParams>) => {
  const { loading, data, error } = useQuery<SpellData, SpellVariables>(SPELL, {
    variables: {
      id: match.params.id,
    },
  });

  const { enqueueSnackbar } = useSnackbar();

  const classes = useStyles();

  const level = (level: number) => {
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

  const scalar = (scalar: Scalar, title: string) => {
    return (
      <Typography className="classes.property">
        <span className={classes.title}>{title}: </span>
        <span className="classes.value">
          {scalar.value ? scalar.value + " " + scalar.unit : scalar.unit}
        </span>
      </Typography>
    );
  };

  const components = (components: Components | null) => {
    return components ? (
      <>
        <Typography className="classes.property">
          <span className={classes.title}>Components:</span>
          <span className="classes.value">
            {components.verbal ? " V" : null}
            {components.somatic ? " S" : null}
            {components.material ? " M" : null}
          </span>
        </Typography>
        <Divider className={classes.dividerSmall} />
      </>
    ) : null;
  };

  const concentration = (isConcentration: boolean) => {
    return isConcentration ? (
      <>
        <Typography className="classes.property">
          <span className={classes.title}>Concentration</span>
        </Typography>
        <Divider className={classes.dividerSmall} />
      </>
    ) : null;
  };

  const materials = (materials: string | null) => {
    return materials ? (
      <>
        <Divider className={classes.dividerLarge} />
        <Typography className={classes.title}>Materials:</Typography>
        <Typography className="classes.property">{materials}</Typography>
      </>
    ) : null;
  };

  const damage = (dmg: Damage | null) => {
    return dmg ? (
      <>
        <Typography className="classes.property">
          <span className={classes.title}>Basic damage: </span>
          <span className="classes.value">{dmg.basic}</span>
        </Typography>
        <Typography className="classes.property">
          <span className={classes.title}>Damage type: </span>
          <span className="classes.value">{dmg.type}</span>
        </Typography>
      </>
    ) : null;
  };

  const damageLevelScale = (dmg: Damage | null) => {
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
              <Typography key={key[0]}>
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

  const headerBlock = data ? (
    <Typography className={classes.header}>{data.spell.name}</Typography>
  ) : null;

  const conditionsBlock = data ? (
    <Paper className={classes.block}>
      {concentration(data.spell.isConcentration)}
      {components(data.spell.components)}
      {scalar(data.spell.castingTime, "Casting time")}
      {scalar(data.spell.duration, "Duration")}
      {scalar(data.spell.range, "Range")}
    </Paper>
  ) : null;

  const descriptionBlock = data ? (
    <Paper className={classes.block}>
      <Typography className={classes.title}>
        {data.spell.school}, {level(data.spell.level)}
      </Typography>
      <Divider className={classes.dividerLarge} />
      {/* <Typography className={classes.title}>Description:</Typography> */}
      <Typography>{data.spell.description}</Typography>
      {materials(data.spell.materials)}
    </Paper>
  ) : null;

  const damageBlock =
    data && data.spell.damage ? (
      <Paper className={classes.block}>
        {damage(data.spell.damage)}
        {damageLevelScale(data.spell.damage)}
      </Paper>
    ) : null;

  const spellData = (
    <>
      {headerBlock}
      <Grid container spacing={3}>
        <Grid item xs={12} md={6} lg={3} xl={2}>
          {conditionsBlock}
        </Grid>{" "}
        {data && data.spell.damage ? (
          <>
            <Grid item xs={12} md={6} lg={3} xl={2}>
              {damageBlock}
            </Grid>
            <Grid item xs={12} md={12} lg={6} xl={8}>
              {descriptionBlock}
            </Grid>
          </>
        ) : (
          <Grid item xs={12} md={12} lg={9} xl={10}>
            {descriptionBlock}
          </Grid>
        )}
      </Grid>
    </>
  );

  if (loading) {
    return <SpellSkeleton />;
  }

  if (error) {
    enqueueSnackbar(`Unable to find spell with ${data?.spell.id}`, {
      variant: "error",
    });
  }

  return <>{spellData}</>;
};
