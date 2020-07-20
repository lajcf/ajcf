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
  const mainStyleMj = css`
    font-family: Ubuntu, Helvetica;
    color: white;
    padding: 0px 25px;
    background-color: rgb(246, 98, 92);
    text-align: center;
    vertical-align: middle;
    display: inline-block;
    border-radius: 3px;
  `;
  const tableStyleMj = css`
    display: table;
    height: 45px;
  `;
  const tableCellStyleMj = css`
    display: table-cell;
    vertical-align: middle;
  `;
  const buttonStyleMj = css`
    font-family: Ubuntu, Helvetica;
    display: inline-block;
    text-align: center;
    font-size: 13px;
    vertical-align: middle;
    color: rgb(253, 253, 246);
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
            <script type="text/javascript" src="https://app.mailjet.com/statics/js/iframeResizer.min.js" />
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
