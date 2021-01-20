import React from "react";
import { ActivitiesLogosProps } from "./EspaceContent";
import styles from "./OurEspaces.module.scss";

export const ActivitiesLogos = ({ activitiesContent }: ActivitiesLogosProps) => {
  return (
    <div className={styles.activitiesContent}>
      {activitiesContent.map((activityContent) => (
        <div key={activityContent.name} className={styles.activityContent}>
          <div className={styles.activityLogoFrame}>{activityContent.logo}</div>
          <h3 className={styles.activityName}>{activityContent.name}</h3>
        </div>
      ))}
    </div>
  );
};
