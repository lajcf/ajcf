import React from "react";
import { uniqBy } from "lodash";
import { graphql, useStaticQuery } from "gatsby";
import Layout from "../components/Shared/Components/Layout";
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
      allContentfulPost {
        edges {
          node {
            slug
            createdAt
            title
            author
            pole {
              poleId
              espace {
                espaceId
              }
            }
            content {
              childContentfulRichText {
                html
              }
            }
            image {
              fluid(maxWidth: 3000, quality: 100) {
                base64
                aspectRatio
                src
                srcSet
                sizes
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
      <HomePageContent
        homePageImages={fluidImages}
        articles={uniqBy(data.allContentfulPost.edges, (article) => article.node.slug)}
      />
    </Layout>
  );
};

export default IndexPage;
