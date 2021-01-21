import React from "react";
import { Activities } from "./Activities";
import styles from "./OurEspaces.module.scss";
import { EspaceContent } from "./ourEspacesConfig";

type EspaceContentProps = {
  espaceContent: EspaceContent;
};

export const Espace = ({ espaceContent }: EspaceContentProps) => {
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
          <Activities activitiesContent={espaceContent.activities} />
        </div>
      </div>
    </section>
  );
};
