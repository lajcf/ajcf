import React from "react";
import { Layout } from "../../Layout/Layout";
import { EspacesSummary } from "./EspacesSummary";
import { GeneralSummary } from "./GeneralSummary";
import { AntennesSummary } from "./AntennesSummary";
import { EducationAJCFSummary } from "./EducationAJCFSummary";
import { Recruitment } from "./Recruitment";
import styles from "./ProjetsAJCFContainer.module.scss";

export const ProjetsAJCFContainer = () => {
  return (
    <Layout className={styles.layout}>
      <GeneralSummary />
      <EspacesSummary />
      <AntennesSummary />
      <EducationAJCFSummary />
      <Recruitment />
    </Layout>
  );
};
