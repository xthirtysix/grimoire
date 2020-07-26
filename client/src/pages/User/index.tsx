import React, { useState } from "react";
import { RouteComponentProps } from "react-router-dom";
import { useQuery } from "react-apollo";
import { USER } from "../../lib/graphql/queries";
import {
  User as UserData,
  UserVariables,
} from "../../lib/graphql/queries/User/__generated__/User";
import { UserProfile, UserGrimoires } from "./components";

interface MatchParams {
  id: string;
}

const PAGE_LIMIT = 4;

export const User = ({ match }: RouteComponentProps<MatchParams>) => {
  const [grimoiresPage, setGrimoiresPage] = useState(0);

  const { data, loading, error } = useQuery<UserData, UserVariables>(USER, {
    variables: {
      id: match.params.id,
      grimoiresPage,
      limit: PAGE_LIMIT,
    },
  });

  const user = data ? data.user : null;
  const userProfileElement = user ? <UserProfile user={user} /> : null;

  const userGrimoires = user && user.grimoires ? user.grimoires : null;

  const userGrimoiresElement = userGrimoires ? (
    <UserGrimoires
      userGrimoires={userGrimoires}
      grimoiresPage={grimoiresPage}
      limit={PAGE_LIMIT}
      setUserGrimoires={setGrimoiresPage}
    />
  ) : null;

  return (
    <>  
      {userProfileElement}
      {userGrimoiresElement}
    </>
  );
};
