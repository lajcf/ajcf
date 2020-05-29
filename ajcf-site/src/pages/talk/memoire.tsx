import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import Layout from "../../components/Shared/Layout";
import { SecondarySidebar } from "../../components/Shared/SecondarySidebar/SecondarySidebar";
import { talkTheme } from "../../assets/poles/pageThemes";
import { talkPageChineseTitle, talkPageFrenchTitle, talkPoles } from "../../assets/poles/talkPoles";
import { MemoryPageQueryQuery } from "../../../gatsby-graphql";
import { PoleContent } from "../../components/EspacePages/PolePages/PoleContent";

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
      contentfulPost(pole: { eq: "memoire" }) {
        title
        author
        content {
          childContentfulRichText {
            html
          }
        }
      }
    }
  `);
  return (
    <Layout>
      <SecondarySidebar
        sectionName="talk"
        pageTheme={talkTheme}
        poles={talkPoles}
        pageFrenchTitle={talkPageFrenchTitle}
        pageChineseTitle={talkPageChineseTitle}
      />
      <PoleContent poleCover={data.file?.childImageSharp?.fluid} />
    </Layout>
  );
};

export default Memoire;
