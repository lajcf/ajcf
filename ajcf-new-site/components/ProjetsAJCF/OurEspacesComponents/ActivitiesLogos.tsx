import React from "react";
import { ActivitiesContentProps } from "./EspaceTalk";
import styles from "./OurEspaces.module.scss";

export const ActivitiesLogos = ({ activitiesContent }: { activitiesContent: ActivitiesContentProps[] }) => {
  return (
    <div className={styles.activitiesContent}>
      {activitiesContent.map((activityContent) => (
        <div key={activityContent.name} className={styles.activityContent}>
          <div className={styles.activityLogoFrame}>{activityContent.logo}</div>
          <h3>{activityContent.name}</h3>
        </div>
      ))}
    </div>
  );
};
