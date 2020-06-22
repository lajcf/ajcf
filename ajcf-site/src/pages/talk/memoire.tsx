import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import Layout from "../../components/Shared/Layout";
import { SecondarySidebar } from "../../components/Shared/SecondarySidebar/SecondarySidebar";
import { talkTheme } from "../../assets/poles/pageThemes";
import { talkPageChineseTitle, talkPageFrenchTitle, talkPoles } from "../../assets/poles/talkPoles";
import { PoleContent } from "../../components/EspacePages/PolePages/PoleContent";
import { RecentArticles } from "../../components/Shared/RecentArticles";
import { MemoryPageQueryQuery } from "../../generated/types";
import { uniqBy } from "lodash";

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
  console.log(data);
  return (
    <Layout>
      <SecondarySidebar
        sectionName="talk"
        pageTheme={talkTheme}
        poles={talkPoles}
        pageFrenchTitle={talkPageFrenchTitle}
        pageChineseTitle={talkPageChineseTitle}
      />
      <div className="main">
        <PoleContent poleCover={data.file?.childImageSharp?.fluid} />
        <RecentArticles articles={uniqBy(data.allContentfulPost.edges, (article) => article.node.slug)} />
      </div>
    </Layout>
  );
};

export default Memoire;
