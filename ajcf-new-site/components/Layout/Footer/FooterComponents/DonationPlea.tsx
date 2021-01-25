import React from "react";
import Link from "next/link";
import { Button } from "antd";
import styles from "../Footer.module.scss";

export const DonationPlea = () => {
  return (
    <div className={styles.donationPlea}>
      <h3 className={styles.donationText}>Envie de nous soutenir?</h3>
      <Link href="/faire-un-don">
        <a>
          <Button type="primary" size="large" shape="round" block className={styles.donationButton}>
            Faire un don
          </Button>
        </a>
      </Link>
    </div>
  );
};
