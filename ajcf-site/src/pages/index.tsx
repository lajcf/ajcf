import React from "react";

import Layout from "../components/common/layout";
import Sidebar from "../components/common/Sidebar/Sidebar";
import { Header } from "../components/common/Header";
import HomePage from "../components/HomePage/HomePage";

const IndexPage = () => (
  <Layout>
    <Header />
    <Sidebar />

    <div id="body">
      <HomePage />
    </div>

  </Layout>
);

export default IndexPage;
