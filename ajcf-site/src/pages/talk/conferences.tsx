import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import { uniqBy } from "lodash";
import Layout from "../../components/Shared/Layout";
import { SecondarySidebar } from "../../components/Shared/SecondarySidebar/SecondarySidebar";
import { PoleContent } from "../../components/EspaceComponents/PoleComponents/PoleContent";
import { RecentArticles } from "../../components/EspaceComponents/PoleComponents/RecentArticles";
import { ConferencesPageQueryQuery, ImageSharpFluid, ContentfulPost } from "../../generated/types";
import { generateSidebarTheme } from "../../components/Shared/utils/generateSidebarTheme";
import { conferencesPole } from "../../assets/poles/talkPoles";

const Conferences = () => {
  const data = useStaticQuery<ConferencesPageQueryQuery>(graphql`
    query conferencesPageQuery {
      site {
        siteMetadata {
          title
        }
      }
      file(relativePath: { eq: "conferences.jpg" }) {
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
      allContentfulPost(filter: { pole: { eq: "conferences" } }) {
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
  const sidebarTheme = generateSidebarTheme(conferencesPole.id);
  return (
    <Layout>
      <SecondarySidebar {...sidebarTheme} activePoleId={conferencesPole.id} />
      <div className="main with-padding">
        <PoleContent poleCover={data.file?.childImageSharp?.fluid as ImageSharpFluid} poleProps={conferencesPole} />
        <RecentArticles
          articles={uniqBy(data.allContentfulPost.edges, (article) => article.node.slug)}
          espaceId="talk"
          poleId={conferencesPole.id}
        />
      </div>
    </Layout>
  );
};

export default Conferences;
