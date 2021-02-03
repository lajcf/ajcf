import React from "react";
import Link from "next/link";
import styles from "./Header.module.scss";
import { DonateButton } from "./DonateButton";
import { SubscribeButton } from "./SubscribeButton";

export const UserButtons = () => {
  return (
    <div className={styles.userButtons}>
      <Link href="/faire-un-don">
        <a>
          <DonateButton />
        </a>
      </Link>
      <Link href="/adherer">
        <a>
          <SubscribeButton />
        </a>
      </Link>
    </div>
  );
};
