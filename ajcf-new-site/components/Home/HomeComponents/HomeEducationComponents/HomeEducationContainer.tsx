import React from "react";
import styles from "./HomeEducation.module.scss";
import { HomeEducationCards } from "./HomeEducationCards";

const textContent = `Et has minim elitr intellegat. Mea aeterno eleifend antiopam ad, nam no suscipit quaerendum. At nam minimum ponderum. Est audiam animal molestiae te. Et has minim elitr intellegat. Mea aeterno eleifend antiopam ad, nam no suscipit quaerendum. At nam minimum ponderum. Est audiam animal molestiae te.`;
export const HomeEducationContainer = () => {
  return (
    <section className={styles.educationSection}>
      <section className={styles.presentationSection}>
        <h2 className="capsHeading">Education AJCF</h2>
        <h1>Sensibiliser aux discriminations et racisme anti-asiatique</h1>
        <p>{textContent}</p>
      </section>
      <HomeEducationCards />
    </section>
  );
};
