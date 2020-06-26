import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import { uniqBy } from "lodash";
import Layout from "../../components/Shared/Layout";
import { SecondarySidebar } from "../../components/Shared/SecondarySidebar/SecondarySidebar";
import { PoleContent } from "../../components/EspaceComponents/PoleComponents/PoleContent";
import { RecentArticles } from "../../components/EspaceComponents/PoleComponents/RecentArticles";
import { RencontreMensuellePageQueryQuery, ImageSharpFluid } from "../../generated/types";
import { generateSidebarTheme } from "../../components/Shared/utils/generateSidebarTheme";
import { clubProPole, rencontreMensuellePole } from "../../assets/poles/meetPoles";

const DevPerso = () => {
  const data = useStaticQuery<RencontreMensuellePageQueryQuery>(graphql`
    query rencontreMensuellePageQuery {
      site {
        siteMetadata {
          title
        }
      }
      file(relativePath: { eq: "covers/cover-rencontre-mensuelle.jpg" }) {
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
      allContentfulPost(filter: { pole: { eq: "rencontre-mensuelle" } }) {
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
  const sidebarTheme = generateSidebarTheme(rencontreMensuellePole.id);
  return (
    <Layout>
      <SecondarySidebar {...sidebarTheme} activePoleId={rencontreMensuellePole.id} />
      <div className="main with-padding">
        <PoleContent
          poleCover={data.file?.childImageSharp?.fluid as ImageSharpFluid}
          poleProps={rencontreMensuellePole}
        />
        <RecentArticles articles={uniqBy(data.allContentfulPost.edges, (article) => article.node.slug)} />
      </div>
    </Layout>
  );
};

export default DevPerso;
