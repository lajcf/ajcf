import React from "react";
import { Layout } from "../../Layout/Layout";
import { Espaces } from "./Espaces";
import { Summary } from "./Summary";

export const ProjetsAJCFContainer = () => {
  return (
    <Layout>
      <Summary />
      <Espaces />
    </Layout>
  );
};
