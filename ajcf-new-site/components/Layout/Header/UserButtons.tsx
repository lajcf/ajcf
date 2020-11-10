import React from "react";
import { DonateButton } from "./DonateButton";
import { SubscribeButton } from "./SubscribeButton";

export const UserButtons = ({ className }: any) => {
  return (
    <div className={className}>
      <DonateButton />
      <SubscribeButton />
    </div>
  );
};
