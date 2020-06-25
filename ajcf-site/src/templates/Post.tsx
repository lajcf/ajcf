import React from "react";
import { graphql } from "gatsby";
import Img from "gatsby-image";
import { PostBySlugQuery } from "../generated/types";
import Layout from "../components/Shared/Layout";
import { generateSidebarTheme } from "../components/Shared/utils/generateSidebarTheme";
import { SecondarySidebar } from "../components/Shared/SecondarySidebar/SecondarySidebar";
import { css } from "@emotion/core";
import { PoleId } from "../assets/poles/constants";

interface PostProps {
  data: PostBySlugQuery;
}

const imageStyle = css`
  margin-top: 1em;
`;

const titleStyle = css`
  padding-bottom: 1em;
  border-bottom: 1px solid #ddd;
`;

const Post: React.FC<PostProps> = ({ data }) => {
  const sidebarTheme = generateSidebarTheme(data.contentfulPost?.pole as PoleId);
  return (
    <Layout>
      <SecondarySidebar {...sidebarTheme} activePoleId={data.contentfulPost?.pole as PoleId} />
      <div className="main with-padding">
        <Img
          css={imageStyle}
          alt=""
          fluid={
            data.contentfulPost?.image?.length &&
            data.contentfulPost?.image?.length > 0 &&
            data.contentfulPost?.image[0]?.fluid
          }
        />
        <h1 css={titleStyle}>{data?.contentfulPost?.title}</h1>
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
