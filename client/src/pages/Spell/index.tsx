import React from 'react';
import { Card, Empty } from 'antd';
import { CopyrightOutlined, TrademarkCircleOutlined } from '@ant-design/icons';
import { Spell as SpellComponent, SpellSkeleton } from '../../lib/components';
import { RouteComponentProps } from 'react-router-dom';
//Data
import { SPELL } from '../../lib/graphql/queries/Spell';
import {
  Spell as SpellData,
  SpellVariables,
} from '../../lib/graphql/queries/Spell/__generated__/Spell';
import { useQuery } from 'react-apollo';
import { RootStateOrAny, useSelector } from 'react-redux';

interface MatchParams {
  name: string;
}

export const Spell = ({ match }: RouteComponentProps<MatchParams>) => {
  const isTranslated = useSelector((state: RootStateOrAny) => state.isTranslated);

  const { loading, data, error } = useQuery<SpellData, SpellVariables>(SPELL, {
    variables: {
      name: match.params.name,
    },
  });

  if (loading) {
    return (
      <div className="container">
        <SpellSkeleton />
      </div>
    );
  }

  if (error) {
    return (
      <div className="container">
        <Empty
          description={`There's no spell called ${match.params.name}. Maybe one day you'll write it!?`}
        />
      </div>
    );
  }

  const spell = data && data.spell ? data.spell : null;

  const spellName = spell ? (
    <h3 style={{ marginBottom: 0 }}>
      {isTranslated ? spell.name.ru : spell.name.en}{' '}
      {spell.isConcentration ? <CopyrightOutlined /> : null}{' '}
      {spell.isRitual ? <TrademarkCircleOutlined /> : null}
    </h3>
  ) : null;

  return spell ? (
    <div className="container">
      <Card title={spellName}>
        <SpellComponent spell={spell} />
      </Card>
    </div>
  ) : (
    <Empty
      description={`There's no spell called ${match.params.name}. Maybe one day you'll write it!?`}
    />
  );
};
