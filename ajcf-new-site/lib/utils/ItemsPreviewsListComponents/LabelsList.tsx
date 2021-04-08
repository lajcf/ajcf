import React from "react";
import { BlogLabel, EventLabel } from "../../../types/types";
import styles from "./LabelsList.module.scss";

export const LabelsList = ({ labels }: { labels: BlogLabel[] | EventLabel[] | undefined }) => {
  if (!labels) return null;
  return (
    <ul className={styles.labelsList}>
      {labels.map((label: BlogLabel | EventLabel) => (
        <li key={label} className="link">
          #{label}
        </li>
      ))}
    </ul>
  );
};
