import React from "react";
import { BlogLabel } from "../../types/types";
import styles from "./BlogLabelsList.module.scss";

export const BlogLabelsList = ({ blogLabels }: { blogLabels: BlogLabel[] | undefined }) => {
  if (!blogLabels) return null;
  return (
    <ul className={styles.blogLabelsList}>
      {blogLabels.map((label) => (
        <li key={label} className="link">
          #{label}
        </li>
      ))}
    </ul>
  );
};
