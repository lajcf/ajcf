import React, { useState } from "react";
import { ArticleFragment, BlogLabel } from "../../../types/types";
import styles from "./BlogContainer.module.scss";
import { Layout } from "../../Layout/Layout";
import { ArticlePreview } from "./ArticlePreview";
import { SelectBlogLabels } from "./SelectBlogLabels";

const filterArticles = (articles: ArticleFragment[], selectedBlogLabel?: BlogLabel) => {
  if (!selectedBlogLabel) {
    return articles;
  }
  return articles.filter((article) => article.blogLabels.includes(selectedBlogLabel));
};

export const BlogContainer = ({ articles }: { articles: ArticleFragment[] }) => {
  const [selectedBlogLabel, setSelectedBlogLabel] = useState<BlogLabel>();
  const filteredArticles = filterArticles(articles, selectedBlogLabel);
  console.log(selectedBlogLabel);
  console.log(JSON.stringify(articles, null, 2));
  return (
    <Layout>
      <main className={styles.blogContainer}>
        <h1>Blog</h1>
        <section className={styles.articlesPreviews}>
          <SelectBlogLabels setSelectedBlogLabel={setSelectedBlogLabel} />
          {filteredArticles.map((article) => (
            <ArticlePreview key={article.id} article={article} />
          ))}
        </section>
      </main>
    </Layout>
  );
};
