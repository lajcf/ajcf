import React from "react";
import { FacebookFilled, TwitterSquareFilled, InstagramFilled, LinkedinFilled, YoutubeFilled } from "@ant-design/icons";
import styles from "./Footer.module.scss";

const socialMediaLinks = [
  {
    logo: <FacebookFilled />,
    link: "https://www.facebook.com/lajcf",
  },
  {
    logo: <TwitterSquareFilled />,
    link: "https://twitter.com/ajcf_fr",
  },
  {
    logo: <InstagramFilled />,
    link: "https://www.instagram.com/ajcf_fr",
  },
  {
    logo: <LinkedinFilled />,
    link: "https://www.linkedin.com/company/ajcf-paris",
  },
  {
    logo: <YoutubeFilled />,
    link: "https://www.youtube.com/channel/UCYouUkcJvWwNiBLtYGCicbw",
  },
];

export const SocialMediaLinks = () => {
  return (
    <div className={styles.socialMediaLinks}>
      <h3>Nous suivre</h3>
      <ul className={styles.socialMediaList}>
        {socialMediaLinks.map((link) => (
          <li key={link.link}>
            <a href={link.link} target="_blank" rel="noopener noreferrer">
              {link.logo}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};
