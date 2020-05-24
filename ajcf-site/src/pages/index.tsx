import React from "react";

import { graphql, useStaticQuery } from "gatsby";
import Layout from "../components/Shared/Layout";
import Sidebar from "../components/Shared/Sidebar/Sidebar";
import HomePage from "../components/HomePage/HomePage";
import { HomePageQueryQuery } from "../../gatsby-graphql";

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
              fluid {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  `);
  console.log(data);
  const fluidImages = data.allFile.edges.map((edge) => edge.node.childImageSharp?.fluid);
  return (
    <Layout>
      <Sidebar />
      <HomePage homePageImages={fluidImages} />
    </Layout>
  );
};

export default IndexPage;
