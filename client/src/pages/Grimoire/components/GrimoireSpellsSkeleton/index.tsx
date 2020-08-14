import React from "react";
import { Skeleton } from "antd";

const { Input } = Skeleton;

export const GrimoireSpellsSkeleton = () => {
  return (
    <>
      <Input
        active={true}
        size={"default"}
        style={{ width: 100, marginBottom: 12, fontSize: 32 }}
      />
      <Input
        active={true}
        size={"default"}
        style={{ marginBottom: 12, fontSize: 32 }}
      />
      <Input
        active={true}
        size={"default"}
        style={{ marginBottom: 12, fontSize: 32 }}
      />
      <Input
        active={true}
        size={"default"}
        style={{ marginBottom: 12, fontSize: 32 }}
      />
    </>
  );
};
