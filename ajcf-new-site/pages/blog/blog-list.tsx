import { GetStaticProps } from "next";
import React from "react";
import { graphqlClient } from "../../lib/graphql/graphqlClient";
import { Article } from "../../types/types";
import styles from "../../components/Blog/BlogListComponents/BlogList.module.scss";
import { Layout } from "../../components/Layout/Layout";
import { ArticlePreview } from "../../components/Blog/BlogListComponents/ArticlePreview";

export default function BlogList({ articles }: { articles: Article[] }) {
  return (
    <Layout>
      <main className={styles.blogList}>
        <h1>Blog</h1>
        <section className={styles.articlesPreviews}>
          {articles.map((article) => (
            <ArticlePreview key={article.id} article={article} />
          ))}
        </section>
      </main>
    </Layout>
  );
}

export const getStaticProps: GetStaticProps<any> = async () => {
  const articlesResult = await graphqlClient.ArticlesQuery();
  return {
    props: {
      articles: articlesResult.articles,
    },
  };
};
