import React from "react";
import Sidebar from "../../components/Shared/Sidebar/Sidebar";
import { formStyle } from "../../components/ContactComponents/ContactForm";
import Layout from "../../components/Shared/Components/Layout";

const Confirmation = () => {
  return (
    <Layout>
      <Sidebar />
      <div className="main" css={formStyle}>
        <h1>Nous contacter</h1>
        <p>Votre message a bien été envoyé !</p>
      </div>
    </Layout>
  );
};

export default Confirmation;
