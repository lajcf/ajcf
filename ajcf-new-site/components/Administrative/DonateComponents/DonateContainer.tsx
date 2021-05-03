import React from "react";
import styles from "./Donate.module.scss";
import { Layout } from "../../Layout/Layout";
import { DonationIncentives } from "./DonationIncentives";
import { HelloAssoDonation } from "./HelloAssoDonation";

export const DonateContainer = () => {
  return (
    <Layout className={styles.layout}>
      <section className={styles.summarySection}>
        <h1>Faire un don pour nous soutenir</h1>
        <p>
          Si vous souhaitez nous aider, sans avoir le temps nécessaire pour devenir un membre actif, vous pouvez faire
          un don pour aider l’AJCF à grandir, se développer, et améliorer l’efficacité de ses actions.
        </p>
        <p>
          Soutenir l’AJCF, c’est aider à :
          <ul>
            <li>une meilleure représentation de la communauté chinoise et asiatique</li>
            <li>lutter contre le racisme et les discriminations</li>
            <li>consolider un réseau solidaire d’aide aux victimes</li>
            <li>contribuer à des missions éducatives envers tous les publics.</li>
          </ul>
        </p>
      </section>
      <DonationIncentives />
      <HelloAssoDonation />
    </Layout>
  );
};
