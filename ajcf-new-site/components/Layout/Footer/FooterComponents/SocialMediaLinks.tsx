import React from "react";
import { FacebookFilled, TwitterSquareFilled, InstagramFilled, LinkedinFilled, YoutubeFilled } from "@ant-design/icons";
import styles from "../Footer.module.scss";

export const SocialMediaLinks = () => {
  return (
    <div className={styles.socialMediaLinks}>
      <h3>Nous suivre</h3>
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
