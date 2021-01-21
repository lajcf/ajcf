import { Button } from "antd";
import React from "react";
import styles from "./OurAntennas.module.scss";

export const AntennaNewsComponent = () => {
  return (
    <section className={styles.antennaNewsSection}>
      <div className={styles.newsImageFrame}>Placeholder</div>
      <div className={styles.newsContent}>
        <div className="capsHeading">Actualité</div>
        <h2>Conférence “XXX” à Lyon</h2>
        <p className="texte1">
          Et has minim elitr intellegat. Mea aeterno eleifend antiopam ad, nam no suscipit quaerendum. At nam minimum
          ponderum. Est audiam animal molestiae te. Et has minim elitr intellegat. Mea aeterno eleifend antiopam ad, nam
          no suscipit quaerendum. At nam minimum ponderum.
        </p>
        <Button>Lire l'article</Button>
      </div>
    </section>
  );
};
