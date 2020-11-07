import React from "react";
import { DonateButton } from "./DonateButton";
import { SubscribeButton } from "./SubscribeButton";
import { Navigation } from "./Navigation";

export const HeaderNavigation = () => {
  return (
    <>
      <Navigation />
      <div>
        <DonateButton />
        <SubscribeButton />
      </div>
    </>
  );
};
