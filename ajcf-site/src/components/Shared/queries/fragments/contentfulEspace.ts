import { graphql } from "gatsby";

export const contentfulEspaceFragment = graphql`
  fragment ContentfulEspaceFragment on ContentfulEspace {
    espaceId
    frenchTitle
    chineseTitle
  }
`;
