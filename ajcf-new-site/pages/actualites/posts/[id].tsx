import React from "react";
import { GetStaticPaths, GetStaticProps } from "next";
import { graphqlRequest } from "../../../lib/graphql/graphqlClient";
import { PostQueryDocument, PostsMetadataQueryDocument } from "../../../types/types";
import { Layout } from "../../../components/Layout/Layout";

export default function Post() {
  return <Layout>HOHOH</Layout>;
}

export const getStaticPaths: GetStaticPaths = async () => {
  const posts = await graphqlRequest(PostsMetadataQueryDocument);
  console.log("HAHAHA");
  console.log(posts);
  return {
    paths: posts.posts.map((post) => ({ params: { id: post.id } })) || [],
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps<any, { id: string }> = async ({ params }) => {
  const postData = await graphqlRequest(PostQueryDocument, { id: params?.id || "" });
  console.log(postData);
  return {
    props: {
      postData,
    },
  };
};
