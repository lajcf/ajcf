import React from "react";
import styles from "../Press.module.scss";
import { PressFiles, FilesDisplay } from "../FilesDisplay";

const recentFiles: PressFiles[] = [
  {
    category: "Communiqués",
    date: "Septembre 2020",
    desc: "Soutien à George Floyd: la communauté asiatique se mobilise pour #BlackLivesMatter",
    id: 1,
  },
  {
    category: "Revue de presse",
    date: "Juin 2020",
    desc: "Retombées et impact médiatique de la campagne #JeNeSuisPasUnVirus",
    id: 2,
  },
  {
    category: "Communiqué de presse",
    date: "Avril 2020",
    desc: "Appel à soutien pour la famille Liu Shaoyao",
    id: 3,
  },
];

export const MostRecent = () => {
  return (
    <section className={styles.subcategory}>
      <h2 className={styles.subcategoryName}>Les plus récents</h2>
      <FilesDisplay files={recentFiles} />
    </section>
  );
};
