import React from "react";
import { Layout } from "../../Layout/Layout";
import { EspacesSummary } from "./EspacesSummary";
import { GeneralSummary } from "./GeneralSummary";

export const ProjetsAJCFContainer = () => {
  return (
    <Layout>
      <GeneralSummary />
      <EspacesSummary />
    </Layout>
  );
};
