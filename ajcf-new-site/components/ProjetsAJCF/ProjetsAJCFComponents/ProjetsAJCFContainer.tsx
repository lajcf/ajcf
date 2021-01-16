import React from "react";
import { Layout } from "../../Layout/Layout";
import { EspacesSummary } from "./EspacesSummary";
import { GeneralSummary } from "./GeneralSummary";
import { AntennesSummary } from "./AntennesSummary";
import { EducationAJCFSummary } from "./EducationAJCFSummary";
import { Recruitment } from "./Recruitment";

export const ProjetsAJCFContainer = () => {
  return (
    <Layout>
      <GeneralSummary />
      <EspacesSummary />
      <AntennesSummary />
      <EducationAJCFSummary />
      <Recruitment />
    </Layout>
  );
};
