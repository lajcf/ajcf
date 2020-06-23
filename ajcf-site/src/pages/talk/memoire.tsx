import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import { uniqBy } from "lodash";
import Layout from "../../components/Shared/Layout";
import { SecondarySidebar } from "../../components/Shared/SecondarySidebar/SecondarySidebar";
import { talkTheme } from "../../assets/poles/pageThemes";
import { talkPageChineseTitle, talkPageFrenchTitle, talkPoles } from "../../assets/poles/talkPoles";
import { PoleContent } from "../../components/EspaceComponents/PoleComponents/PoleContent";
import { RecentArticles } from "../../components/Shared/RecentArticles";
import { MemoryPageQueryQuery } from "../../generated/types";
import { generateSidebarTheme } from "../../components/Shared/utils/generateSidebarTheme";

const Memoire = () => {
  const data = useStaticQuery<MemoryPageQueryQuery>(graphql`
    query memoryPageQuery {
      site {
        siteMetadata {
          title
        }
      }
      file(relativePath: { eq: "memoire.jpeg" }) {
        childImageSharp {
          fluid(maxWidth: 3000, quality: 100) {
            base64
            aspectRatio
            src
            srcSet
            sizes
          }
        }
      }
      allContentfulPost(filter: { pole: { eq: "memoire" } }) {
        edges {
          node {
            slug
            createdAt
            title
            author
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
  const sidebarTheme = generateSidebarTheme("memoire");
  return (
    <Layout>
      <SecondarySidebar {...sidebarTheme} />
      <div className="main">
        <PoleContent poleCover={data.file?.childImageSharp?.fluid} />
        <RecentArticles
          articles={uniqBy(data.allContentfulPost.edges, (article) => article.node.slug)}
          espaceId="talk"
          poleId="memoire"
        />
      </div>
    </Layout>
  );
};

export default Memoire;
