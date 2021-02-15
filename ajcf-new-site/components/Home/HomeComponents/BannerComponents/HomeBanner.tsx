import { Button } from "antd";
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
        <Button className={styles.histoire}>Notre Histoire</Button>
        <Button type="primary" className={styles.projets}>
          Nos projets
        </Button>
      </div>
      <figure className={styles.image}>Image</figure>
    </section>
  );
};
