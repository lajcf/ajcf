import React from 'react';

import Layout from '../components/common/layout';
import Footer from '../components/common/Footer';
import Sidebar from '../components/common/Sidebar';

import Features from '../components/features/Features';
import Capabilities from '../components/capabilities/Capabilities';
import Contact from '../components/contact/Contact';
import { Header } from '../components/common/Header';
import HomePage from "../components/HomePage/HomePage";

const IndexPage = () => (
  <Layout>
    <Header />
    <Sidebar />

    <div id="wrapper">
      <HomePage />
      <Features />
      <Capabilities />
      <Contact />
    </div>

    <Footer />
  </Layout>
);

export default IndexPage;
