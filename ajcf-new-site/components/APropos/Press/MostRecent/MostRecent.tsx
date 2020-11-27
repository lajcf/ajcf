import React, { ReactComponentElement, ReactElement } from "react";
import styles from "./MostRecent.module.scss";
import { PressFiles, FilesDisplay } from "../FilesDisplay";

const recentFiles: PressFiles[] = [
  {
    name: "Communiqués",
    date: "Septembre 2020",
    desc: "Soutien à George Floyd: la communauté asiatique se mobilise pour #BlackLivesMatter",
  },
  {
    name: "Revue de presse",
    date: "Juin 2020",
    desc: "Retombées et impact médiatique de la campagne #JeNeSuisPasUnVirus",
  },
  {
    name: "Communiqué de presse",
    date: "Avril 2020",
    desc: "Appel à soutien pour la famille Liu Shaoyao",
  },
];

export const MostRecent = () => {
  return (
    <section className={styles.mostRecent}>
      <h2 className={styles.subcategoryName}>Les plus récents</h2>
      <FilesDisplay files={recentFiles} />
    </section>
  );
};
