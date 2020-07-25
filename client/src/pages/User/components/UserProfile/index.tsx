import React from "react";
import { User as UserData } from "../../../../lib/graphql/queries/User/__generated__/User";

interface Props {
  user: UserData["user"];
}

export const UserProfile = ({ user }: Props) => {
  return <div>
      <img src={user.avatar}/>
      <p>{user.name}</p>
      <p>{user.contact}</p>
  </div>;
};
