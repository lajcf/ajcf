import React from "react";
import { Layout } from "../../components/Layout/Layout";
import { Banner } from "../../components/APropos/WhoAreWe/BannerComponents/Banner";
import { Summary } from "../../components/APropos/WhoAreWe/SummaryComponents/Summary";

export default () => {
  return (
    <Layout>
      <Banner />
      <Summary />
    </Layout>
  );
};
