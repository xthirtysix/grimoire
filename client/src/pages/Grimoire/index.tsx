import React from "react";
import { RouteComponentProps } from "react-router-dom";
import { useQuery } from "react-apollo";
import { GRIMOIRE } from "../../lib/graphql/queries";
import {
  Grimoire as GrimoireData,
  GrimoireVariables,
} from "../../lib/graphql/queries/Grimoire/__generated__/Grimoire";
// import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import { GrimoireSpells } from "./components/GrimoireSpells";

// const useStyles = makeStyles((theme: Theme) => createStyles({}));

interface MatchParams {
  id: string;
}

export const Grimoire = ({ match }: RouteComponentProps<MatchParams>) => {
  const { data, loading, error } = useQuery<GrimoireData, GrimoireVariables>(
    GRIMOIRE,
    {
      variables: {
        id: match.params.id,
      },
    }
  );

  if (loading) {
    return <h2>Loading</h2>
  }

  if (error ){
    return <h2>Error</h2>
  }

  const spellList =
    data &&
    data.grimoire &&
    data.grimoire.spells &&
    data.grimoire.spells.total ? (
      <GrimoireSpells grimoireSpells={data.grimoire.spells} />
    ) : null;

  return (
    <>
      {spellList}
    </>
  );
};
