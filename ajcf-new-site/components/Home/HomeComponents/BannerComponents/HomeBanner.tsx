import React from "react";
import styles from "./HomeBanner.module.scss";

const titleContent = "L'AJCF, explorer sa culture franco-chinoise ensemble";
const textContent =
  "Et has minim elitr intellegat. Mea aeterno eleifend antiopam ad, nam no suscipit quaerendum. At nam minimum ponderum. Est audiam animal molestiae te.";
export const HomeBanner = () => {
  return (
    <section className={styles.banner}>
      <h1 className={styles.title}>{titleContent}</h1>
      <p className={styles.text}>{textContent}</p>
      <div className={styles.buttons}>
        <button type="button">Notre Histoire</button>
        <button type="button" className={`secondary-button ${styles.projets}`}>
          Nos projets
        </button>
      </div>
      <figure className={styles.image}>Image</figure>
    </section>
  );
};
