import React from "react";
import styles from "./Espaces.module.scss";

const textContent: string =
  "Et has minim elitr intellegat. Mea aeterno eleifend antiopam ad, nam no suscipit quaerendum. At nam minimum ponderum. Est audiam animal molestiae te.";
export const Text = () => {
  return <p className={styles.text}>{textContent}</p>;
};
