import React from "react";
import { partnersLogos } from "../../Home/HomeComponents/HomePartnersComponents/HomePartnersLogos";
import { Layout } from "../../Layout/Layout";
import styles from "./Partners.module.scss";

export const PartnersContainer = () => {
  return (
    <Layout className={styles.layout}>
      <section className={styles.summarySection}>
        <h1>Des partenaires qui nous font confiance</h1>
        <p>
          Au fil de ses actions, les membres de l’AJCF sont confrontés à une réalité de terrain. De la rencontre humaine
          naissent des échanges, des évolutions et parfois des amitiés qui se concrétisent par des partenariats.
        </p>
      </section>
      <section className={styles.partnersListSection}>
        <ul>
          {partnersLogos.map((partner) => (
            <li key={partner.id}>
              <img src={partner.file} />
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  );
};
