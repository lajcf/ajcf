import React from "react";
import styles from "../Press.module.scss";
import { PressFiles, FilesDisplay } from "../FilesDisplay";
import { PressFilesQueryQuery } from "../../../../types/types";

export const getMostRecent = (pressFiles: PressFilesQueryQuery) => {
  return pressFiles.assets.slice(0, 3);
};

export const MostRecent = ({ pressFiles }: { pressFiles: PressFilesQueryQuery }) => {
  const recentFiles = getMostRecent(pressFiles);
  return (
    <section className={`${styles.subcategory} ${styles.mostRecent}`}>
      <h2 className={styles.subcategoryName}>Les plus récents</h2>
      <FilesDisplay files={recentFiles} />
    </section>
  );
};
