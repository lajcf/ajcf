import React, { useState } from "react";
import { Button } from "antd";
import { ArticlePreviewFragment, BlogLabel } from "../../../types/types";
import styles from "./BlogContainer.module.scss";
import { Layout } from "../../Layout/Layout";
import { ArticlePreview } from "./ArticlePreview";
import { SelectBlogLabels } from "./SelectBlogLabels";

const filterArticles = (articles: ArticlePreviewFragment[], selectedBlogLabel?: BlogLabel) => {
  if (!selectedBlogLabel) {
    return articles;
  }
  return articles.filter((article) => article.blogLabels.includes(selectedBlogLabel));
};

const limitDisplayedArticles = (filteredArticles: ArticlePreviewFragment[], displayBuffer: number) => {
  return filteredArticles.slice(0, displayBuffer);
};

export const BlogContainer = ({ articles }: { articles: ArticlePreviewFragment[] }) => {
  const [selectedBlogLabel, setSelectedBlogLabel] = useState<BlogLabel>();
  const [numberOfArticlesToDisplay, setNumberOfArticlesToDisplay] = useState(1);
  const filteredArticles = filterArticles(articles, selectedBlogLabel);
  const displayedArticles = limitDisplayedArticles(filteredArticles, numberOfArticlesToDisplay);
  return (
    <Layout>
      <main className={styles.blogContainer}>
        <h1>Blog</h1>
        <section className={styles.articlesPreviews}>
          <SelectBlogLabels setSelectedBlogLabel={setSelectedBlogLabel} />
          {displayedArticles.map((article) => (
            <ArticlePreview key={article.id} article={article} />
          ))}
          <Button
            type="primary"
            className={styles.loadMoreButton}
            onClick={() => setNumberOfArticlesToDisplay(numberOfArticlesToDisplay + 1)}
          >
            Voir plus d'articles
          </Button>
        </section>
      </main>
    </Layout>
  );
};
