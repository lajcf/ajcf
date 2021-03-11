import React from "react";
import { Layout } from "../../../Layout/Layout";
import { OurInterventions } from "./OurInterventions";
import { OurPartners } from "./OurPartners";
import styles from "./EducationAJCF.module.scss";
import { TwitterFeed } from "./TwitterFeed";

export const EducationAJCFContainer = () => {
  return (
    <Layout className={styles.layout}>
      <section className={styles.summarySection}>
        <h1>Education AJCF</h1>
        <h2>Sensibiliser et lutter contre les discrimminations et le racisme anti-asiatique</h2>
        <p className="texte1">
          Et has minim elitr intellegat. Mea aeterno eleifend antiopam ad, nam no suscipit quaerendum. At nam minimum
          ponderum. Est audiam animal molestiae te. Et has minim elitr intellegat. Mea aeterno eleifend antiopam ad, nam
          no suscipit quaerendum. At nam minimum ponderum. Et has minim elitr intellegat. Mea aeterno eleifend antiopam
          ad, nam no suscipit quaerendum. At nam minimum ponderum. Est audiam animal molestiae te. Et has minim elitr
          intellegat. Mea aeterno eleifend antiopam ad, nam no suscipit quaerendum. At nam minimum ponderum
        </p>
      </section>
      <OurInterventions />
      <OurPartners />
      <section className={styles.joinUsSection}>
        <h2>Nous rejoindre</h2>
        <p className="texte1">
          Intéressé(e) par nos événements et le monde du débat et des idées ? Contactez l’équipe en charge de ce projet
          en contactant contact @lajcf.fr
        </p>
      </section>
      <TwitterFeed />
    </Layout>
  );
};
