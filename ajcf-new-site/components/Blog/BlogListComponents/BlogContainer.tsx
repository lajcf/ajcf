import { Button } from "antd";
import React, { useState } from "react";
import { NUMBER_OF_ARTICLES_TO_DISPLAY_AT_A_TIME } from "../../../lib/constants";
import { ArticlePreviewFragment, BlogCategory, BlogLabel } from "../../../types/types";
import { Layout } from "../../Layout/Layout";
import { ArticlePreview } from "./ArticlePreview";
import styles from "./BlogContainer.module.scss";
import { SelectBlogCategoryOrLabel } from "./SelectBlogCategoryOrLabel";

const filterArticles = (articles: ArticlePreviewFragment[], selectedBlogCategoryOrLabel?: BlogCategory | BlogLabel) => {
  if (!selectedBlogCategoryOrLabel) {
    return articles;
  }
  if (Object.values(BlogCategory).includes(selectedBlogCategoryOrLabel as BlogCategory)) {
    return articles.filter((article) => article.blogCategory.includes(selectedBlogCategoryOrLabel));
  }
  return articles.filter((article) => article.blogLabels.includes(selectedBlogCategoryOrLabel as BlogLabel));
};

const limitDisplayedArticles = (filteredArticles: ArticlePreviewFragment[], numberOfArticlesToDisplay: number) => {
  return filteredArticles.slice(0, numberOfArticlesToDisplay);
};

export const BlogContainer = ({ articles }: { articles: ArticlePreviewFragment[] }) => {
  const [selectedBlogCategoryOrLabel, setSelectedBlogCategoryOrLabel] = useState<BlogCategory | BlogLabel>();
  const [numberOfArticlesToDisplay, setNumberOfArticlesToDisplay] = useState(NUMBER_OF_ARTICLES_TO_DISPLAY_AT_A_TIME);
  const filteredArticles = filterArticles(articles, selectedBlogCategoryOrLabel);
  const displayedArticles = limitDisplayedArticles(filteredArticles, numberOfArticlesToDisplay);
  return (
    <Layout>
      <main className={styles.blogContainer}>
        <h1>Blog</h1>
        <section className={styles.articlesPreviews}>
          <SelectBlogCategoryOrLabel setSelectedBlogCategoryOrLabel={setSelectedBlogCategoryOrLabel} />
          {displayedArticles.map((article) => (
            <ArticlePreview key={article.id} article={article} />
          ))}
          <Button
            type="primary"
            className={styles.loadMoreButton}
            onClick={() =>
              setNumberOfArticlesToDisplay(numberOfArticlesToDisplay + NUMBER_OF_ARTICLES_TO_DISPLAY_AT_A_TIME)
            }
          >
            Voir plus d'articles
          </Button>
        </section>
      </main>
    </Layout>
  );
};
