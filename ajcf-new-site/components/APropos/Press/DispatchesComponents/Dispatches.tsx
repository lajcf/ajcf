import React from "react";
import { PressFilesQueryQuery } from "../../../../types/types";
import { FilesDisplay, PressFiles } from "../FilesDisplay";
import styles from "../Press.module.scss";

const getDispatchesFiles = (pressFiles: PressFilesQueryQuery) => {
  return pressFiles.assets.filter((asset) => asset.labels.some((label) => label === "dispatches"));
};

export const Dispatches = ({ pressFiles }: { pressFiles: PressFilesQueryQuery }) => {
  const dispatchesFiles = getDispatchesFiles(pressFiles);
  return (
    <section className={styles.subcategory}>
      <h2 className={styles.subcategoryName}>Communiqués</h2>
      <FilesDisplay files={dispatchesFiles} />
    </section>
  );
};
