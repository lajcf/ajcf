import React from "react";
import { GetStaticPaths, GetStaticProps } from "next";
import { graphqlClient } from "../../../lib/graphql/graphqlClient";
import { Layout } from "../../../components/Layout/Layout";

export default function Post() {
  return <Layout>HOHOH</Layout>;
}

export const getStaticPaths: GetStaticPaths = async () => {
  const posts = await graphqlClient.postsMetadataQuery();
  return {
    paths: posts.posts.map((post) => ({ params: { id: post.id } })) || [],
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps<any, { id: string }> = async ({ params }) => {
  const postData = await graphqlClient.postQuery({ id: params?.id || "" });
  return {
    props: {
      postData,
    },
  };
};
