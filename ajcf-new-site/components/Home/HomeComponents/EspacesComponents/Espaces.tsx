import React from "react";
import styles from "./Espaces.module.scss";
import { EspacesDescriptions } from "./EspacesDescriptions";

const titleContent = "S'exprimer à travers nos 4 espaces";
const textContent =
  "Et has minim elitr intellegat. Mea aeterno eleifend antiopam ad, nam no suscipit quaerendum. At nam minimum ponderum. Est audiam animal molestiae te.";
export const Espaces = () => {
  return (
    <section className={styles.espaces}>
      <h2>{titleContent}</h2>
      <p>{textContent}</p>
      <EspacesDescriptions />
    </section>
  );
};
