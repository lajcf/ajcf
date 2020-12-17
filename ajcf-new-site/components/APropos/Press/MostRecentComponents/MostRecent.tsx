import React from "react";
import { orderBy } from "lodash";
import styles from "../Press.module.scss";
import { FilesDisplay } from "../FilesDisplay";
import { PressFileFragment } from "../../../../types/types";

export const selectMostRecentPressFiles = (pressFiles: PressFileFragment[]) => {
  return orderBy(pressFiles, "updatedAt", "desc").slice(0, 3);
};

export const MostRecentPressFiles = ({ pressFiles }: { pressFiles: PressFileFragment[] }) => {
  const recentFiles = selectMostRecentPressFiles(pressFiles);
  return (
    <section className={`${styles.subcategory} ${styles.mostRecent}`}>
      <h2 className={styles.subcategoryName}>Les plus récents</h2>
      <FilesDisplay files={recentFiles} />
    </section>
  );
};
