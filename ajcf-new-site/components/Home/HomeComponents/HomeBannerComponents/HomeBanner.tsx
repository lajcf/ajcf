import React from "react";
import styles from "./HomeBanner.module.scss";
import { AJCFImage } from "../../../../lib/utils/AJCFImage";
import banner from "../../../../public/banners/accueil-banner.png";

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
          <AJCFImage src={banner} />
        </div>
      </div>
    </section>
  );
};
