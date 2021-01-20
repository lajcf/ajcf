import React from "react";
import { ActivitiesLogos } from "./ActivitiesLogos";
import styles from "./OurEspaces.module.scss";

export type ActivitiesContentProps = {
  activitiesContent: {
    name: string;
    logo: JSX.Element;
  }[];
};

export type EspaceContentProps = {
  espaceContent: {
    categoryName: string;
    title: string;
    text: string;
    logo: JSX.Element;
    activities: ActivitiesContentProps["activitiesContent"];
  };
};

export const EspaceContent = ({ espaceContent }: EspaceContentProps) => {
  return (
    <section className={styles.espaceSection}>
      <div className={styles.logoFrame}>
        {espaceContent.logo}
        <h3>{espaceContent.categoryName}</h3>
      </div>
      <div className={styles.sectionContent}>
        <div className={`capsHeading ${styles.categoryName}`}>{espaceContent.categoryName}</div>
        <h2 className={styles.title}>{espaceContent.title}</h2>
        <p className={`texte1 ${styles.text}`}>{espaceContent.text}</p>
        <div className={styles.activitiesList}>
          <h3>Les activités</h3>
          <ActivitiesLogos activitiesContent={espaceContent.activities} />
        </div>
      </div>
    </section>
  );
};
