import React from "react";
import { Layout } from "../components/Layout/Layout";
import { Espaces } from "../components/ProjetsAJCF/ProjetsAJCF/EspacesComponents/Espaces";
import { Summary } from "../components/ProjetsAJCF/ProjetsAJCF/SummaryComponents/Summary";

export default () => {
  return (
    <Layout>
      <Summary />
      <Espaces />
    </Layout>
  );
};
