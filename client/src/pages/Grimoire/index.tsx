import React from "react";
import { RouteComponentProps } from "react-router-dom";
import { useQuery } from "react-apollo";
import { GRIMOIRE } from "../../lib/graphql/queries";
import {
  Grimoire as GrimoireData,
  GrimoireVariables,
} from "../../lib/graphql/queries/Grimoire/__generated__/Grimoire";
// import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import { SidebarSkeleton } from "../../components";
import { GrimoireSpells } from "./components/GrimoireSpells";
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
} from "@material-ui/core";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

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
    return <SidebarSkeleton />;
  }

  if (error) {
    return <h2>Error</h2>;
  }

  const spellList =
    data && data.grimoire && data.grimoire.spells && data.grimoire.spells.total
      ? data.grimoire.spells.result
      : null;

  const header = data && data.grimoire.name ? data.grimoire.name : "";
  const subheader =
    data && data.grimoire.characterClasses
      ? data.grimoire.characterClasses
          .map((item) => {
            return `${item.class} (${item.level})`;
          })
          .join(", ")
      : null;

  const accordion = spellList ? (
    <div>
      {spellList.map((spell) => {
        return (
          <Accordion>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Typography>{spell.name}</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>{spell.description}</Typography>
            </AccordionDetails>
          </Accordion>
        );
      })}
    </div>
  ) : null;

  return <>{accordion}</>;
};
