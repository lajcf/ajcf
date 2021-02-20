import { Button } from "antd";
import React from "react";
import { BlogCategory, BlogLabel } from "../../../types/types";
import styles from "./BlogContainer.module.scss";

export const SelectBlogCategoryOrLabel = ({
  setSelectedBlogCategoryOrLabel,
}: {
  setSelectedBlogCategoryOrLabel: (categoryOrLabel?: BlogCategory | BlogLabel) => void;
}) => {
  return (
    <ul className={styles.blogLabelsList}>
      <li key="allArticles">
        <Button type="primary" onClick={() => setSelectedBlogCategoryOrLabel(undefined)}>
          Tous les articles
        </Button>
      </li>
      {Object.values(BlogCategory).map((blogCategory) => (
        <li key={blogCategory}>
          <Button type="primary" onClick={() => setSelectedBlogCategoryOrLabel(blogCategory as BlogCategory)}>
            {blogCategory}
          </Button>
        </li>
      ))}
      {/* {Object.values(BlogLabel).map((blogLabel) => (
        <li key={blogLabel}>
          <Button type="primary" onClick={() => setSelectedBlogLabel(blogLabel as BlogLabel)}>
            #{blogLabel}
          </Button>
        </li>
      ))} */}
    </ul>
  );
};
