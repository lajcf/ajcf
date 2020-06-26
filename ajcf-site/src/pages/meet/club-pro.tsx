import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import { uniqBy } from "lodash";
import Layout from "../../components/Shared/Layout";
import { SecondarySidebar } from "../../components/Shared/SecondarySidebar/SecondarySidebar";
import { PoleContent } from "../../components/EspaceComponents/PoleComponents/PoleContent";
import { RecentArticles } from "../../components/EspaceComponents/PoleComponents/RecentArticles";
import { ClubProPageQueryQuery, ImageSharpFluid } from "../../generated/types";
import { generateSidebarTheme } from "../../components/Shared/utils/generateSidebarTheme";
import { clubProPole } from "../../assets/poles/meetPoles";

const DevPerso = () => {
  const data = useStaticQuery<ClubProPageQueryQuery>(graphql`
    query clubProPageQuery {
      site {
        siteMetadata {
          title
        }
      }
      file(relativePath: { eq: "covers/cover-club-pro.jpg" }) {
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
      allContentfulPost(filter: { pole: { eq: "club-pro" } }) {
        edges {
          node {
            slug
            createdAt
            title
            author
            pole
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
  const sidebarTheme = generateSidebarTheme(clubProPole.id);
  return (
    <Layout>
      <SecondarySidebar {...sidebarTheme} activePoleId={clubProPole.id} />
      <div className="main with-padding">
        <PoleContent poleCover={data.file?.childImageSharp?.fluid as ImageSharpFluid} poleProps={clubProPole} />
        <RecentArticles articles={uniqBy(data.allContentfulPost.edges, (article) => article.node.slug)} />
      </div>
    </Layout>
  );
};

export default DevPerso;
