import React from "react";
import { Typography } from "@material-ui/core";
import { Grimoire_grimoire as Grimoire } from "../../../../lib/graphql/queries/Grimoire/__generated__/Grimoire";

interface Props {
  grimoireDetailes: Grimoire | null;
}

export const GrimoireDetailes = ({ grimoireDetailes }: Props) => {
  return grimoireDetailes ? (
    <>
      <Typography>{`Grimoire owner: ${grimoireDetailes.name}`}</Typography>
      {grimoireDetailes.spells?.total ? (
        <Typography>Spells contained: {grimoireDetailes.spells?.total}</Typography>
      ) : null}
    </>
  ) : null;
};
