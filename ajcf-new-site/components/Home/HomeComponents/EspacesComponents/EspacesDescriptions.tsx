import React from "react";
import styles from "./Espaces.module.scss";
import { CommentOutlined, RadarChartOutlined, TeamOutlined, CoffeeOutlined } from "@ant-design/icons";

const espacesContent = [
  {
    name: "Espace TALK",
    logo: CommentOutlined,
    className: `${styles.talk}`,
    text: "At eripuit signiferumque sea, vel ad mucius molestie, cu labitur iuvaret vulputate sed.",
    linkText: "Découvrir",
  },
  {
    name: "Espace LEARN",
    logo: RadarChartOutlined,
    className: `${styles.learn}`,
    text: "At eripuit signiferumque sea, vel ad mucius molestie, cu labitur iuvaret vulputate sed.",
    linkText: "Découvrir",
  },
  {
    name: "Espace MEET",
    logo: TeamOutlined,
    className: `${styles.meet}`,
    text: "At eripuit signiferumque sea, vel ad mucius molestie, cu labitur iuvaret vulputate sed.",
    linkText: "Découvrir",
  },
  {
    name: "Espace ENJOY",
    logo: CoffeeOutlined,
    className: `${styles.enjoy}`,
    text: "At eripuit signiferumque sea, vel ad mucius molestie, cu labitur iuvaret vulputate sed.",
    linkText: "Découvrir",
  },
];

export const EspacesDescriptions = () => {
  return (
    <div className={styles.espacesDescriptions}>
      {espacesContent.map((espace: any) => (
        <div key={espace.name} className={`${styles.espaceDescription} ${espace.className}`}>
          {React.createElement(espace.logo, {
            style: { fontSize: "2rem" },
          })}
          <h3>{espace.name}</h3>
          <p style={{ textAlign: "center" }}>{espace.text}</p>
          <a>{espace.linkText}</a>
        </div>
      ))}
    </div>
  );
};
