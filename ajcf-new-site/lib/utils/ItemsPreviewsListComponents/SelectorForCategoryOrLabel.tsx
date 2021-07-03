import React, { useState } from "react";
import styles from "./SelectorForCategoryOrLabel.module.scss";

type SelectorForCategoryOrLabelProps<Category, Label> = {
  selectedCategory?: Category;
  handleSelectedCategory: (category: Category) => void;
  selectedLabel?: Label;
  handleSelectedLabel: (label: Label) => void;
  categoriesToShow: Category[];
  labelsToShow: Label[];
  resetFilters: () => void;
};

const CategorySelector = <Category extends string>({
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

const LabelSelector = <Label extends string>({
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

export const SelectorForCategoryOrLabel = <Category extends string, Label extends string>({
  selectedCategory,
  selectedLabel,
  handleSelectedCategory,
  handleSelectedLabel,
  categoriesToShow,
  labelsToShow,
  resetFilters,
}: SelectorForCategoryOrLabelProps<Category, Label>) => {
  const [showLabels, setShowLabels] = useState(false);
  return (
    <div className={styles.selectorForCategoryOrLabel}>
      <ul className={styles.categoriesList}>
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
        <li key="showLabelsButton" className={styles.showLabelsButtonContainer}>
          <button type="button" className={styles.showLabelsButton} onClick={() => setShowLabels(!showLabels)}>
            {showLabels ? "Moins de catégories" : "Voir plus de catégories"}
          </button>
        </li>
      </ul>
      {showLabels && (
        <ul className={styles.labelsList}>
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