import React, { useState } from "react";
import { BlogCategory, BlogLabel } from "../../../types/types";
import styles from "./BlogContainer.module.scss";

type SelectorForBlogCategoryOrLabelProps = {
  selectedCategory?: BlogCategory;
  handleSelectCategory: (category: BlogCategory) => void;
  selectedLabel?: BlogLabel;
  handleSelectLabel: (label: BlogLabel) => void;
  labelsToShow: BlogLabel[];
  resetFilters: () => void;
};

const CategorySelector = ({
  blogCategory,
  selectedCategory,
  handleSelectCategory,
}: {
  blogCategory: BlogCategory;
  selectedCategory?: BlogCategory;
  handleSelectCategory: (category: BlogCategory) => void;
}) => (
  <li key={blogCategory}>
    <a
      className={selectedCategory === blogCategory ? styles.active : undefined}
      onClick={() => handleSelectCategory(blogCategory)}
    >
      {blogCategory}
    </a>
  </li>
);

const LabelSelector = ({
  blogLabel,
  selectedLabel,
  handleSelectLabel,
}: {
  blogLabel: BlogLabel;
  selectedLabel?: BlogLabel;
  handleSelectLabel: (label: BlogLabel) => void;
}) => (
  <li key={blogLabel} className={styles.labelButton}>
    <a className={selectedLabel === blogLabel ? styles.active : undefined} onClick={() => handleSelectLabel(blogLabel)}>
      #{blogLabel}
    </a>
  </li>
);

export const CategoryLabelSelector = ({
  selectedCategory,
  selectedLabel,
  handleSelectCategory,
  handleSelectLabel,
  labelsToShow,
  resetFilters,
}: SelectorForBlogCategoryOrLabelProps) => {
  const [showLabels, setShowLabels] = useState(false);
  return (
    <div className={styles.selectorForBlogCategoryOrLabel}>
      <ul className={styles.blogCategoriesList}>
        <li key="allArticles">
          <a className={selectedLabel || selectedCategory ? undefined : styles.active} onClick={() => resetFilters()}>
            Tous les articles
          </a>
        </li>
        {Object.values(BlogCategory).map((blogCategory) => (
          <CategorySelector
            key={blogCategory}
            blogCategory={blogCategory}
            handleSelectCategory={handleSelectCategory}
            selectedCategory={selectedCategory}
          />
        ))}
        <li key="showLabelsButton">
          <button type="button" className={styles.showLabelsButton} onClick={() => setShowLabels(!showLabels)}>
            {showLabels ? "Moins de catégories" : "Voir plus de catégories"}
          </button>
        </li>
      </ul>
      {showLabels && (
        <ul className={styles.blogLabelsList}>
          {labelsToShow.map((blogLabel) => (
            <LabelSelector
              key={blogLabel}
              blogLabel={blogLabel}
              selectedLabel={selectedLabel}
              handleSelectLabel={handleSelectLabel}
            />
          ))}
        </ul>
      )}
    </div>
  );
};
