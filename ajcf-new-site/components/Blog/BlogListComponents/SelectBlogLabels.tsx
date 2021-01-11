import React from "react";
import { Button } from "antd";
import styles from "./BlogContainer.module.scss";
import { BlogLabel } from "../../../types/types";

export const SelectBlogLabels = ({
  setSelectedBlogLabel,
}: {
  setSelectedBlogLabel: (blogLabel?: BlogLabel) => void;
}) => {
  return (
    <ul className={styles.blogLabelsList}>
      <li key="Tous les articles">
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
