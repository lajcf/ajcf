import React from "react";
import styles from "./HomeBanner.module.scss";

const titleContent = "L'AJCF, explorer sa culture franco-chinoise ensemble";
const textContent =
  "Et has minim elitr intellegat. Mea aeterno eleifend antiopam ad, nam no suscipit quaerendum. At nam minimum ponderum. Est audiam animal molestiae te.";
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
