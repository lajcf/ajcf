import React from "react";
import { graphql } from "gatsby";
import { uniqBy } from "lodash";
import { ImageSharpFluid, PoleByIdQuery } from "../generated/types";
import Layout from "../components/Shared/Components/Layout";
import { generateSidebarTheme } from "../components/Shared/utils/generateSidebarTheme";
import { SecondarySidebar } from "../components/Shared/SecondarySidebar/SecondarySidebar";
import { EspaceId, PoleId } from "../assets/poles/constants";
import { PoleContent } from "../components/PoleComponents/PoleContent";
import { RecentArticles } from "../components/PoleComponents/RecentArticles";

interface PoleProps {
  data: PoleByIdQuery;
}

const Pole = ({ data }: PoleProps) => {
  const theme = generateSidebarTheme(data.contentfulPole?.espace?.espaceId as EspaceId);
  const poles = uniqBy(
    data.allContentfulPole.edges.map((edge) => edge.node),
    (pole) => pole.poleId
  );
  return (
    <Layout>
      <SecondarySidebar
        activePoleId={data.contentfulPole?.poleId as PoleId}
        espaceId={data.contentfulPole?.espace?.espaceId as EspaceId}
        pageTheme={theme}
        poles={poles}
        pageFrenchTitle={data.contentfulPole?.espace?.frenchTitle || ""}
        pageChineseTitle={data.contentfulPole?.espace?.chineseTitle || ""}
      />
      <div className="main with-padding">
        <PoleContent poleCover={data.contentfulPole?.cover?.fluid as ImageSharpFluid} poleProps={data.contentfulPole} />
        <RecentArticles
          articles={uniqBy(data.allContentfulPost.edges, (article) => article.node.slug)}
          pole={data.contentfulPole}
        />
      </div>
    </Layout>
  );
};

export default Pole;

export const query = graphql`
  query poleById($poleId: String, $espaceId: String) {
    site {
      siteMetadata {
        title
      }
    }
    allContentfulPole(filter: { espace: { espaceId: { eq: $espaceId } } }) {
      edges {
        node {
          ...ContentfulPoleFragment
        }
      }
    }
    contentfulPole(poleId: { eq: $poleId }) {
      ...ContentfulPoleFragment
    }
    allContentfulPost(filter: { pole: { poleId: { eq: $poleId } } }) {
      edges {
        node {
          ...ContentfulPostFragment
        }
      }
    }
  }
`;
