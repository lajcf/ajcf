import React, { useState } from "react";
import { Category, Label } from "./ItemsPreviewsListContainer";
import styles from "./SelectorForCategoryOrLabel.module.scss";

type SelectorForCategoryOrLabelProps = {
  selectedCategory?: Category;
  handleSelectedCategory: (category: Category) => void;
  selectedLabel?: Label;
  handleSelectedLabel: (label: Label) => void;
  categoriesToShow: Category[];
  labelsToShow: Label[];
  resetFilters: () => void;
};

const CategorySelector = ({
  category,
  selectedCategory,
  handleSelectedCategory,
}: {
  category: Category;
  selectedCategory?: Category;
  handleSelectedCategory: (category: Category) => void;
}) => (
  <li key={category}>
    <a
      className={selectedCategory === category ? styles.active : undefined}
      onClick={() => handleSelectedCategory(category)}
    >
      {category}
    </a>
  </li>
);

const LabelSelector = ({
  label,
  selectedLabel,
  handleSelectedLabel,
}: {
  label: Label;
  selectedLabel?: Label;
  handleSelectedLabel: (label: Label) => void;
}) => (
  <li key={label} className={styles.labelButton}>
    <a className={selectedLabel === label ? styles.active : undefined} onClick={() => handleSelectedLabel(label)}>
      #{label}
    </a>
  </li>
);

export const SelectorForCategoryOrLabel = ({
  selectedCategory,
  selectedLabel,
  handleSelectedCategory,
  handleSelectedLabel,
  categoriesToShow,
  labelsToShow,
  resetFilters,
}: SelectorForCategoryOrLabelProps) => {
  const [showLabels, setShowLabels] = useState(false);
  return (
    <div className={styles.selectorForBlogCategoryOrLabel}>
      <ul className={styles.blogCategoriesList}>
        <li key="allArticles">
          <a className={selectedLabel || selectedCategory ? undefined : styles.active} onClick={() => resetFilters()}>
            Tous les articles
          </a>
        </li>
        {categoriesToShow.map((category) => (
          <CategorySelector
            key={category}
            category={category}
            handleSelectedCategory={handleSelectedCategory}
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
          {labelsToShow.map((label) => (
            <LabelSelector
              key={label}
              label={label}
              selectedLabel={selectedLabel}
              handleSelectedLabel={handleSelectedLabel}
            />
          ))}
        </ul>
      )}
    </div>
  );
};
