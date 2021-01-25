import React from "react";
import { Layout } from "../../Layout/Layout";
import { ContactForm } from "./ContactForm";

export const ContactContainer = () => {
  return (
    <Layout>
      <section>
        <h1>Contactez nous ! </h1>
        <p className="texte1">
          Des projets à nous soumettre, des questions sur notre association ? Contactez-nous via ce formulaire, et notre
          équipe se fera un plaisir de vous répondre ! Vous pouvez également nous contacter directement par mail via
          l’adresse contact@lajcf.fr
        </p>
      </section>
      <ContactForm />
    </Layout>
  );
};
