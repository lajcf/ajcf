import React, { useState } from "react";
import { ArticlePreviewFragment, BlogCategory, BlogLabel } from "../../../types/types";
import styles from "./BlogContainer.module.scss";

type SelectorForBlogCategoryOrLabelProps = {
  selectedBlogCategoryOrLabel?: BlogCategory | BlogLabel;
  setSelectedBlogCategoryOrLabel: (categoryOrLabel?: BlogCategory | BlogLabel) => void;
  articles: ArticlePreviewFragment[];
};

const filterOutUnusedLabels = (labels: BlogLabel[], articles: ArticlePreviewFragment[]) => {
  const articleIncludesLabel = (article: ArticlePreviewFragment, label: BlogLabel) => {
    return article.blogLabels.includes(label);
  };
  const labelHasSomeArticles = (label: BlogLabel) => {
    return articles.some((article) => articleIncludesLabel(article, label));
  };
  return labels.filter((label) => labelHasSomeArticles(label));
};

export const SelectorForBlogCategoryOrLabel = ({
  selectedBlogCategoryOrLabel,
  setSelectedBlogCategoryOrLabel,
  articles,
}: SelectorForBlogCategoryOrLabelProps) => {
  const [showLabels, setShowLabels] = useState<boolean>(false); // TODO Is it the right scope?
  const usedLabels = filterOutUnusedLabels(Object.values(BlogLabel), articles);
  return (
    <div className={styles.selectorForBlogCategoryOrLabel}>
      <ul className={styles.blogCategoriesList}>
        <li key="allArticles">
          <a
            className={!selectedBlogCategoryOrLabel ? styles.active : undefined}
            onClick={() => setSelectedBlogCategoryOrLabel(undefined)}
          >
            Tous les articles
          </a>
        </li>
        {Object.values(BlogCategory).map((blogCategory) => (
          <li key={blogCategory}>
            <a
              className={selectedBlogCategoryOrLabel === blogCategory ? styles.active : undefined}
              onClick={() => setSelectedBlogCategoryOrLabel(blogCategory as BlogCategory)}
            >
              {blogCategory}
            </a>
          </li>
        ))}
        <li key="showLabelsButton">
          {showLabels ? (
            <button type="button" className={styles.showLabelsButton} onClick={() => setShowLabels(false)}>
              Moins de catégories
            </button>
          ) : (
            <button type="button" className={styles.showLabelsButton} onClick={() => setShowLabels(true)}>
              Voir plus de catégories
            </button>
          )}
        </li>
      </ul>
      {showLabels && (
        <ul className={styles.blogLabelsList}>
          {usedLabels.map((blogLabel) => (
            <li key={blogLabel} className={styles.labelButton}>
              <a
                className={selectedBlogCategoryOrLabel === blogLabel ? styles.active : undefined}
                onClick={() => setSelectedBlogCategoryOrLabel(blogLabel as BlogLabel)}
              >
                #{blogLabel}
              </a>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
