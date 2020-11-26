import React from "react";
import { Institutions } from "../../components/APropos/Partners/InstitutionsComponents/Institutions";
import { Summary } from "../../components/APropos/Partners/SummaryComponents/Summary";
import { Layout } from "../../components/Layout/Layout";

export default () => {
  return (
    <Layout>
      <Summary />
      <Institutions />
    </Layout>
  );
};
