import React from "react";
import styles from "./HomeEducation.module.scss";
import { HomeEducationCards } from "./HomeEducationCards";

const textContent = `La Covid-19 a exacerbé une réalité qui existait déjà : le racisme anti-asiatique. Les actions menées par le Pôle Éducation ont pour but de prévenir ce phénomène, par le biais d’interventions en milieu scolaire autour de thèmes comme l’histoire de l’immigration des Asiatiques, la déconstruction des stéréotypes, et le bien-vivre ensemble. 
`;
export const HomeEducationContainer = () => {
  return (
    <section className={styles.educationSection}>
      <div className={styles.presentationSection}>
        <h2 className="capsHeading">Education AJCF</h2>
        <h1>Sensibiliser aux discriminations et racisme anti-asiatique</h1>
        <p>{textContent}</p>
      </div>
      <HomeEducationCards />
    </section>
  );
};
