import React from "react";
import { CoffeeOutlined, CommentOutlined, RadarChartOutlined, TeamOutlined } from "@ant-design/icons";
import styles from "./Espaces.module.scss";
import { EspaceDescription } from "./EspaceDescription";

export type EspaceContent = {
  name: string;
  logo: React.ForwardRefExoticComponent<any>;
  className: string;
  text: string;
  linkText: string;
};

const espacesContent: EspaceContent[] = [
  {
    name: "Espace TALK",
    logo: CommentOutlined,
    className: styles.talk,
    text: "At eripuit signiferumque sea, vel ad mucius molestie, cu labitur iuvaret vulputate sed.",
    linkText: "Découvrir",
  },
  {
    name: "Espace LEARN",
    logo: RadarChartOutlined,
    className: styles.learn,
    text: "At eripuit signiferumque sea, vel ad mucius molestie, cu labitur iuvaret vulputate sed.",
    linkText: "Découvrir",
  },
  {
    name: "Espace MEET",
    logo: TeamOutlined,
    className: styles.meet,
    text: "At eripuit signiferumque sea, vel ad mucius molestie, cu labitur iuvaret vulputate sed.",
    linkText: "Découvrir",
  },
  {
    name: "Espace ENJOY",
    logo: CoffeeOutlined,
    className: styles.enjoy,
    text: "At eripuit signiferumque sea, vel ad mucius molestie, cu labitur iuvaret vulputate sed.",
    linkText: "Découvrir",
  },
];

export const EspacesDescriptions = () => {
  return (
    <div className={styles.espacesDescriptions}>
      {espacesContent.map((espace) => (
        <EspaceDescription key={espace.name} espace={espace} />
      ))}
    </div>
  );
};
