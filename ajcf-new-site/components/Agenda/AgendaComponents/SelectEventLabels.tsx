import { Button } from "antd";
import React from "react";
import { EventLabel } from "../../../types/types";
import styles from "./Agenda.module.scss";

type SelectEventLabelsProps = {
  setSelectedEventLabel: (eventLabel?: EventLabel) => void;
};
export const SelectEventLabels = ({ setSelectedEventLabel }: SelectEventLabelsProps) => {
  return (
    <ul className={styles.labelsList}>
      <li key="allEvents">
        <Button type="primary" onClick={() => setSelectedEventLabel(undefined)}>
          Tous les événements
        </Button>
      </li>
      {Object.values(EventLabel).map((eventLabel) => (
        <li key={eventLabel}>
          <Button type="primary" onClick={() => setSelectedEventLabel(eventLabel)}>
            #{eventLabel}
          </Button>
        </li>
      ))}
    </ul>
  );
};
