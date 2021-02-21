import React from "react";
import { BlogCategory, BlogLabel } from "../../../types/types";
import styles from "./BlogContainer.module.scss";

export const SelectBlogCategoryOrLabel = ({
  setSelectedBlogCategoryOrLabel,
}: {
  setSelectedBlogCategoryOrLabel: (categoryOrLabel?: BlogCategory | BlogLabel) => void;
}) => {
  return (
    <ul className={styles.blogCategoriesAndLabelsList}>
      <li key="allArticles">
        <button type="button" onClick={() => setSelectedBlogCategoryOrLabel(undefined)}>
          Tous les articles
        </button>
      </li>
      {Object.values(BlogCategory).map((blogCategory) => (
        <li key={blogCategory}>
          <button type="button" onClick={() => setSelectedBlogCategoryOrLabel(blogCategory as BlogCategory)}>
            {blogCategory}
          </button>
        </li>
      ))}
      {Object.values(BlogLabel).map((blogLabel) => (
        <li key={blogLabel} className={styles.labelButton}>
          <button type="button" onClick={() => setSelectedBlogCategoryOrLabel(blogLabel as BlogLabel)}>
            #{blogLabel}
          </button>
        </li>
      ))}
    </ul>
  );
};
