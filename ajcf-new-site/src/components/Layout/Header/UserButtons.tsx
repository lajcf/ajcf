import React from "react";
import { DonateButton } from "./DonateButton";
import { SubscribeButton } from "./SubscribeButton";

export const UserButtons = () => {
  return (
    <div style={{ gridArea: "userbuttons" }}>
      <DonateButton />
      <SubscribeButton />
    </div>
  );
};
