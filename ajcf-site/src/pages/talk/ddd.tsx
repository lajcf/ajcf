import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import { uniqBy } from "lodash";
import Layout from "../../components/Shared/Layout";
import { SecondarySidebar } from "../../components/Shared/SecondarySidebar/SecondarySidebar";
import { PoleContent } from "../../components/EspaceComponents/PoleComponents/PoleContent";
import { RecentArticles } from "../../components/EspaceComponents/PoleComponents/RecentArticles";
import { DddPageQueryQuery, ImageSharpFluid } from "../../generated/types";
import { generateSidebarTheme } from "../../components/Shared/utils/generateSidebarTheme";
import { dddPole } from "../../assets/poles/talkPoles";

const Ddd = () => {
  const data = useStaticQuery<DddPageQueryQuery>(graphql`
    query dddPageQuery {
      site {
        siteMetadata {
          title
        }
      }
      file(relativePath: { eq: "ddd.jpeg" }) {
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
      allContentfulPost(filter: { pole: { eq: "ddd" } }) {
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
  const sidebarTheme = generateSidebarTheme(dddPole.id);
  return (
    <Layout>
      <SecondarySidebar {...sidebarTheme} activePoleId={dddPole.id} />
      <div className="main with-padding">
        <PoleContent poleCover={data.file?.childImageSharp?.fluid as ImageSharpFluid} poleProps={dddPole} />
        <RecentArticles
          articles={uniqBy(data.allContentfulPost.edges, (article) => article.node.slug)}
          espaceId="talk"
          poleId={dddPole.id}
        />
      </div>
    </Layout>
  );
};

export default Ddd;
