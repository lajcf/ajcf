import Link from "next/link";
import React from "react";
import { Layout } from "../../Layout/Layout";
import { OUR_ESPACES } from "../OurEspacesComponents/ourEspacesConfig";
import styles from "./WhoAreWe.module.scss";

const OurEspacesList = () => {
  return (
    <ul>
      {OUR_ESPACES.map((espace) => (
        <Link key={espace.categoryName} href={`/a-propos/nos-espaces/#${espace.categoryName}`}>
          <a>
            <li>
              {espace.logo}
              <h3>Espace {espace.categoryName}</h3>
            </li>
          </a>
        </Link>
      ))}
    </ul>
  );
};
export const WhoAreWeContainer = () => {
  return (
    <Layout className={styles.layout}>
      <section className={styles.summarySection}>
        <h1>Qui sommes nous?</h1>
        <p>
          L’organisation des activités occupe la majeure partie de la vie de notre association. Les projets de l’AJCF
          sont divisés en différents pôles d’activité, regroupés dans 4 Espaces #TLME que nous allons détailler
          ci-dessous.
        </p>
      </section>
      <section className={styles.espacesSection}>
        <h3 className="capsHeading">Nos espaces</h3>
        <OurEspacesList />
        <Link href="/a-propos/nos-espaces">
          <button className="centered" type="button">
            En savoir plus
          </button>
        </Link>
      </section>
      <section className={styles.antennasSection}>
        <h3 className="capsHeading">Nos antennes</h3>
        <p>
          L’AJCF se développe également en dehors de Paris et de l’Ile-De-France, à travers ses antennes. Lyon, une
          ville jeune, dynamique et solidaire, mais deuxième foyer des communautés d’origine chinoise en France, a
          naturellement été choisie pour ouvrir la première antenne de l’AJCF.
        </p>
        <Link href="/a-propos/nos-antennes">
          <button className="centered" type="button">
            En savoir plus
          </button>
        </Link>
      </section>
      <section className={styles.educationSection}>
        <h3 className="capsHeading">Éducation AJCF</h3>
        <p>
          Le pôle Education réalise des interventions en milieu scolaire pour sensibiliser la jeunesse à l’histoire de
          l’immigration des Asiatiques, favoriser le dialogue multiculturel et intergénérationnel, et déconstruire les
          stéréotypes, afin de promouvoir le bien vivre-ensemble.
        </p>
        <Link href="/a-propos/education-ajcf">
          <button className="centered" type="button">
            En savoir plus
          </button>
        </Link>
      </section>
    </Layout>
  );
};
