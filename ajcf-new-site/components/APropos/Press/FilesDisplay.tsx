import React from "react";
import Link from "next/link";
import { DownloadOutlined } from "@ant-design/icons";
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
