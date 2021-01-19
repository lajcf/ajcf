import React from "react";
import { EspaceEnjoy } from "./EspaceEnjoy";
import { EspaceLearn } from "./EspaceLearn";
import { EspaceMeet } from "./EspaceMeet";
import { EspaceTalk } from "./EspaceTalk";

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
      <EspaceTalk />
      <EspaceLearn />
      <EspaceMeet />
      <EspaceEnjoy />
    </main>
  );
};
