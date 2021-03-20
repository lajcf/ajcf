import React from "react";
import { Layout } from "../../../Layout/Layout";
import styles from "./Recruitment.module.scss";

export const RecruitmentContainer = () => {
  return (
    <Layout className={styles.layout}>
      <section className={styles.summarySection}>
        <h1>Appel à recrutement</h1>
        <h2>Tu souhaites participer à l’aventure AJCF ?</h2>
        <div>
          <p>
            La vie de l’AJCF repose uniquement sur l’énergie et le temps accordés par ses bénévoles. Plus nous serons
            nombreux à contribuer à l’association pour atteindre nos objectifs, plus nos actions seront efficaces et
            auront de l’impact sur la société.
          </p>
          <p>
            Nous recrutons au fil de l’eau, tout au long de l’année. Si toi aussi, tu souhaites apporter une pierre à
            l’édifice à l’AJCF, rejoins-nous !
          </p>
        </div>
      </section>
      <section>
        <h2>Tu es à la recherche d’un stage ?</h2>
        <div>
          <p>
            Viens découvrir la vie associative, les actions de l’AJCF, ainsi que les questions spécifiques à la
            communauté chinoise en France.
          </p>
          <p>Si tu es intéressé(e), écris-nous pour te présenter et nous expliquer tes motivations !</p>
        </div>
      </section>
      <section className={styles.recruitmentCallSection}>
        <h2>
          Intéréssé(e) pour nous rejoindre ? Envoyez votre CV ainsi qu’une lettre de motivation à contact@lajcf.fr !{" "}
        </h2>
      </section>
    </Layout>
  );
};
