import React from "react";
import { Layout, Divider } from "antd";
import { RouteComponentProps } from "react-router-dom";
import {
  GrimoireSpells,
  GrimoireSpellsSkeleton,
  GrimoireDetailes,
  GrimoireDetailesSkeleton,
} from "./components";
// Data
import { useQuery } from "react-apollo";
import { GRIMOIRE } from "../../lib/graphql/queries";
import {
  Grimoire as GrimoireData,
  GrimoireVariables,
} from "../../lib/graphql/queries/Grimoire/__generated__/Grimoire";
// Styles
import s from "./styles/Grimoire.module.scss";

const { Content } = Layout;

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

  const grimoireDetailes = data?.grimoire ? data.grimoire : null;

  const spellList =
    data &&
    data.grimoire &&
    data.grimoire.spells &&
    data.grimoire.spells.total ? (
      <GrimoireSpells grimoireSpells={data.grimoire.spells} />
    ) : null;

  if (error) {
    return <h2>Error</h2>;
  }

  if (loading) {
    return (
      <Content className="container">
        <GrimoireDetailesSkeleton />
        <GrimoireSpellsSkeleton />
      </Content>
    );
  }

  return (
    <Content className="container">
      <GrimoireDetailes grimoireDetailes={grimoireDetailes} />
      <Divider className="divider" />
      {spellList}
    </Content>
  );
};
