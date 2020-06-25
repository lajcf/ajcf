import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import { uniqBy } from "lodash";
import Layout from "../../components/Shared/Layout";
import { SecondarySidebar } from "../../components/Shared/SecondarySidebar/SecondarySidebar";
import { PoleContent } from "../../components/EspaceComponents/PoleComponents/PoleContent";
import { RecentArticles } from "../../components/EspaceComponents/PoleComponents/RecentArticles";
import { EchangeLinguistiquePageQueryQuery, ImageSharpFluid } from "../../generated/types";
import { generateSidebarTheme } from "../../components/Shared/utils/generateSidebarTheme";
import { conferencesPole } from "../../assets/poles/talkPoles";
import { devPersoPole, echangeLinguistiquePole } from "../../assets/poles/learnPoles";

const EchangeLinguistique = () => {
  const data = useStaticQuery<EchangeLinguistiquePageQueryQuery>(graphql`
    query echangeLinguistiquePageQuery {
      site {
        siteMetadata {
          title
        }
      }
      file(relativePath: { eq: "echange-linguistique.jpg" }) {
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
      allContentfulPost(filter: { pole: { eq: "echange-linguistique" } }) {
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
  const sidebarTheme = generateSidebarTheme(echangeLinguistiquePole.id);
  return (
    <Layout>
      <SecondarySidebar {...sidebarTheme} activePoleId={echangeLinguistiquePole.id} />
      <div className="main with-padding">
        <PoleContent
          poleCover={data.file?.childImageSharp?.fluid as ImageSharpFluid}
          poleProps={echangeLinguistiquePole}
        />
        <RecentArticles
          articles={uniqBy(data.allContentfulPost.edges, (article) => article.node.slug)}
          espaceId="learn"
          poleId={echangeLinguistiquePole.id}
        />
      </div>
    </Layout>
  );
};

export default EchangeLinguistique;
