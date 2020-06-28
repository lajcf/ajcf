import React, { ReactNode } from "react";

import PropTypes from "prop-types";
import { Helmet } from "react-helmet";
import { graphql, StaticQuery } from "gatsby";

import "../../../assets/css/index.scss";
import { css, Global } from "@emotion/core";
import { Header } from "./Header";
import { sizes } from "../../../assets/css/variables/sizes";

const Layout = ({ children }: { children: ReactNode }) => {
  const globalStyle = css`
    .main {
      margin-top: ${sizes.headerHeight});
      margin-left: ${sizes.secondarySidebarWidth};
    }
    .with-padding {
      padding-bottom: 4em;
      padding-left: 4em;
      padding-right: 4em;
    }
    .text-content {
      margin-top: 2em;
      margin-bottom: 2em;
    }
  `;
  return (
    <StaticQuery
      query={graphql`
        query SiteTitleQuery {
          site {
            siteMetadata {
              title
            }
          }
        }
      `}
      render={(data) => (
        <>
          <Global styles={globalStyle} />
          <Helmet
            title={data.site.siteMetadata.title}
            meta={[
              { name: "description", content: "AJCF" },
              { name: "keywords", content: "site, web" },
            ]}
          >
            <html lang="fr" />
          </Helmet>
          <div className="full-height">
            <Header />
            {children}
          </div>
        </>
      )}
    />
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
