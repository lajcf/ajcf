import React from "react";
import Sidebar from "../components/Shared/Sidebar/Sidebar";
import Layout from "../components/Shared/Components/Layout";
import { css } from "@emotion/core";

const subscriptionStyle = css`
  padding: 3em;
  display: flex;
  text-align: center;
`;

const Newsletter = () => {
  return (
    <Layout>
      <Sidebar />
      <div className="main" css={subscriptionStyle}>
        <iframe
          className="mj-w-res-iframe"
          frameBorder={0}
          scrolling="no"
          marginHeight={0}
          marginWidth={0}
          src="https://app.mailjet.com/widget/iframe/4yAg/EnY"
          width="100%"
        />
      </div>
    </Layout>
  );
};

export default Newsletter;
