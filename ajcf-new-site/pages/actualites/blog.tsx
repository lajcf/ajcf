import React from "react";
import { Layout } from "../../components/Layout/Layout";
import Link from "next/link";

export default () => {
  return (
    <Layout>
      <div>Blog</div>
      <Link href="posts/ckhj9xnsg6n6r0a53giltqunt">
        <a>Test article</a>
      </Link>
    </Layout>
  );
};
