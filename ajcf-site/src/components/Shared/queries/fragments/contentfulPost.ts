import { graphql } from "gatsby";

export const contentfulPostFragment = graphql`
  fragment ContentfulPostFragment on ContentfulPost {
    title
    author
    slug
    createdAt
    date
    pole {
      poleId
      espace {
        ...ContentfulEspaceFragment
      }
    }
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
`;
