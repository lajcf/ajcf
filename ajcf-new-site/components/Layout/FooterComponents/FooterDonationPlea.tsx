import React from "react";
import Link from "next/link";
import styles from "./Footer.module.scss";

export const FooterDonationPlea = () => {
  return (
    <div className={styles.donationPlea}>
      <h3>Envie de nous soutenir?</h3>
      <Link href="/faire-un-don">
        <button type="button" className="big-button">
          Faire un don
        </button>
      </Link>
    </div>
  );
};
