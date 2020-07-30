import React from "react";
import { RouteComponentProps } from "react-router-dom";
import { useQuery } from "react-apollo";
import { SPELL } from "../../lib/graphql/queries";
import {
  Spell as SpellData,
  SpellVariables,
} from "../../lib/graphql/queries/Spell/__generated__/Spell";
import { useSnackbar } from "notistack";
import { SpellSkeleton } from "./components";

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

  if (loading) {
    return <SpellSkeleton />;
  }

  if (error) {
    enqueueSnackbar(`Unable to find spell with ${data?.spell.id}`, {
      variant: "error",
    });
  }

  const spellData = data ? data.spell.name : null;

  return (
    <>
      <h2>Spell</h2>
      <p>{spellData}</p>
    </>
  );
};
