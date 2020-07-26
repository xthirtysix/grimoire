import React from "react";
import { User } from "../../../../lib/graphql/queries/User/__generated__/User";
import { GrimoireCard } from "../../../../components";
import { GridList, ListItem, Typography } from "@material-ui/core";
import { Pagination } from "@material-ui/lab";

interface Props {
  userGrimoires: User["user"]["grimoires"];
  grimoiresPage: number;
  limit: number;
  setUserGrimoires: (page: number) => void;
}

export const UserGrimoires = ({
  userGrimoires,
  grimoiresPage,
  limit,
  setUserGrimoires,
}: Props) => {
  let total, result;

  if (userGrimoires) {
    total = userGrimoires.total;
    result = userGrimoires.result;
  }

  const renderList =
    userGrimoires && result && total ? (
      <GridList>
        {userGrimoires.result.map((grimoire) => (
          <li key={grimoire.id} />
        ))}
      </GridList>
    ) : (
      <Typography component="p" color="textSecondary">
        You don't have any grimoires yet!
      </Typography>
    );

  return (
    <div>
      <Typography component="h2" variant="h6">
        Your Grimoires
      </Typography>
      <Typography color="textSecondary">
        Here is the list of grimoires you created:
      </Typography>
      {renderList}
    </div>
  );
};
