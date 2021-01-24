import { Button } from "antd";
import React from "react";
import styles from "./ProjetsAJCFContainer.module.scss";

export const AntennesSummary = () => {
  return (
    <section className={styles.antennesSection}>
      <div className="capsHeading">Nos Antennes</div>
      <h2>Se connecter à nos communautés</h2>
      <p className="texte1">
        Et has minim elitr intellegat. Mea aeterno eleifend antiopam ad, nam no suscipit quaerendum. At nam minimum
        ponderum. Est audiam animal molestiae te. Et has minim elitr intellegat. Mea aeterno eleifend antiopam ad, nam
        no suscipit quaerendum. At nam minimum ponderum. Et has minim elitr intellegat. Mea aeterno eleifend antiopam
        ad, nam no suscipit quaerendum. At nam minimum ponderum. Est audiam animal molestiae te. Et has minim elitr
        intellegat.
      </p>
      <Button className={styles.learnMoreButton} type="primary">
        En savoir plus
      </Button>
    </section>
  );
};
