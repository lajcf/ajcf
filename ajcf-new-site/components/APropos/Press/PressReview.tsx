import React from "react";
import { FilesDisplay } from "./FilesDisplay";
import { PressFileFragment } from "../../../types/types";
import styles from "./Press.module.scss";

export const PressReview = ({ pressFiles }: { pressFiles: PressFileFragment[] }) => {
  return (
    <section className={styles.pressReviewSection}>
      <h2>Revue de presse</h2>
      <FilesDisplay files={pressFiles} />
    </section>
  );
};
