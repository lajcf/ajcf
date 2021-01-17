import React from "react";
import { CoffeeOutlined, CommentOutlined, RadarChartOutlined, TeamOutlined } from "@ant-design/icons";
import styles from "./ProjetsAJCFContainer.module.scss";

export type EspaceCard = {
  name: string;
  logo: React.ForwardRefExoticComponent<any>;
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

const EspaceCard = ({ espace }: { espace: EspaceCard }) => {
  const Logo = espace.logo;
  return (
    <div key={espace.name} className={styles.espaceCard}>
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
