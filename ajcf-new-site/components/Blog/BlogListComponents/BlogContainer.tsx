import { Button } from "antd";
import React, { useState } from "react";
import { ArticlePreviewFragment, BlogLabel } from "../../../types/types";
import { Layout } from "../../Layout/Layout";
import { ArticlePreview } from "./ArticlePreview";
import styles from "./BlogContainer.module.scss";
import { SelectBlogLabels } from "./SelectBlogLabels";

const filterArticles = (articles: ArticlePreviewFragment[], selectedBlogLabel?: BlogLabel) => {
  if (!selectedBlogLabel) {
    return articles;
  }
  return articles.filter((article) => article.blogLabels.includes(selectedBlogLabel));
};

const limitDisplayedArticles = (filteredArticles: ArticlePreviewFragment[], numberOfArticlesToDisplay: number) => {
  return filteredArticles.slice(0, numberOfArticlesToDisplay);
};

export const BlogContainer = ({ articles }: { articles: ArticlePreviewFragment[] }) => {
  const [selectedBlogLabel, setSelectedBlogLabel] = useState<BlogLabel>();
  const [numberOfArticlesToDisplay, setNumberOfArticlesToDisplay] = useState(3);
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
            onClick={() => setNumberOfArticlesToDisplay(numberOfArticlesToDisplay + 3)}
          >
            Voir plus d'articles
          </Button>
        </section>
      </main>
    </Layout>
  );
};
