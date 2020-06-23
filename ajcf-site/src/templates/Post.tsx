import React from "react";
import { graphql } from "gatsby";
import Img from "gatsby-image";
import { PostBySlugQuery } from "../generated/types";
import Layout from "../components/Shared/Layout";
import { generateSidebarTheme } from "../components/Shared/utils/generateSidebarTheme";
import { SecondarySidebar } from "../components/Shared/SecondarySidebar/SecondarySidebar";

interface PostProps {
  data: PostBySlugQuery;
}

const Post: React.FC<PostProps> = ({ data }) => {
  const sidebarTheme = generateSidebarTheme(data.contentfulPost?.pole);
  return (
    <Layout>
      <SecondarySidebar {...sidebarTheme} />
      <div className="main">
        <Img
          alt=""
          fluid={
            data.contentfulPost?.image?.length &&
            data.contentfulPost?.image?.length > 0 &&
            data.contentfulPost?.image[0]?.fluid
          }
        />
        <div>{data?.contentfulPost?.title}</div>
        <div
          dangerouslySetInnerHTML={{
            __html: data.contentfulPost?.content?.childContentfulRichText?.html || "",
          }}
        />
      </div>
    </Layout>
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
      pole
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
`;
