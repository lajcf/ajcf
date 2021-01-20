import React from "react";
import { EspaceContent } from "./EspaceContent";
import { ourEspacesContent } from "./ourEspacesConfig";

export const OurEspacesContainer = () => {
  return (
    <main>
      <section>
        <h1>Nos espaces</h1>
        <p className="texte1">
          Et has minim elitr intellegat. Mea aeterno eleifend antiopam ad, nam no suscipit quaerendum. At nam minimum
          ponderum. Est audiam animal molestiae te. Et has minim elitr intellegat. Mea aeterno eleifend antiopam ad, nam
          no suscipit quaerendum. At nam minimum ponderum
        </p>
      </section>
      {ourEspacesContent.map((espace) => (
        <EspaceContent key={espace.categoryName} espaceContent={espace} />
      ))}
    </main>
  );
};
