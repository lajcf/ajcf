import { Button } from "antd";
import React from "react";
import styles from "./ProjetsAJCFContainer.module.scss";

export const Recruitment = () => {
  return (
    <section className={styles.recruitmentSection}>
      <div className={styles.imagePlaceholder}>
        <div>Placeholder</div>
      </div>
      <div className={`capsHeading ${styles.categoryName}`}>Recrutement</div>
      <h2 className={styles.title}>L'AJCF se fait avec vous !</h2>
      <p className={`texte1 ${styles.text}`}>
        Et has minim elitr intellegat. Mea aeterno eleifend antiopam ad, nam no suscipit quaerendum. At nam minimum
        ponderum. Est audiam animal molestiae te. Et has minim elitr intellegat. Mea aeterno eleifend antiopam ad, nam
        no suscipit quaerendum. At nam minimum ponderum.
      </p>
      <Button className={styles.discoverButton}>Découvrir nos projets</Button>
      <Button className={styles.contactButton} type="primary">
        Nous contacter
      </Button>
    </section>
  );
};
