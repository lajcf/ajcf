import { uniq } from "lodash";
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
import { processItems } from "../../../lib/utils/ItemsPreviewsListComponents/ProcessItems";

type Item = ArticlePreviewFragment | EventPreviewFragment;
export type Category = BlogCategory | EventCategory;
export type Label = BlogLabel | EventLabel;

const selectUsedLabels = (articles: ArticlePreviewFragment[]) =>
  uniq(articles.flatMap((article) => article.blogLabels));

export const BlogContainer = ({ articles }: { articles: ArticlePreviewFragment[] }) => {
  const [selectedCategory, setSelectedCategory] = useState<Category>();
  const [selectedLabel, setSelectedLabel] = useState<Label>();
  const [numberOfArticlesToDisplay, setNumberOfArticlesToDisplay] = useState(NUMBER_OF_ARTICLES_TO_DISPLAY_AT_A_TIME);

  const itemsToShow = processItems(articles, NUMBER_OF_ARTICLES_TO_DISPLAY_AT_A_TIME, selectedCategory, selectedLabel);

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
        {itemsToShow.map((item) => (
          <ArticlePreview key={item.id} article={item as ArticlePreviewFragment} />
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
