import React from "react";
import { PressFileFragment } from "../../../types/types";
import styles from "./Press.module.scss";
import { FilesDisplay } from "./FilesDisplay";

type PressFilesProps = {
  pressFiles: PressFileFragment[];
  title: string;
};

export const PressFiles = ({ pressFiles, title }: PressFilesProps) => {
  return (
    <section className={styles.pressFilesSection} id={title}>
      <h2>{title}</h2>
      <FilesDisplay files={pressFiles} />
    </section>
  );
};
