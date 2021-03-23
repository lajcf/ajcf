import React from "react";
import { EspacesActivities } from "./EspacesActivities";
import styles from "./OurEspaces.module.scss";
import { EspaceContent } from "./ourEspacesConfig";

type EspaceContentProps = {
  espaceContent: EspaceContent;
};

export const EspaceItem = ({ espaceContent }: EspaceContentProps) => {
  return (
    <section className={styles.espaceSection}>
      <div className={styles.emptySection} />
      <div className={styles.logoFrame}>
        {espaceContent.logo}
        <h3>{espaceContent.categoryName}</h3>
      </div>
      <div className={styles.contentContainer}>
        <div className={styles.sectionContent}>
          <h3 className="capsHeading">{`Espace ${espaceContent.categoryName}`}</h3>
          <h2>{espaceContent.title}</h2>
          <p>{espaceContent.text}</p>
          <div className={styles.activitiesList}>
            <h3>Les activités</h3>
            <EspacesActivities activitiesContent={espaceContent.activities} />
          </div>
        </div>
      </div>
    </section>
  );
};
