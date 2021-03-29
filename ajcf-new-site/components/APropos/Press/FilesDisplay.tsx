import React from "react";
import { capitalize } from "lodash";
import { AssetLabel, PressFileFragment } from "../../../types/types";
import styles from "./Press.module.scss";
import { dayjs } from "../../../lib/utils/dayjs";

export const formatLabel = (labels: AssetLabel[]) => {
  const labelChosen = labels.find((label) => label === AssetLabel.PressReview || label === AssetLabel.PressRelease);
  switch (labelChosen) {
    case AssetLabel.PressReview:
      return "Revue de presse";
    case AssetLabel.PressRelease:
      return "Communiqués";
    default:
  }
};

const fileTitleContent = (file: PressFileFragment): string => {
  const date = capitalize(dayjs(file.updatedAt).format("MMMM-YYYY"));
  const label = formatLabel(file.assetLabel);
  if (label) {
    return `${date} - ${label.toUpperCase()}`;
  }
  return date;
};

export const FilesDisplay = ({ files }: { files: PressFileFragment[] }) => {
  return (
    <ul className={styles.files}>
      {files.map((file) => (
        <li key={file.fileName}>
          <h3>{fileTitleContent(file)}</h3>
          <div className={styles.fileDescription}>
            <p>{file.fileName}</p>
            <a href={file.url} target="_blank" rel="noopener noreferrer">
              Ouvrir le fichier
            </a>
          </div>
        </li>
      ))}
    </ul>
  );
};
