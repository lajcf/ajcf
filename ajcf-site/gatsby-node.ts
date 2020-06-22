import { GatsbyNode } from "gatsby";
import graphql from "graphql-tag";
import * as path from "path";
import { print } from "graphql/language/printer";

const schema = graphql`
  query allContentfulPosts {
    allContentfulPost {
      edges {
        node {
          title
          author
          slug
          pole
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
  const result = await graphqlQuery<any>(print(schema));
  if (result.errors) {
    throw result.errors;
  }
  const posts = result?.data?.allContentfulPost?.edges || [];
  posts.forEach((post: any) => {
    createPage({
      path: `talk/${post.node.pole}/${post.node.slug}`,
      component: postComponent,
      context: {
        slug: post.node.slug,
        pole: post.node.pole,
      },
    });
  });
};
