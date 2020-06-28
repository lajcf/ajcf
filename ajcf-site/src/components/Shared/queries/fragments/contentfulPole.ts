import { graphql } from "gatsby";

export const contentfulPoleFragment = graphql`
  fragment ContentfulPoleFragment on ContentfulPole {
    poleId
    title
    slug
    description {
      childContentfulRichText {
        html
      }
    }
    espace {
      ...ContentfulEspaceFragment
    }
    cover {
      fluid(maxWidth: 3000, quality: 100) {
        base64
        aspectRatio
        src
        srcSet
        sizes
      }
    }
  }
`;
