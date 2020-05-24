import React from "react";
import { graphql } from "gatsby";
import { PostBySlugQuery } from "../../gatsby-graphql";

interface PostProps {
  data: PostBySlugQuery;
}

const Post: React.FC<PostProps> = ({ data }) => {
  console.log(data);
  return (
    <div>
      <div>{data?.contentfulPost?.title}</div>
      <div
        dangerouslySetInnerHTML={{
          __html: data.contentfulPost?.content?.childContentfulRichText?.html || "",
        }}
      />
    </div>
  );
};

export default Post;

export const query = graphql`
  query postBySlug($slug: String!) {
    site {
      siteMetadata {
        title
      }
    }
    contentfulPost(slug: { eq: $slug }) {
      title
      author
      content {
        childContentfulRichText {
          html
        }
      }
    }
  }
`;
