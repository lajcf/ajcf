import React from "react";
import styles from "./HomeBanner.module.scss";

const titleContent = "Venez explorer la double culture franco-chinoise avec l’AJCF.";
const textContent =
  "Contribuons à bâtir un monde multiculturel, en apprenant à connaître et à partager la double culture franco-chinoise.";
export const HomeBanner = () => {
  return (
    <section className={styles.banner}>
      <div className={styles.bannerContent}>
        <h1 className={styles.title}>{titleContent}</h1>
        <p className={styles.text}>{textContent}</p>
        <div className={styles.buttons}>
          <button type="button" className="secondary-button">
            Notre Histoire
          </button>
          <button type="button">Nos projets</button>
        </div>
        <div className={styles.image}>
          <img src={require("../../../../public/banners/accueil-banner.png")} />
        </div>
      </div>
    </section>
  );
};
