import React from 'react';
import { FormattedMessage } from 'react-intl';
import { Typography } from 'antd';
//Data
import { Grimoire_grimoire as Grimoire } from '../../../../lib/graphql/queries/Grimoire/__generated__/Grimoire';

const { Title, Text } = Typography;

interface Props {
  grimoireDetails: Grimoire;
}

export const GrimoireDetails = ({ grimoireDetails }: Props): JSX.Element => {
  return (
    <>
      <Title level={3}>{grimoireDetails.name}</Title>
      <Text>
        <FormattedMessage id="spellsContained" />: {grimoireDetails.spells?.length}
      </Text>
    </>
  );
};
