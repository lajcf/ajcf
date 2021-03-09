import React from "react";
import styles from "./Bureau.module.scss";

export type BureauMember = {
  name: string;
  role: string;
  occupation: string;
};

const bureauMembers: BureauMember[] = [
  {
    name: `Laetitia CHHIV`,
    role: `Présidente`,
    occupation: `Doctorante à l'EHESS`,
  },
  {
    name: `Daniel TRAN`,
    role: `Vice-Président`,
    occupation: `Consultant en Gestion de patrimoine`,
  },
  {
    name: `Flora MAÏNO`,
    role: `Vice-Présidente`,
    occupation: `Consultante en Communication digitale`,
  },
  {
    name: `Huanyu REN`,
    role: `Secrétaire`,
    occupation: `Auto-entrepeneur`,
  },
  {
    name: `Antoine LAM`,
    role: `Trésorier`,
    occupation: `Consultant en Contrôle de gestion`,
  },
];

export const BureauMembers = () => {
  return (
    <div className={styles.bureauMembers}>
      {bureauMembers.map((bureauMember) => (
        <div key={bureauMember.name} className={styles.bureauMember}>
          <div className={styles.picBubble}>Picture</div>
          <h4 className={styles.name}>{bureauMember.name}</h4>
          <h5 className={styles.role}>({bureauMember.role})</h5>
          <p className={styles.occupation}>{bureauMember.occupation}</p>
        </div>
      ))}
    </div>
  );
};
