import { uniq, sortBy } from "lodash";
import React, { useState } from "react";
import { NUMBER_OF_ARTICLES_TO_DISPLAY_AT_A_TIME } from "../../../lib/constants";
import {
  ArticlePreviewFragment,
  BlogCategory,
  BlogLabel,
  EventCategory,
  EventLabel,
  EventPreviewFragment,
} from "../../../types/types";
import { Layout } from "../../Layout/Layout";
import { ArticlePreview } from "./ArticlePreview";
import styles from "./BlogContainer.module.scss";
import { SelectorForCategoryOrLabel } from "../../../lib/utils/ItemsPreviewsListComponents/SelectorBlogCategoryOrLabel";

type Item = ArticlePreviewFragment | EventPreviewFragment;
export type Category = BlogCategory | EventCategory;
export type Label = BlogLabel | EventLabel;

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

const filterItems = (items: Item[], selectedCategory?: Category, selectedLabel?: Label) => {
  if (selectedCategory) {
    return items.filter((item) =>
      "blogCategory" in item
        ? item.blogCategory.includes(selectedCategory)
        : item.eventCategory.includes(selectedCategory)
    );
  }
  if (selectedLabel) {
    return items.filter((item) =>
      "blogLabels" in item ? item.blogLabels.includes(selectedLabel) : item.eventLabels.includes(selectedLabel)
    );
  }
  return items;
};
const processItems = (items: Item[], selectedCategory, selectedLabel) => {
  const orderedItems = sortBy(items, ["optionalPublishedDate", "createdAt"]);
  const filteredItems = filterItems(orderedItems, selectedCategory, selectedLabel);
  console.log(filteredItems);
  return items;
};

export const BlogContainer = ({ articles }: { articles: ArticlePreviewFragment[] }) => {
  const [selectedCategory, setSelectedCategory] = useState<Category>();
  const [selectedLabel, setSelectedLabel] = useState<Label>();
  const [numberOfArticlesToDisplay, setNumberOfArticlesToDisplay] = useState(NUMBER_OF_ARTICLES_TO_DISPLAY_AT_A_TIME);

  const itemsToShow = processItems(articles, selectedCategory, selectedLabel);
  console.log(itemsToShow);
  const orderedArticles = orderArticles(articles);
  const filteredArticles = filterArticles(orderedArticles, selectedCategory, selectedLabel);
  const displayedArticles = limitDisplayedArticles(filteredArticles, numberOfArticlesToDisplay);

  const resetFilters = () => {
    setSelectedCategory(undefined);
    setSelectedLabel(undefined);
  };

  const handleSelectedCategory = (category: Category) => {
    resetFilters();
    setSelectedCategory(category);
  };

  const handleSelectedLabel = (label: Label) => {
    resetFilters();
    setSelectedLabel(label);
  };

  return (
    <Layout>
      <SelectorForCategoryOrLabel
        selectedLabel={selectedLabel}
        selectedCategory={selectedCategory}
        handleSelectedLabel={handleSelectedLabel}
        handleSelectedCategory={handleSelectedCategory}
        categoriesToShow={Object.values(BlogCategory)}
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
