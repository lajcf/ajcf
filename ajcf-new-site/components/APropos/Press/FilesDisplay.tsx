import React from "react";
import { Asset, Label } from "../../../types/types";
import styles from "./Press.module.scss";
import Link from "next/link";
import { DownloadOutlined } from "@ant-design/icons";

export type PressFiles = {
  category?: string;
  date: string;
  desc: string;
  id: number;
};

export const getLabel = (labels: Label[]) => {
  const label = labels.find((label) => label === "pressReview" || label === "dispatches");
  switch (label) {
    case "pressReview":
      return "Revue de presse";
    case "dispatches":
      return "Communiqués";
    default:
      return undefined;
  }
};

const fileTitleContent = (file: Asset) => {
  const date = file.updatedAt.match(/^\d+-\d+-\d+/);
  const label = getLabel(file.labels);
  if (label) {
    return `${date[0]} - ${label.toUpperCase()}`;
  }
  return date[0];
};

export const FilesDisplay = ({ files }: { files: Asset[] }) => {
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
