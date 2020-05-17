import React from "react";

import Layout from "../components/Shared/layout";
import Sidebar from "../components/Shared/Sidebar/Sidebar";
import HomePage from "../components/HomePage/HomePage";

const IndexPage = () => (
  <Layout>
    <Sidebar />
    <HomePage />
  </Layout>
);

export default IndexPage;
