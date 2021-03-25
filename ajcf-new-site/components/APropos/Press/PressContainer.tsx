import { orderBy } from "lodash";
import React from "react";
import { AssetLabel, PressFileFragment } from "../../../types/types";
import { Layout } from "../../Layout/Layout";
import styles from "./Press.module.scss";
import { PressFiles } from "./PressFiles";

const selectPressFiles = (pressFiles: PressFileFragment[], label: AssetLabel): PressFileFragment[] => {
  return pressFiles.filter((pressFile) => pressFile.assetLabel.includes(label));
};

export const selectMostRecentPressFiles = (pressFiles: PressFileFragment[]) => {
  return orderBy(pressFiles, "updatedAt", "desc").slice(0, 3);
};

export const PressContainer = ({ pressFiles }: { pressFiles: PressFileFragment[] }) => {
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
      <PressFiles pressFiles={selectMostRecentPressFiles(pressFiles)} title="Les plus récents" />
      <PressFiles pressFiles={selectPressFiles(pressFiles, AssetLabel.PressReview)} title="Revue de presse" />
      <PressFiles pressFiles={selectPressFiles(pressFiles, AssetLabel.PressRelease)} title="Communiqués" />
    </Layout>
  );
};
