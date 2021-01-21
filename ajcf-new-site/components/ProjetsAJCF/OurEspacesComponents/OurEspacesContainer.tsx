import React from "react";
import { Espace } from "./Espace";
import { ourEspacesContent } from "./ourEspacesConfig";
import { Layout } from "../../Layout/Layout";

export const OurEspacesContainer = () => {
  return (
    <Layout>
      <main>
        <section>
          <h1>Nos espaces</h1>
          <p className="texte1">
            Et has minim elitr intellegat. Mea aeterno eleifend antiopam ad, nam no suscipit quaerendum. At nam minimum
            ponderum. Est audiam animal molestiae te. Et has minim elitr intellegat. Mea aeterno eleifend antiopam ad,
            nam no suscipit quaerendum. At nam minimum ponderum
          </p>
        </section>
        {ourEspacesContent.map((espace) => (
          <Espace key={espace.categoryName} espaceContent={espace} />
        ))}
      </main>
    </Layout>
  );
};
