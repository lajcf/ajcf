import React from "react";
import styles from "./Bureau.module.scss";

export type BureauMember = {
  name: string;
  role: string;
  occupation: string;
  className: string;
};

const bureauMembers: BureauMember[] = [
  {
    name: `Laetitia CHHIV`,
    role: `Présidente`,
    occupation: `Doctorante à l'EHESS`,
    className: styles.laetitia,
  },
  {
    name: `Daniel TRAN`,
    role: `Vice-Président`,
    occupation: `Consultant en Gestion de patrimoine`,
    className: styles.daniel,
  },
  {
    name: `Flora MAÏNO`,
    role: `Vice-Présidente`,
    occupation: `Consultante en Communication digitale`,
    className: styles.flora,
  },
  {
    name: `Huanyu REN`,
    role: `Secrétaire`,
    occupation: `Auto-entrepeneur`,
    className: styles.huanyu,
  },
  {
    name: `Antoine LAM`,
    role: `Trésorier`,
    occupation: `Consultant en Contrôle de gestion`,
    className: styles.antoine,
  },
];

export const BureauMembers = () => {
  return (
    <div className={styles.bureauMembers}>
      {bureauMembers.map((bureauMember) => (
        <div key={bureauMember.className} className={`${styles.bureauMember} ${bureauMember.className}`}>
          <div className={styles.picBubble}>Picture</div>
          <h4 className={styles.name}>{bureauMember.name}</h4>
          <h5 className={styles.role}>({bureauMember.role})</h5>
          <p className={styles.occupation}>{bureauMember.occupation}</p>
        </div>
      ))}
    </div>
  );
};
