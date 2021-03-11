import React from "react";
import styles from "./EducationAJCF.module.scss";

const educationPartners = [
  {
    id: 1,
    logo: "Logo",
  },
  {
    id: 2,
    logo: "Logo",
  },
  {
    id: 3,
    logo: "Logo",
  },
  {
    id: 4,
    logo: "Logo",
  },
  {
    id: 5,
    logo: "Logo",
  },
  {
    id: 6,
    logo: "Logo",
  },
];

export const OurPartners = () => {
  return (
    <section className={styles.ourPartnersSection}>
      <h2>Nos Partenaires</h2>
      <p className="texte1">
        Et has minim elitr intellegat. Mea aeterno eleifend antiopam ad, nam no suscipit quaerendum. At nam minimum
        ponderum. Est audiam animal molestiae te.
      </p>
      <ul>
        {educationPartners.map((educationPartner) => (
          <li key={educationPartner.id}>
            <div className="capsHeading">{educationPartner.logo}</div>
          </li>
        ))}
      </ul>
    </section>
  );
};
