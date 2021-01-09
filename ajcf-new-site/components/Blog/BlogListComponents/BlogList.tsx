import React, { useState } from "react";
import { Article, BlogLabel, __EnumValue } from "../../../types/types";
import styles from "./BlogList.module.scss";
import { Layout } from "../../Layout/Layout";
import { ArticlePreview } from "./ArticlePreview";
import { SelectBlogLabels } from "./SelectBlogLabels";

const filterArticles = (articles: Article[], selectedBlogLabel?: BlogLabel) => {
  if (selectedBlogLabel === undefined) {
    return articles;
  }
  return articles.filter((article) => article.blogLabels.includes(selectedBlogLabel));
};

export const BlogList = ({ articles, blogLabels }: { articles: Article[]; blogLabels: __EnumValue[] }) => {
  const [selectedBlogLabel, setSelectedBlogLabel] = useState(undefined);
  const filteredArticles = filterArticles(articles, selectedBlogLabel);
  return (
    <Layout>
      <main className={styles.blogList}>
        <h1>Blog</h1>
        <section className={styles.articlesPreviews}>
          <SelectBlogLabels blogLabels={blogLabels} setSelectedBlogLabel={setSelectedBlogLabel} />
          {filteredArticles.map((article) => (
            <ArticlePreview key={article.id} article={article} />
          ))}
        </section>
      </main>
    </Layout>
  );
};
