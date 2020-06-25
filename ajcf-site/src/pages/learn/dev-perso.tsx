import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import { uniqBy } from "lodash";
import Layout from "../../components/Shared/Layout";
import { SecondarySidebar } from "../../components/Shared/SecondarySidebar/SecondarySidebar";
import { PoleContent } from "../../components/EspaceComponents/PoleComponents/PoleContent";
import { RecentArticles } from "../../components/EspaceComponents/PoleComponents/RecentArticles";
import { DevPersoPageQueryQuery, ImageSharpFluid, ContentfulPost } from "../../generated/types";
import { generateSidebarTheme } from "../../components/Shared/utils/generateSidebarTheme";
import { conferencesPole } from "../../assets/poles/talkPoles";
import { devPersoPole } from "../../assets/poles/learnPoles";

const DevPerso = () => {
  const data = useStaticQuery<DevPersoPageQueryQuery>(graphql`
    query devPersoPageQuery {
      site {
        siteMetadata {
          title
        }
      }
      file(relativePath: { eq: "dev-perso.jpg" }) {
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
      allContentfulPost(filter: { pole: { eq: "dev-perso" } }) {
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
  const sidebarTheme = generateSidebarTheme(devPersoPole.id);
  return (
    <Layout>
      <SecondarySidebar {...sidebarTheme} activePoleId={devPersoPole.id} />
      <div className="main with-padding">
        <PoleContent poleCover={data.file?.childImageSharp?.fluid as ImageSharpFluid} poleProps={devPersoPole} />
        <RecentArticles
          articles={uniqBy(data.allContentfulPost.edges, (article) => article.node.slug)}
          espaceId="learn"
          poleId={devPersoPole.id}
        />
      </div>
    </Layout>
  );
};

export default DevPerso;
