import React from "react";
import styles from "../Footer.module.scss";
import { Button } from "antd";

export const DonationPlea = () => {
  return (
    <div className={styles.donationPlea}>
      <h3 className={styles.donationText}>Envie de nous soutenir?</h3>
      <Button type="primary" className={styles.donationButton}>
        Faire un don
      </Button>
    </div>
  );
};
