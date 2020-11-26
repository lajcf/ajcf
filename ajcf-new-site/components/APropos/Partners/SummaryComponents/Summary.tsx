import React from "react";
import { InPageLinks } from "./InPageLinks";
import styles from "./Summary.module.scss";

export const Summary = () => {
  return (
    <section className={styles.summary}>
      <h1>Des partenaires qui nous font confiance</h1>
      <p>
        Au fil de ses actions, les membres de l’AJCF sont confrontés à une réalité de terrain. De la rencontre humaine
        naissent des échanges, des évolutions et parfois des amitiés qui se concrétisent par des partenariats.
      </p>
      <InPageLinks />
    </section>
  );
};
