import React from "react";
import Layout from "../components/Shared/Components/Layout";
import Sidebar from "../components/Shared/Sidebar/Sidebar";
import { css } from "@emotion/core";
import { DescriptionComponent } from "../components/AdhererComponents/DescriptionComponent";
import AJCFSpace from "../components/Shared/Layout/AJCFSpace";

const subscriptionStyle = css`
  padding: 3em;
`;

const Adherer = () => {
  return (
    <Layout>
      <Sidebar />
      <div className="main" css={subscriptionStyle}>
        <DescriptionComponent />
        <AJCFSpace height="3em" />
        <iframe
          id="haWidget"
          allowTransparency="true"
          scrolling="auto"
          src="https://www.helloasso.com/associations/ajcf/adhesions/adhesion/widget"
          style={{ width: "100%", height: "750px", border: "none" }}
          onLoad="window.scroll(0, this.offsetTop)"
        />
      </div>
    </Layout>
  );
};

export default Adherer;
