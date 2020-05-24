import React, { ReactNode } from "react";

import PropTypes from "prop-types";
import { Helmet } from "react-helmet";
import { graphql, StaticQuery } from "gatsby";

import "../../assets/css/index.scss";
import { Header } from "./Header";

const Layout = ({ children }: { children: ReactNode }) => {
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
