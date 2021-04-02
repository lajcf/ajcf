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
    name: "Ilana Debris",
    role: "Coordinatrice",
    description: "Étudiante",
    picture: require("../../../public/Images/Antennes/antennes_ilana.jpg"),
  },
  {
    id: 2,
    name: "Claire Song",
    role: "Coordinatrice",
    description: "Project-manager",
    picture: require("../../../public/Images/Antennes/antennes_claire.jpg"),
  },
];

export const AntennaAJCFLyon = () => {
  return (
    <section className={styles.lyonAntennaSection}>
      <h2 className="capsHeading">Antenne AJCF Lyon</h2>
      <p>
        L’antenne de Lyon a pour objectif de développer les activités de l’AJCF dans la région lyonnaise, d’y recruter
        de nouveaux membres, et d’adapter les actions selon les besoins locaux. Nous aimerions également nous faire
        connaître auprès des jeunes Chinois de Lyon et des acteurs lyonnais, mais aussi de toutes personnes intéressées.
      </p>
      <div className={styles.teamSection}>
        <h3>L’équipe AJCF Lyon</h3>
        <ul className={styles.teamList}>
          {lyonTeam.map((member) => (
            <li key={member.id}>
              <div className={styles.memberImageFrame}>
                <img src={member.picture} />
              </div>
              <h4>{member.name}</h4>
              <h5>{member.role}</h5>
              <h6>{member.description}</h6>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};
