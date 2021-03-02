import { AimOutlined, NotificationOutlined, RocketOutlined, SmileOutlined } from "@ant-design/icons";
import React from "react";
import { EspaceDescription } from "./HomeEspaceDescription";
import styles from "./HomeEspaces.module.scss";

export type EspaceContent = {
  name: string;
  logo: React.ForwardRefExoticComponent<any>;
  text: string;
  link: string;
  linkText: string;
};

const espacesContent: EspaceContent[] = [
  {
    name: "Espace TALK",
    logo: NotificationOutlined,
    text: "Comprendre et défendre l'identité franco-chinoise.",
    link: "/projets-ajcf/nos-espaces",
    linkText: "Découvrir",
  },
  {
    name: "Espace LEARN",
    logo: RocketOutlined,
    text: "Se développer et explorer de nouveaux horizons.",
    link: "/projets-ajcf/nos-espaces",
    linkText: "Découvrir",
  },
  {
    name: "Espace MEET",
    logo: AimOutlined,
    text: "Connaître et intégrer le réseau des jeunes franco-chinois.",
    link: "/projets-ajcf/nos-espaces",
    linkText: "Découvrir",
  },
  {
    name: "Espace ENJOY",
    logo: SmileOutlined,
    text: "Partager sa culture franco-chinoise avec d'autres.",
    link: "/projets-ajcf/nos-espaces",
    linkText: "Découvrir",
  },
];

export const HomeEspacesDescriptions = () => {
  return (
    <div className={styles.espacesDescriptions}>
      {espacesContent.map((espace) => (
        <EspaceDescription key={espace.name} espace={espace} />
      ))}
    </div>
  );
};
