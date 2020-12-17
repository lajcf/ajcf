import React from "react";
import { Label, PressFilesQueryQuery } from "../../../../types/types";
import { FilesDisplay, PressFiles } from "../FilesDisplay";
import styles from "../Press.module.scss";

const selectDispatchesFiles = (pressFiles: PressFilesQueryQuery) => {
  return pressFiles.assets.filter((asset) => asset.labels.includes("dispatches" as Label));
};

export const Dispatches = ({ pressFiles }: { pressFiles: PressFilesQueryQuery }) => {
  const dispatchesFiles = selectDispatchesFiles(pressFiles);
  return (
    <section className={styles.subcategory}>
      <h2 className={styles.subcategoryName}>Communiqués</h2>
      <FilesDisplay files={dispatchesFiles} />
    </section>
  );
};
