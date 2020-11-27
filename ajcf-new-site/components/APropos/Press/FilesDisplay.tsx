import React from "react";
import styles from "./Press.module.scss";

export type PressFiles = {
  name: string;
  date: string;
  desc: string;
};

export const FilesDisplay = ({ files }: { files: PressFiles[] }) => {
  return (
    <div className={styles.files}>
      {files.map((file: PressFiles) => (
        <div key={file.name} className={styles.file}>
          <h3 className={styles.title}>{`${file.date.toUpperCase()} - ${file.name.toUpperCase()}`}</h3>
          <p>{file.desc}</p>
        </div>
      ))}
    </div>
  );
};
