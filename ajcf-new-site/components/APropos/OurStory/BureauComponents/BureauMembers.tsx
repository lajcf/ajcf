import React from "react";
import styles from "../OurStory.module.scss";

const bureauMembers = [
  {
    name: `Laetitia CHHIV`,
    role: `Présidente`,
    occupation: `Doctorante à l'EHESS`,
    picture: require("../../../../public/Images/About us/aboutus_laetitia.jpg"),
  },
  {
    name: `Daniel TRAN`,
    role: `Vice-Président`,
    occupation: `Consultant en Gestion de patrimoine`,
    picture: require("../../../../public/Images/About us/aboutus_daniel.jpg"),
  },
  {
    name: `Flora MAÏNO`,
    role: `Vice-Présidente`,
    occupation: `Consultante en Communication digitale`,
    picture: require("../../../../public/Images/About us/aboutus_flora.jpg"),
  },
  {
    name: `Huanyu REN`,
    role: `Secrétaire`,
    occupation: `Auto-entrepeneur`,
    picture: require("../../../../public/Images/About us/aboutus_huanyu.jpg"),
  },
  {
    name: `Antoine LAM`,
    role: `Trésorier`,
    occupation: `Consultant en Contrôle de gestion`,
    picture: require("../../../../public/Images/About us/aboutus_antoine.jpg"),
  },
];

export const BureauMembers = () => {
  return (
    <ul>
      {bureauMembers.map((bureauMember) => (
        <li key={bureauMember.name}>
          <div className={styles.bureauMemberPictureContainer}>
            <img src={bureauMember.picture} />
          </div>
          <h4>{bureauMember.name}</h4>
          <h5>({bureauMember.role})</h5>
          <p>{bureauMember.occupation}</p>
        </li>
      ))}
    </ul>
  );
};
