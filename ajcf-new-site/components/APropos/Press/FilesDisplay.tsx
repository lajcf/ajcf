import React from "react";
import styles from "./Press.module.scss";

export type PressFiles = {
  category?: string;
  date: string;
  desc: string;
  id: number;
};

const fileTitleContent = (file: PressFiles) => {
  if (file.category) {
    return `${file.date.toUpperCase()} - ${file.category.toUpperCase()}`;
  }
  return file.date.toUpperCase();
};

export const FilesDisplay = ({ files }: { files: PressFiles[] }) => {
  return (
    <div className={styles.files}>
      {files.map((file: PressFiles) => (
        <div key={file.id} className={styles.file}>
          <h3 className={styles.title}>{fileTitleContent(file)}</h3>
          <p>{file.desc}</p>
        </div>
      ))}
    </div>
  );
};
