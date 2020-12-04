import { Button } from "antd";
import React from "react";
import styles from "./Espaces.module.scss";
import { EspacesCards } from "./EspacesCards";

export const Espaces = () => {
  return (
    <section className={styles.espaces}>
      <h3 className={styles.categoryName}>{`Nos Espaces`.toUpperCase()}</h3>
      <h2>Fédérer la jeunesse</h2>
      <p>
        A travers nos 4 espaces, nous aidons la jeunesse franco-chinoise à s’exprimer et à monter leurs projets allant
        des conférences débats aux ateliers de développement personnel.
      </p>
      <EspacesCards />
      <Button className={styles.learnMoreButton} type="primary">
        En savoir plus
      </Button>
    </section>
  );
};
