import React from "react";
import { uniqBy } from "lodash";
import { graphql } from "gatsby";
import Img from "gatsby-image";
import { css } from "@emotion/core";
import { PostBySlugQuery } from "../generated/types";
import Layout from "../components/Shared/Components/Layout";
import { generateSidebarTheme } from "../components/Shared/utils/generateSidebarTheme";
import { SecondarySidebar } from "../components/Shared/SecondarySidebar/SecondarySidebar";
import { EspaceId, PoleId } from "../assets/poles/constants";

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
  const theme = generateSidebarTheme(data.contentfulPost?.pole?.espace?.espaceId as EspaceId);
  const poles = uniqBy(
    data.allContentfulPole.edges.map((edge) => edge.node),
    (pole) => pole.poleId
  );
  console.log(data.contentfulPost);
  return (
    <Layout>
      <SecondarySidebar
        espaceId={data.contentfulPost?.pole?.espace?.espaceId as EspaceId}
        pageTheme={theme}
        poles={poles}
        pageFrenchTitle={data.contentfulPost?.pole?.espace?.frenchTitle || ""}
        pageChineseTitle={data.contentfulPost?.pole?.espace?.chineseTitle || ""}
        activePoleId={data.contentfulPost?.pole?.poleId as PoleId}
      />
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
  query postBySlug($slug: String!, $espaceId: String!) {
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
    contentfulPost(slug: { eq: $slug }) {
      ...ContentfulPostFragment
    }
  }
`;
