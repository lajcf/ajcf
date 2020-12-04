import React, { ReactComponentElement, ReactNode } from "react";
import styles from "./Espaces.module.scss";
import { CoffeeOutlined, CommentOutlined, RadarChartOutlined, TeamOutlined } from "@ant-design/icons";

export type EspaceCard = {
  name: string;
  logo: React.ForwardRefExoticComponent<any>;
};

export type EspaceCardProps = {
  key: string;
  espace: EspaceCard;
};

const espaces: EspaceCard[] = [
  {
    name: "Espace Talk",
    logo: CommentOutlined,
  },
  {
    name: "Espace Learn",
    logo: RadarChartOutlined,
  },
  {
    name: "Espace Meet",
    logo: TeamOutlined,
  },
  {
    name: "Espace Enjoy",
    logo: CoffeeOutlined,
  },
];

export const EspaceCard = ({ key, espace }: EspaceCardProps) => {
  const Logo = espace.logo;
  return (
    <div key={key} className={styles.espaceCard}>
      <Logo className={styles.logo} />
      <h3 className={styles.text}>{espace.name}</h3>
    </div>
  );
};

export const EspacesCards = () => {
  return (
    <div className={styles.espacesCards}>
      {espaces.map((espace) => (
        <EspaceCard key={espace.name} espace={espace} />
      ))}
    </div>
  );
};
