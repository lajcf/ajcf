import React from "react";
import CountUp from "react-countup";
import VisibilitySensor from "react-visibility-sensor";
import styles from "./HomeStats.module.scss";

type StatNumbers = {
  number: number;
  suffix?: string;
  text: string;
};

const numbers: StatNumbers[] = [
  {
    number: 11,
    text: "années d'existence",
  },
  {
    number: 56,
    text: "membres actifs",
  },
  {
    number: 367,
    text: "adhérents",
  },
  {
    number: 11,
    suffix: "k",
    text: "followers",
  },
];

export const HomeStatsList = () => {
  return (
    <VisibilitySensor>
      {({ isVisible }) => (
        <ul className={styles.statsList}>
          {numbers.map((number) => (
            <li key={number.text}>
              <div className={styles.number}>
                {isVisible ? <CountUp end={number.number} /> : `${number.number}`}
                {number.suffix}
              </div>
              <h3 className={styles.text}>{number.text}</h3>
            </li>
          ))}
        </ul>
      )}
    </VisibilitySensor>
  );
};
