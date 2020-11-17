import React from "react";
import styles from "./Stats.module.scss";

type StatNumbers = {
  className: string;
  content: string;
};

const numbers: StatNumbers[] = [
  {
    className: styles.existence,
    content: `10 ans\nd'existence`,
  },
  {
    className: styles.activeMembers,
    content: `50\nmembres actifs`,
  },
  {
    className: styles.members,
    content: `300\nadhérents`,
  },
  {
    className: styles.followers,
    content: `6k\nfollowers`,
  },
];

export const NumbersList = () => {
  return (
    <ul className={styles.numbersList}>
      {numbers.map((number) => (
        <li key={number.className} className={`${number.className} ${styles.number}`}>
          <pre>{number.content}</pre>
        </li>
      ))}
    </ul>
  );
};
