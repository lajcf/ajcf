import React from "react";
import styles from "../Press.module.scss";
import { PressFiles, FilesDisplay } from "../FilesDisplay";

const pressReviewFiles: PressFiles[] = [
  {
    date: "Juillet 2019",
    desc: "Retombées et impact médiatique de la campagne #JeNeSuisPasUnVirus",
    id: 1,
  },
];

export const PressReview = () => {
  return (
    <section className={styles.subcategory}>
      <h2 className={styles.subcategoryName}>Revue de presse</h2>
      <FilesDisplay files={pressReviewFiles} />
    </section>
  );
};
