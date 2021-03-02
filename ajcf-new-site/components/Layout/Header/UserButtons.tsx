import Link from "next/link";
import React from "react";
import styles from "./Header.module.scss";

export const UserButtons = () => {
  return (
    <div className={styles.userButtons}>
      <Link href="/faire-un-don">
        <a>
          <button type="button" className={styles.donateButton}>
            Faire un don
          </button>
        </a>
      </Link>
      <Link href="/adherer">
        <a>
          <button type="button">Adhérer</button>
        </a>
      </Link>
    </div>
  );
};
