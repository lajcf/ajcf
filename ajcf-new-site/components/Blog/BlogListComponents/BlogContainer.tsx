import { Button } from "antd";
import lodash from "lodash";
import React, { useState } from "react";
import { NUMBER_OF_ARTICLES_TO_DISPLAY_AT_A_TIME } from "../../../lib/constants";
import { ArticlePreviewFragment, BlogCategory, BlogLabel } from "../../../types/types";
import { Layout } from "../../Layout/Layout";
import { ArticlePreview } from "./ArticlePreview";
import styles from "./BlogContainer.module.scss";
import { filterArticles } from "./filterArticles";
import { SelectBlogCategoryOrLabel } from "./SelectBlogCategoryOrLabel";

const limitDisplayedArticles = (filteredArticles: ArticlePreviewFragment[], numberOfArticlesToDisplay: number) => {
  return filteredArticles.slice(0, numberOfArticlesToDisplay);
};

const orderArticles = (articles: ArticlePreviewFragment[]) => {
  return lodash.sortBy(articles, ["optionalDate", "createdAt"]);
};
export const BlogContainer = ({ articles }: { articles: ArticlePreviewFragment[] }) => {
  const [selectedBlogCategoryOrLabel, setSelectedBlogCategoryOrLabel] = useState<BlogCategory | BlogLabel>();
  const [numberOfArticlesToDisplay, setNumberOfArticlesToDisplay] = useState(NUMBER_OF_ARTICLES_TO_DISPLAY_AT_A_TIME);
  const orderedArticles = orderArticles(articles);
  const filteredArticles = filterArticles(orderedArticles, selectedBlogCategoryOrLabel);
  const displayedArticles = limitDisplayedArticles(filteredArticles, numberOfArticlesToDisplay);
  return (
    <Layout>
      <SelectBlogCategoryOrLabel
        selectedBlogCategoryOrLabel={selectedBlogCategoryOrLabel}
        setSelectedBlogCategoryOrLabel={setSelectedBlogCategoryOrLabel}
        articles={articles}
      />
      <section className={styles.articlesPreviewsSection}>
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
    </Layout>
  );
};
