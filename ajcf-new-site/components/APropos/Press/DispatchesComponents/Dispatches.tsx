import React from "react";
import { FilesDisplay, PressFiles } from "../FilesDisplay";
import styles from "../Press.module.scss";

const dispatchesFiles: PressFiles[] = [
  {
    date: "Septembre 2020",
    desc: "Soutien à George Floyd: la communauté asiatique se mobilise pour #BlackLivesMatter",
    id: 1,
  },
];

export const Dispatches = () => {
  return (
    <section className={styles.subcategory}>
      <h2 className={styles.subcategoryName}>Communiqués</h2>
      <FilesDisplay files={dispatchesFiles} />
    </section>
  );
};
