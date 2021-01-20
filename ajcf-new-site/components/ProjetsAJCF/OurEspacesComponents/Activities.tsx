import React from "react";
import styles from "./OurEspaces.module.scss";
import { ActivityContent } from "./ourEspacesConfig";

export type ActivitiesProps = {
  activitiesContent: ActivityContent[];
};

export const Activities = ({ activitiesContent }: ActivitiesProps) => {
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
