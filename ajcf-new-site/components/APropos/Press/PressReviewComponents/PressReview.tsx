import React from "react";
import styles from "../Press.module.scss";
import { FilesDisplay } from "../FilesDisplay";
import { PressFileFragment } from "../../../../types/types";

export const PressReview = ({ pressFiles }: { pressFiles: PressFileFragment[] }) => {
  return (
    <section className={styles.subcategory}>
      <h2 className={styles.subcategoryName}>Revue de presse</h2>
      <FilesDisplay files={pressFiles} />
    </section>
  );
};
