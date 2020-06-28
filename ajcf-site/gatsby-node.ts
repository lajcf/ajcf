import { GatsbyNode } from "gatsby";
import graphql from "graphql-tag";
import * as path from "path";
import { print } from "graphql/language/printer";
import { ContentfulPole, ContentfulPost, ContentfulEspace } from "./src/generated/types";

const schema = graphql`
  query allContentfulPosts {
    allContentfulEspace {
      edges {
        node {
          espaceId
          frenchTitle
          chineseTitle
        }
      }
    }
    allContentfulPole {
      edges {
        node {
          poleId
          espace {
            espaceId
          }
          cover {
            fluid {
              src
            }
          }
        }
      }
    }
    allContentfulPost {
      edges {
        node {
          title
          author
          slug
          pole {
            poleId
            espace {
              espaceId
            }
          }
          content {
            childContentfulRichText {
              html
            }
          }
          image {
            title
            fluid {
              src
            }
          }
        }
      }
    }
  }
`;

export const createPages: GatsbyNode["createPages"] = async ({ graphql: graphqlQuery, actions }) => {
  const { createPage } = actions;
  const postComponent = path.resolve(`./src/templates/Post.tsx`);
  const poleComponent = path.resolve(`./src/templates/Pole.tsx`);
  const espaceComponent = path.resolve(`./src/templates/Espace.tsx`);
  const result = await graphqlQuery<any>(print(schema));
  if (result.errors) {
    throw result.errors;
  }
  const posts = result?.data?.allContentfulPost?.edges || [];
  const poles = result?.data?.allContentfulPole?.edges || [];
  const espaces = result?.data?.allContentfulEspace?.edges || [];
  posts.forEach((post: { node: ContentfulPost }) => {
    createPage({
      path: `${post.node.pole?.espace?.espaceId}/${post.node.pole?.poleId}/${post.node.slug}`,
      component: postComponent,
      context: {
        slug: post.node.slug,
        poleId: post.node.pole?.poleId,
        espaceId: post.node.pole?.espace?.espaceId,
      },
    });
  });
  poles.forEach((pole: { node: ContentfulPole }) => {
    createPage({
      path: `${pole.node.espace?.espaceId}/${pole.node.poleId}`,
      component: poleComponent,
      context: {
        poleId: pole.node.poleId,
        espaceId: pole.node.espace?.espaceId,
      },
    });
  });
  espaces.forEach((espace: { node: ContentfulEspace }) => {
    createPage({
      path: `${espace.node.espaceId}`,
      component: espaceComponent,
      context: {
        espaceId: espace.node.espaceId,
      },
    });
  });
};
