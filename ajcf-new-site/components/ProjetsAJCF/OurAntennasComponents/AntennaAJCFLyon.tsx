import React from "react";
import styles from "./OurAntennas.module.scss";

type AntennaTeamProps = {
  id: number;
  name: string;
  role: string;
  description: string;
};

const lyonTeam = [
  {
    id: 1,
    name: "Ilana debris",
    role: "Coordinatrice",
    description: "Fonction",
  },
  {
    id: 2,
    name: "Ilana debris",
    role: "Coordinatrice",
    description: "Fonction",
  },
  {
    id: 3,
    name: "Ilana debris",
    role: "Coordinatrice",
    description: "Fonction",
  },
  {
    id: 4,
    name: "Ilana debris",
    role: "Coordinatrice",
    description: "Fonction",
  },
];

export const AntennaAJCFLyon = () => {
  return (
    <section className={styles.lyonAntennaSection}>
      <h2>Antenne AJCF Lyon</h2>
      <p className="texte1">
        Et has minim elitr intellegat. Mea aeterno eleifend antiopam ad, nam no suscipit quaerendum. At nam minimum
        ponderum. Est audiam animal molestiae te. Et has minim elitr intellegat. Mea aeterno eleifend antiopam ad, nam
        no suscipit quaerendum. At nam minimum ponderum
      </p>
      <div>
        <h3>L’équipe AJCF Lyon</h3>
        <ul className={styles.teamList}>
          {lyonTeam.map((member) => (
            <li key={member.id}>
              <div className={styles.memberImageFrame} />
              <h3>{member.name}</h3>
              <h4>{member.role}</h4>
              <p className="texte1">{member.description}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};
