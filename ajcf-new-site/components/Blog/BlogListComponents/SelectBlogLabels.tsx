import React from "react";
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
        <button type="button" onClick={() => setSelectedBlogLabel(undefined)}>
          Tous les articles
        </button>
      </li>
      {Object.values(BlogLabel).map((blogLabel) => (
        <li key={blogLabel}>
          <button type="button" onClick={() => setSelectedBlogLabel(blogLabel as BlogLabel)}>
            #{blogLabel}
          </button>
        </li>
      ))}
    </ul>
  );
};
