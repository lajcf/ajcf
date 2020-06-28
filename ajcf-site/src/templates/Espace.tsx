import React from "react";
import { uniqBy } from "lodash";
import { graphql } from "gatsby";
import { EspaceByIdQuery } from "../generated/types";
import Layout from "../components/Shared/Components/Layout";
import { SecondarySidebar } from "../components/Shared/SecondarySidebar/SecondarySidebar";
import { EspaceId } from "../assets/poles/constants";
import { generateSidebarTheme } from "../components/Shared/utils/generateSidebarTheme";
import { EspaceContent } from "../components/EspaceComponents/EspaceContent";

interface EspaceProps {
  data: EspaceByIdQuery;
}

const Espace = ({ data }: EspaceProps) => {
  const theme = generateSidebarTheme(data.contentfulEspace?.espaceId as EspaceId);
  const poles = uniqBy(
    data.allContentfulPole.edges.map((edge) => edge.node),
    (pole) => pole.poleId
  );
  return (
    <Layout>
      <SecondarySidebar
        espaceId={data.contentfulEspace?.espaceId as EspaceId}
        pageTheme={theme}
        poles={poles}
        pageFrenchTitle={data.contentfulEspace?.frenchTitle || ""}
        pageChineseTitle={data.contentfulEspace?.chineseTitle || ""}
      />
      <EspaceContent poles={poles} pageTheme={theme} numberOfPoles={3} />
    </Layout>
  );
};

export default Espace;

export const query = graphql`
  query espaceById($espaceId: String!) {
    site {
      siteMetadata {
        title
      }
    }
    contentfulEspace(espaceId: { eq: $espaceId }) {
      espaceId
      frenchTitle
      chineseTitle
    }
    allContentfulPole(filter: { espace: { espaceId: { eq: $espaceId } } }) {
      edges {
        node {
          ...ContentfulPoleFragment
        }
      }
    }
  }
`;
