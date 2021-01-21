import React from "react";
import Link from "next/link";

export const Summary = () => {
  return (
    <section>
      <h1>Presse</h1>
      <div>
        <Link href="#revue-de-presse">Revue de presse</Link>
        <Link href="#communiques">Communiqués</Link>
      </div>
    </section>
  );
};
