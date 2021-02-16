import { AimOutlined, NotificationTwoTone, RocketTwoTone, SmileTwoTone } from "@ant-design/icons";
import React from "react";
import { EspaceDescription } from "./EspaceDescription";
import styles from "./Espaces.module.scss";

export type EspaceContent = {
  name: string;
  logo: React.ForwardRefExoticComponent<any>;
  text: string;
  linkText: string;
};

const espacesContent: EspaceContent[] = [
  {
    name: "Espace TALK",
    logo: NotificationTwoTone,
    text: "Comprendre et défendre l'identité franco-chinoise.",
    linkText: "Découvrir",
  },
  {
    name: "Espace LEARN",
    logo: RocketTwoTone,
    text: "Se développer et explorer de nouveaux horizons.",
    linkText: "Découvrir",
  },
  {
    name: "Espace MEET",
    logo: AimOutlined,
    text: "Connaître et intégrer le réseau des jeunes franco-chinois.",
    linkText: "Découvrir",
  },
  {
    name: "Espace ENJOY",
    logo: SmileTwoTone,
    text: "Partager sa culture franco-chinoise avec d'autres.",
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
