import React from "react";
import Link from "next/link";
import { DownloadOutlined } from "@ant-design/icons";
import { Label, PressFileFragment } from "../../../types/types";
import styles from "./Press.module.scss";

export const formatLabel = (labels: Label[]) => {
  const labelChosen = labels.find((label) => label === Label.PressReview || label === Label.PressRelease);
  switch (labelChosen) {
    case Label.PressReview:
      return "Revue de presse";
    case Label.PressRelease:
      return "Communiqués";
    default:
  }
};

const fileTitleContent = (file: PressFileFragment) => {
  const date = file.updatedAt.match(/^\d+-\d+-\d+/);
  const label = formatLabel(file.labels);
  if (label) {
    return `${date[0]} - ${label.toUpperCase()}`;
  }
  return date[0];
};

export const FilesDisplay = ({ files }: { files: PressFileFragment[] }) => {
  return (
    <div className={styles.files}>
      {files.map((file) => (
        <div key={file.fileName} className={styles.file}>
          <h3 className={styles.title}>{fileTitleContent(file)}</h3>
          <p>
            {file.fileName}{" "}
            <Link href={file.url}>
              <a target="_blank">
                <DownloadOutlined />
              </a>
            </Link>
          </p>
        </div>
      ))}
    </div>
  );
};
