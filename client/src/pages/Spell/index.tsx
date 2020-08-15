import React from "react";

export const Spell = () => {
  return <h2>Spell page</h2>
}
// import { RouteComponentProps } from "react-router-dom";
// import { useQuery } from "react-apollo";
// import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
// import { SPELL } from "../../lib/graphql/queries";
// import {
//   Spell as SpellData,
//   SpellVariables,
// } from "../../lib/graphql/queries/Spell/__generated__/Spell";
// import { Grid, Typography, Paper, Divider } from "@material-ui/core";
// import { useSnackbar } from "notistack";
// import { SpellSkeleton } from "./components";
// import {
//   Level,
//   Scalar,
//   Components,
//   Concentration,
//   Damage,
//   DamageLevelScale,
//   Materials,
// } from "../../components";

// interface MatchParams {
//   id: string;
// }

// const useStyles = makeStyles((theme: Theme) =>
//   createStyles({
//     header: {
//       fontSize: "1.7rem",
//       textTransform: "uppercase",
//       marginBottom: "1rem",
//     },
//     title: {
//       fontWeight: "bold",
//     },
//     block: {
//       boxSizing: "border-box",
//       display: "flex",
//       flexDirection: "column",
//       padding: "2rem",
//       height: "100%",
//     },
//     grid: {
//       flexWrap: "nowrap",
//       margin: "2rem 0",
//       display: "flex",
//       alignItems: "stretch",
//       gridGap: "1rem",
//     },
//     dividerLarge: {
//       margin: "1rem 0",
//     },
//   })
// );

// export const Spell = ({ match }: RouteComponentProps<MatchParams>) => {
//   const { loading, data, error } = useQuery<SpellData, SpellVariables>(SPELL, {
//     variables: {
//       id: match.params.id,
//     },
//   });

//   const classes = useStyles();
//   const { enqueueSnackbar } = useSnackbar();

//   const headerBlock = data ? (
//     <Typography className={classes.header}>{data.spell.name}</Typography>
//   ) : null;

//   const conditionsBlock = data ? (
//     <Paper className={classes.block}>
//       {Concentration(data.spell.isConcentration)}
//       {Components(data.spell.components)}
//       {Scalar(data.spell.castingTime, "Casting time")}
//       {Scalar(data.spell.duration, "Duration")}
//       {Scalar(data.spell.range, "Range")}
//     </Paper>
//   ) : null;

//   const descriptionBlock = data ? (
//     <Paper className={classes.block}>
//       <Typography className={classes.title}>
//         {data.spell.school}, {Level(data.spell.level)}
//       </Typography>
//       <Divider className={classes.dividerLarge} />
//       <Typography>{data.spell.description}</Typography>
//       {Materials(data.spell.materials)}
//     </Paper>
//   ) : null;

//   const damageBlock =
//     data && data.spell.damage ? (
//       <Paper className={classes.block}>
//         {Damage(data.spell.damage)}
//         {DamageLevelScale(data.spell.damage)}
//       </Paper>
//     ) : null;

//   if (loading) {
//     return <SpellSkeleton />;
//   }

//   if (error) {
//     enqueueSnackbar(`Unable to find spell with ${data?.spell.id}`, {
//       variant: "error",
//     });
//   }

//   const spellData = (
//     <Grid container alignItems={"stretch"} spacing={2}>
//       {damageBlock ? (
//         <>
//           <Grid item xs={12} sm={6} lg={3}>
//             {conditionsBlock}
//           </Grid>
//           <Grid item xs={12} sm={6} lg={3}>
//             {damageBlock}
//           </Grid>
//           <Grid item xs={12} sm={12} lg={6}>
//             {descriptionBlock}
//           </Grid>
//         </>
//       ) : (
//         <>
//           <Grid item xs={12} sm={3} lg={3}>
//             {conditionsBlock}
//           </Grid>
//           <Grid item xs={12} sm={9} lg={9}>
//             {descriptionBlock}
//           </Grid>
//         </>
//       )}
//     </Grid>
//   );

//   return (
//     <>
//       {headerBlock}
//       {spellData}
//     </>
//   );
// };
