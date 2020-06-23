import React from "react";

import { graphql, useStaticQuery } from "gatsby";
import Layout from "../components/Shared/Layout";
import Sidebar from "../components/Shared/Sidebar/Sidebar";
import HomePageContent from "../components/HomePageComponents/HomePageContent";
import { HomePageQueryQuery } from "../generated/types";

const IndexPage = () => {
  const data = useStaticQuery<HomePageQueryQuery>(graphql`
    query homePageQuery {
      site {
        siteMetadata {
          title
        }
      }

      allFile(filter: { relativeDirectory: { eq: "homepage" } }) {
        edges {
          node {
            childImageSharp {
              fluid(maxWidth: 3000, quality: 100) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  `);
  const fluidImages = data.allFile.edges.map((edge) => edge.node.childImageSharp?.fluid);
  return (
    <Layout>
      <Sidebar />
      <HomePageContent homePageImages={fluidImages} />
    </Layout>
  );
};

export default IndexPage;
