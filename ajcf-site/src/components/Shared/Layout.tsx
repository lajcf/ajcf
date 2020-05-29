import React, { ReactNode } from "react";

import PropTypes from "prop-types";
import { Helmet } from "react-helmet";
import { graphql, StaticQuery } from "gatsby";

import "../../assets/css/index.scss";
import { Header } from "./Header";
import { css, Global } from "@emotion/core";
import { sizes } from "../../assets/css/variables/sizes";

const Layout = ({ children }: { children: ReactNode }) => {
  const globalStyle = css`
    .main {
      height: calc(100vh - ${sizes.headerHeight});
      margin-left: ${sizes.secondarySidebarWidth};
    }
    .text-content {
      margin: 3em;
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
