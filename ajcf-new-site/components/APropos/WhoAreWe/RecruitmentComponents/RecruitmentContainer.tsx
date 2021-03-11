import React from "react";
import { Layout } from "../../../Layout/Layout";
import { OurOffers } from "./OurOffers";
import styles from "./Recruitment.module.scss";

export const RecruitmentContainer = () => {
  return (
    <Layout className={styles.layout}>
      <section className={styles.summarySection}>
        <h1>Appel à recrutement</h1>
        <h2>Soutenir les projets de la communauté asiatique</h2>
        <p className="texte1">
          Et has minim elitr intellegat. Mea aeterno eleifend antiopam ad, nam no suscipit quaerendum. At nam minimum
          ponderum. Est audiam animal molestiae te. Et has minim elitr intellegat. Mea aeterno eleifend antiopam ad, nam
          no suscipit quaerendum. At nam minimum ponderum
        </p>
      </section>
      <OurOffers />
      <section className={styles.recruitmentCallSection}>
        <h2>
          Intéréssé(e) pour nous rejoindre ? Envoyez votre CV ainsi qu’une lettre de motivation à contact@lajcf.fr !{" "}
        </h2>
      </section>
    </Layout>
  );
};
