import * as React from "react";

import PropTypes from "prop-types";
import Helmet from "react-helmet";
import { StaticQuery } from "gatsby";

import "../../assets/css/index.scss";
import { Header } from "./Header";

const Layout = ({ children }) => {
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
              { name: "description", content: "Hyperspace" },
              { name: "keywords", content: "site, web" },
            ]}
          >
            <html lang="en" />
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
