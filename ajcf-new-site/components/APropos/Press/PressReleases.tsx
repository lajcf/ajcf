import React from "react";
import { PressFileFragment } from "../../../types/types";
import { FilesDisplay } from "./FilesDisplay";
import styles from "./Press.module.scss";

export const PressReleases = ({ pressFiles }: { pressFiles: PressFileFragment[] }) => {
  return (
    <section className={styles.pressReleasesSection}>
      <h2>Communiqués</h2>
      <FilesDisplay files={pressFiles} />
    </section>
  );
};
