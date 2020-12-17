import React from "react";
import styles from "../Press.module.scss";
import { FilesDisplay } from "../FilesDisplay";
import { Label, PressFilesQueryQuery } from "../../../../types/types";

const selectPressReviewFiles = (pressFiles: PressFilesQueryQuery) => {
  return pressFiles.assets.filter((asset) => asset.labels.includes(Label.PressReview));
};

export const PressReview = ({ pressFiles }: { pressFiles: PressFilesQueryQuery }) => {
  const pressReviewFiles = selectPressReviewFiles(pressFiles);
  return (
    <section className={styles.subcategory}>
      <h2 className={styles.subcategoryName}>Revue de presse</h2>
      <FilesDisplay files={pressReviewFiles} />
    </section>
  );
};
