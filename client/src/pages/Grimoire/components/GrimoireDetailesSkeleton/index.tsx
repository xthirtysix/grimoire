import React from "react";
import { Typography } from "@material-ui/core";
import { Skeleton } from "@material-ui/lab";

export const GrimoireDetailesSkeleton = () => {
  return (
    <>
      <Typography>
        Grimoire owner:{" "}
        <Skeleton
          style={{ display: "inline-block" }}
          variant="text"
          width={90}
        />
      </Typography>
      <Typography>
        Spells contained:{" "}
        <Skeleton
          style={{ display: "inline-block" }}
          variant="text"
          width={10}
        />
      </Typography>
    </>
  );
};
