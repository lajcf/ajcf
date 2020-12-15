import React from "react";
import styles from "../Press.module.scss";
import { FilesDisplay } from "../FilesDisplay";
import { PressFilesQueryQuery } from "../../../../types/types";

const getpressReviewFiles = (pressFiles: PressFilesQueryQuery) => {
  return pressFiles.assets.filter((asset) => asset.labels.some((label) => label === "pressReview"));
};

export const PressReview = ({ pressFiles }: { pressFiles: PressFilesQueryQuery }) => {
  const pressReviewFiles = getpressReviewFiles(pressFiles);
  console.log(pressReviewFiles);
  return (
    <section className={styles.subcategory}>
      <h2 className={styles.subcategoryName}>Revue de presse</h2>
      <FilesDisplay files={pressReviewFiles} />
    </section>
  );
};
