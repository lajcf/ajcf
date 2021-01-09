import React from "react";
import { __EnumValue } from "../../../types/types";
import styles from "./BlogList.module.scss";

export const SelectBlogLabels = ({
  blogLabels,
  setSelectedBlogLabel,
}: {
  blogLabels: __EnumValue[];
  setSelectedBlogLabel: React.Dispatch<React.SetStateAction<undefined>>;
}) => {
  return (
    <ul className={styles.blogLabelsList}>
      <li key="Tous les articles">
        <button type="button" onClick={() => setSelectedBlogLabel(undefined)}>
          Tous les articles
        </button>
      </li>
      {blogLabels.map((blogLabel) => (
        <li key={blogLabel.name}>
          <button type="button" onClick={() => setSelectedBlogLabel(blogLabel.name)}>
            #{blogLabel.name}
          </button>
        </li>
      ))}
    </ul>
  );
};
