import React from "react";
import { CommentOutlined } from "@ant-design/icons";
import styles from "./OurEspaces.module.scss";

export const EspaceTalk = () => {
  return (
    <section className={styles.espaceSection}>
      <div className={styles.logoFrame}>
        <CommentOutlined className={styles.espaceLogo} />
        <h3>Espace Talk</h3>
      </div>
      <div className={`capsHeading ${styles.categoryName}`}>Espace Talk</div>
      <h2 className={styles.title}>Comprendre et défendre l'identité franco-chinoise</h2>
      <p className={`texte1 ${styles.text}`}>
        L’espace Talk comprendEt has minim elitr intellegat. Mea aeterno eleifend antiopam ad, nam no suscipit
        quaerendum. At nam minimum ponderum. Est audiam animal molestiae te. Et has minim elitr intellegat. Mea aeterno
        eleifend antiopam ad, nam no suscipit quaerendum. At nam minimum ponderum
      </p>
      <div className={styles.activitiesList}>
        <h3>Les activités</h3>
      </div>
    </section>
  );
};
