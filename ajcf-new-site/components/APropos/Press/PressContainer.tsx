import { orderBy } from "lodash";
import React from "react";
import { AssetLabel, PressFileFragment } from "../../../types/types";
import { Layout } from "../../Layout/Layout";
import styles from "./Press.module.scss";
import { PressFiles } from "./PressFiles";

const NUMBER_OF_RECENT_PRESS_FILES = 3;

const selectPressFiles = (pressFiles: PressFileFragment[], label: AssetLabel): PressFileFragment[] => {
  return pressFiles.filter((pressFile) => pressFile.assetLabel.includes(label));
};

export const PressContainer = ({ pressFiles }: { pressFiles: PressFileFragment[] }) => {
  const orderedPressFiles = orderBy(
    pressFiles,
    ({ optionalPublishedDate, createdAt }) => optionalPublishedDate || createdAt,
    "desc"
  );
  return (
    <Layout className={styles.layout}>
      <section className={styles.summarySection}>
        <h1>Presse</h1>
        <ul className={styles.inPageLinks}>
          <li>
            <h4>
              <a href="#Revue de presse">Revue de presse</a>
            </h4>
          </li>
          <li>
            <h4>
              <a href="#Communiqués">Communiqués</a>
            </h4>
          </li>
        </ul>
      </section>
      <PressFiles pressFiles={orderedPressFiles.slice(0, NUMBER_OF_RECENT_PRESS_FILES)} title="Les plus récents" />
      <PressFiles pressFiles={selectPressFiles(orderedPressFiles, AssetLabel.PressReview)} title="Revue de presse" />
      <PressFiles pressFiles={selectPressFiles(orderedPressFiles, AssetLabel.PressRelease)} title="Communiqués" />
    </Layout>
  );
};
