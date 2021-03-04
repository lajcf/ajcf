import React from "react";
import styles from "./HomePartners.module.scss";
import { HomePartnersLogos } from "./HomePartnersLogos";

const textContent = `Et has minim elitr intellegat. Mea aeterno eleifend antiopam ad, nam no suscipit quaerendum. At nam minimum ponderum. Est audiam animal molestiae te.`;
export const HomePartnersContainer = () => {
  return (
    <section className={styles.partners}>
      <h2 className={styles.title}>Nos partenaires</h2>
      <p className={styles.text}>{textContent}</p>
      <HomePartnersLogos />
    </section>
  );
};
