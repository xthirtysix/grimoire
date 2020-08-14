import React from "react";
import { Divider, Skeleton } from "antd";

const { Input } = Skeleton;

export const GrimoireDetailesSkeleton = () => {
  return (
    <>
      <Input
        active={true}
        size={"default"}
        style={{ width: 180, marginBottom: 12, fontSize: 32 }}
      />
      <Input
        active={true}
        size={"default"}
        style={{ width: 100, height: 18, marginBottom: 8 }}
      />
      <Divider style={{ marginBottom: 12}} />
    </>
  );
};
