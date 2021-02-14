import { Button } from "antd";
import React from "react";
import { BlogLabel } from "../../../types/types";
import styles from "./BlogContainer.module.scss";

export const SelectBlogLabels = ({
  setSelectedBlogLabel,
}: {
  setSelectedBlogLabel: (blogLabel?: BlogLabel) => void;
}) => {
  return (
    <ul className={styles.blogLabelsList}>
      <li key="allArticles">
        <Button type="primary" onClick={() => setSelectedBlogLabel(undefined)}>
          Tous les articles
        </Button>
      </li>
      {Object.values(BlogLabel).map((blogLabel) => (
        <li key={blogLabel}>
          <Button type="primary" onClick={() => setSelectedBlogLabel(blogLabel as BlogLabel)}>
            #{blogLabel}
          </Button>
        </li>
      ))}
    </ul>
  );
};
