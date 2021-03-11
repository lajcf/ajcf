import React from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import VisibilitySensor from "react-visibility-sensor";
import "react-circular-progressbar/dist/styles.css";
import styles from "./HomeStats.module.scss";

type StatNumber = {
  AJCFNumbers: number;
  suffix?: string;
  text: string;
};

const numbers: StatNumber[] = [
  {
    AJCFNumbers: 11,
    text: "années d'existence",
  },
  {
    AJCFNumbers: 56,
    text: "membres actifs",
  },
  {
    AJCFNumbers: 367,
    text: "adhérents",
  },
  {
    AJCFNumbers: 11,
    suffix: "k",
    text: "followers",
  },
];

const StatNumber = ({ isVisible, number }: { isVisible: boolean; number: StatNumber }) => {
  const statColor = "#f85134";
  return (
    <div className={styles.number}>
      <CircularProgressbar
        value={isVisible ? 100 : 0}
       text={`${isVisible ? number.AJCFNumbers : 0}${number.suffix ? number.suffix : ""}`}
        styles={buildStyles({
          textColor: statColor,
          pathColor: statColor,
          pathTransitionDuration: 3,
        })}
      />
    </div>
  );
};

export const HomeStatsList = () => {
  return (
    <VisibilitySensor>
      {({ isVisible }) => (
        <ul className={styles.statsList}>
          {numbers.map((number) => (
            <li key={number.text}>
              <StatNumber isVisible={isVisible} number={number} />
              <h3 className={styles.text}>{number.text}</h3>
            </li>
          ))}
        </ul>
      )}
    </VisibilitySensor>
  );
};
