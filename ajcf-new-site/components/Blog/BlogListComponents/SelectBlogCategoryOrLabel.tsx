import React, { useState } from "react";
import { ArticlePreviewFragment, BlogCategory, BlogLabel } from "../../../types/types";
import styles from "./BlogContainer.module.scss";

const filterOutUnusedLabels = (labels: BlogLabel[], articles: ArticlePreviewFragment[]) => {
  const articleIncludesLabel = (article: ArticlePreviewFragment, label: BlogLabel) => {
    return article.blogLabels.includes(label);
  };
  const labelHasSomeArticles = (label: BlogLabel) => {
    return articles.some((article) => articleIncludesLabel(article, label));
  };
  return labels.filter((label) => labelHasSomeArticles(label));
};

export const SelectBlogCategoryOrLabel = ({
  setSelectedBlogCategoryOrLabel,
  articles,
}: {
  setSelectedBlogCategoryOrLabel: (categoryOrLabel?: BlogCategory | BlogLabel) => void;
  articles: ArticlePreviewFragment[];
}) => {
  const [showLabels, setShowLabels] = useState<boolean>(false); // TODO Is it the right scope?
  const usedLabels = filterOutUnusedLabels(Object.values(BlogLabel), articles);
  return (
    <div className={styles.selectBlogCategoryOrLabel}>
      <ul className={styles.blogCategoriesList}>
        <li key="allArticles">
          <a onClick={() => setSelectedBlogCategoryOrLabel(undefined)}>Tous les articles</a>
        </li>
        {Object.values(BlogCategory).map((blogCategory) => (
          <li key={blogCategory}>
            <a onClick={() => setSelectedBlogCategoryOrLabel(blogCategory as BlogCategory)}>{blogCategory}</a>
          </li>
        ))}
      </ul>
      {showLabels && (
        <ul className={styles.blogLabelsList}>
          {usedLabels.map((blogLabel) => (
            <li key={blogLabel} className={styles.labelButton}>
              <a onClick={() => setSelectedBlogCategoryOrLabel(blogLabel as BlogLabel)}>#{blogLabel}</a>
            </li>
          ))}
        </ul>
      )}
      <div className={styles.showLabelsButtonRow}>
        {showLabels ? (
          <button type="button" onClick={() => setShowLabels(false)}>
            Moins de catégories
          </button>
        ) : (
          <button type="button" onClick={() => setShowLabels(true)}>
            Voir plus de catégories
          </button>
        )}
      </div>
    </div>
  );
};
