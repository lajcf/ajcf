import React from "react";
import styles from "../Footer.module.scss";
import { FacebookFilled, TwitterSquareFilled, InstagramFilled, LinkedinFilled, YoutubeFilled } from "@ant-design/icons";

export const SocialMediaLinks = () => {
  return (
    <div className={styles.socialMediaLinks}>
      <h4 className={styles.followUs}>Nous suivre</h4>
      <ul className={styles.socialMediaList}>
        <li>
          <FacebookFilled />
        </li>
        <li>
          <TwitterSquareFilled />
        </li>
        <li>
          <InstagramFilled />
        </li>
        <li>
          <LinkedinFilled />
        </li>
        <li>
          <YoutubeFilled />
        </li>
      </ul>
    </div>
  );
};
