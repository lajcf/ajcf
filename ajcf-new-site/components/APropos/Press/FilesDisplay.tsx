import React from "react";
import Link from "next/link";
import dayjs from "dayjs";
import { DownloadOutlined } from "@ant-design/icons";
import { capitalize } from "lodash";
import { Label, PressFileFragment } from "../../../types/types";
import styles from "./Press.module.scss";

require("dayjs/locale/fr");

dayjs.locale("fr");

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

const fileTitleContent = (file: PressFileFragment): string => {
  const date = capitalize(dayjs(file.updatedAt).format("MMMM-YYYY"));
  const label = formatLabel(file.labels);
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
