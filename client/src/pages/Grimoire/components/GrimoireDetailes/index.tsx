import React from 'react'
import { Typography } from 'antd'
//Data
import { Grimoire_grimoire as Grimoire } from '../../../../lib/graphql/queries/Grimoire/__generated__/Grimoire'

const { Title, Text } = Typography

interface Props {
  grimoireDetailes: Grimoire | null
}

export const GrimoireDetailes = ({ grimoireDetailes }: Props) => {
  return grimoireDetailes ? (
    <>
      <Title level={3}>{grimoireDetailes.name}</Title>
      <Text>Spells contained: {grimoireDetailes.spells?.length}</Text>
    </>
  ) : null
}
