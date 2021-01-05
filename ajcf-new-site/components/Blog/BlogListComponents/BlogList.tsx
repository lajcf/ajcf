import React from "react";
import { Article } from "../../../types/types";
import styles from "./BlogList.module.scss";
import { Layout } from "../../Layout/Layout";
import { ArticlePreview } from "./ArticlePreview";

export const BlogList = ({ articles }: { articles: Article[] }) => {
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
};
