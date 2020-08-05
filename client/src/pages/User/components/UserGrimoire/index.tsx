import React from "react";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import {
  User,
} from "../../../../lib/graphql/queries/User/__generated__/User";
import { Paper, Typography, Button, List } from "@material-ui/core";

interface Props {
  userGrimoires: User["user"]["grimoires"];
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    grimoire: {
      display: "flex",
      flexDirection: "column",
      padding: "2rem",
    },
  })
);

export const UserGrimoire = ({ userGrimoires }: Props) => {
  const classes = useStyles();
  const total = userGrimoires ? userGrimoires.total : null;
  const result = userGrimoires ? userGrimoires.result : null;

  const grimoireList =
    total && result ? (
      <List>
        {result.map((grimoire) => {
          return (
            <li key={grimoire.id}>
              <Typography>{grimoire.name}</Typography>
            </li>
          );
        })}
      </List>
    ) : null;

  return (
    <>
      <Typography>Grimoires created: {total}</Typography>
      {grimoireList}
    </>
  );
};
