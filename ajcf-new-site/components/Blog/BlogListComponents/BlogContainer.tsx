import { uniq, sortBy } from "lodash";
import React, { useState } from "react";
import { NUMBER_OF_ARTICLES_TO_DISPLAY_AT_A_TIME } from "../../../lib/constants";
import { ArticlePreviewFragment, BlogCategory, BlogLabel } from "../../../types/types";
import { Layout } from "../../Layout/Layout";
import { ArticlePreview } from "./ArticlePreview";
import styles from "./BlogContainer.module.scss";
import { CategoryLabelSelector } from "./SelectorBlogCategoryOrLabel";

const limitDisplayedArticles = (filteredArticles: ArticlePreviewFragment[], numberOfArticlesToDisplay: number) => {
  return filteredArticles.slice(0, numberOfArticlesToDisplay);
};

const orderArticles = (articles: ArticlePreviewFragment[]) => {
  return sortBy(articles, ["optionalPublishedDate", "createdAt"]);
};

const filterArticles = (
  articles: ArticlePreviewFragment[],
  selectedCategory?: BlogCategory,
  selectedLabel?: BlogLabel
) => {
  if (selectedCategory) {
    return articles.filter((article) => article.blogCategory.includes(selectedCategory));
  }
  if (selectedLabel) {
    return articles.filter((article) => article.blogLabels.includes(selectedLabel));
  }
  return articles;
};

const selectUsedLabels = (articles: ArticlePreviewFragment[]) =>
  uniq(articles.flatMap((article) => article.blogLabels));

export const BlogContainer = ({ articles }: { articles: ArticlePreviewFragment[] }) => {
  const [selectedCategory, setSelectedCategory] = useState<BlogCategory>();
  const [selectedLabel, setSelectedLabel] = useState<BlogLabel>();
  const [numberOfArticlesToDisplay, setNumberOfArticlesToDisplay] = useState(NUMBER_OF_ARTICLES_TO_DISPLAY_AT_A_TIME);

  const orderedArticles = orderArticles(articles);
  const filteredArticles = filterArticles(orderedArticles, selectedCategory, selectedLabel);
  const displayedArticles = limitDisplayedArticles(filteredArticles, numberOfArticlesToDisplay);

  const resetFilters = () => {
    setSelectedCategory(undefined);
    setSelectedLabel(undefined);
  };

  const handleSelectCategory = (category: BlogCategory) => {
    resetFilters();
    setSelectedCategory(category);
  };

  const handleSelectLabel = (label: BlogLabel) => {
    resetFilters();
    setSelectedLabel(label);
  };

  return (
    <Layout>
      <CategoryLabelSelector
        selectedLabel={selectedLabel}
        selectedCategory={selectedCategory}
        handleSelectLabel={handleSelectLabel}
        handleSelectCategory={handleSelectCategory}
        labelsToShow={selectUsedLabels(articles)}
        resetFilters={resetFilters}
      />
      <section className={styles.articlesPreviewsSection}>
        {displayedArticles.map((article) => (
          <ArticlePreview key={article.id} article={article} />
        ))}
        <button
          type="button"
          className={styles.loadMoreButton}
          onClick={() =>
            setNumberOfArticlesToDisplay(numberOfArticlesToDisplay + NUMBER_OF_ARTICLES_TO_DISPLAY_AT_A_TIME)
          }
        >
          Voir plus d'articles
        </button>
      </section>
    </Layout>
  );
};
