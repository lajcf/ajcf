import React from "react";
import styles from "./HomePartners.module.scss";
import { HomePartnersLogos } from "./HomePartnersLogos";

const textContent = `Nous remercions tous nos partenaires présents et passés pour leur soutien au développement de notre association. 
Que ce soit pour un soutien régulier ou pour un événement ponctuel, nous sommes ouverts à toute proposition. Si vous souhaitez faire un partenariat avec nous, n’hésitez pas à nous contacter. 
`;
export const HomePartnersContainer = () => {
  return (
    <section className={styles.partners}>
      <h2 className={styles.title}>Nos partenaires</h2>
      <p className={styles.text}>{textContent}</p>
      <HomePartnersLogos />
    </section>
  );
};
