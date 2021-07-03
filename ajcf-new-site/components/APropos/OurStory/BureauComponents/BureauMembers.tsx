import React from "react";
import styles from "../OurStory.module.scss";
import laetitia from "../../../../public/Images/About us/aboutus_laetitia.jpg";
import daniel from "../../../../public/Images/About us/aboutus_daniel.jpg";
import flora from "../../../../public/Images/About us/aboutus_flora.jpg";
import huanyu from "../../../../public/Images/About us/aboutus_huanyu.jpg";
import antoine from "../../../../public/Images/About us/aboutus_antoine.jpg";
import { AJCFImage } from "../../../../lib/utils/AJCFImage";

const bureauMembers = [
  {
    name: `Laetitia CHHIV`,
    role: `Présidente`,
    occupation: `Doctorante à l'EHESS`,
    picture: laetitia,
  },
  {
    name: `Daniel TRAN`,
    role: `Vice-Président`,
    occupation: `Consultant en Gestion de patrimoine`,
    picture: daniel,
  },
  {
    name: `Flora MAÏNO`,
    role: `Vice-Présidente`,
    occupation: `Consultante en Communication digitale`,
    picture: flora,
  },
  {
    name: `Huanyu REN`,
    role: `Secrétaire`,
    occupation: `Auto-entrepreneur`,
    picture: huanyu,
  },
  {
    name: `Antoine LAM`,
    role: `Trésorier`,
    occupation: `Consultant en Contrôle de gestion`,
    picture: antoine,
  },
];

export const BureauMembers = () => {
  return (
    <ul>
      {bureauMembers.map((bureauMember) => (
        <li key={bureauMember.name}>
          <div className={styles.bureauMemberPictureContainer}>
            <AJCFImage src={bureauMember.picture} />
          </div>
          <h4>{bureauMember.name}</h4>
          <h5>({bureauMember.role})</h5>
          <p>{bureauMember.occupation}</p>
        </li>
      ))}
    </ul>
  );
};
