import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import { uniqBy } from "lodash";
import Sidebar from "../components/Shared/Sidebar/Sidebar";
import Layout from "../components/Shared/Components/Layout";
import { AllArticles } from "../components/PostComponents/AllArticles";
import { ContentfulPoleFragmentFragment, NewsPageQueryQuery } from "../generated/types";
import { EspaceId } from "../assets/poles/constants";
import { SecondarySidebar } from "../components/Shared/SecondarySidebar/SecondarySidebar";
import { generateSidebarTheme } from "../components/Shared/utils/generateSidebarTheme";

export interface NewsProps {
  location?: {
    state: {
      pole?: ContentfulPoleFragmentFragment;
    };
  };
}

const generateSidebar = (allPoles: ContentfulPoleFragmentFragment[], targetPole?: ContentfulPoleFragmentFragment) => {
  if (!targetPole) return <Sidebar />;
  const theme = generateSidebarTheme(targetPole?.espace?.espaceId as EspaceId);
  const poles = uniqBy(allPoles, (pole) => pole.poleId).filter(
    (pole) => pole.espace?.espaceId === targetPole?.espace?.espaceId
  );
  return (
    <SecondarySidebar
      espaceId={targetPole?.espace?.espaceId as EspaceId}
      pageTheme={theme}
      poles={poles}
      pageFrenchTitle={targetPole?.espace?.frenchTitle || ""}
      pageChineseTitle={targetPole?.espace?.chineseTitle || ""}
    />
  );
};

const News = ({ location }: NewsProps) => {
  const data = useStaticQuery<NewsPageQueryQuery>(graphql`
    query newsPageQuery {
      site {
        siteMetadata {
          title
        }
      }
      allContentfulPole {
        edges {
          node {
            ...ContentfulPoleFragment
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
  const relevantPosts = location?.state.pole
    ? data.allContentfulPost.edges.filter((post) => post.node.pole?.poleId === location.state.pole?.poleId)
    : data.allContentfulPost.edges;
  const sidebar = generateSidebar(data.allContentfulPole.edges.map((edge) => edge.node) || [], location?.state.pole);
  return (
    <Layout>
      {sidebar}
      <AllArticles articles={relevantPosts || []} />
    </Layout>
  );
};

export default News;
