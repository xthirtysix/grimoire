import React from "react";
import { Paper, Typography } from "@material-ui/core";

interface Props {
  grimoire: {
    id: string;
    ownerName: string;
    ownerClass: string;
    ownerLevel: string;
  };
}

export const GrimoireCard = ({ grimoire }: Props) => {
  const { ownerName, ownerClass, ownerLevel } = grimoire;

  return (
    <Paper>
      <Typography>Grimoire of {ownerName}</Typography>
      <Typography color="textSecondary">
        {ownerClass}, level {ownerLevel}
      </Typography>
    </Paper>
  );
};
