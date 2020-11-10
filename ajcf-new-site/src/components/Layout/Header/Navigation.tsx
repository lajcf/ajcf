import React from "react";

export const Navigation = ({ className }: any) => {
  return (
    <nav className={className}>
      <ul>
        <li>À propos de nous</li>
        <li>Projets AJCF</li>
        <li>Actualité</li>
        <li>Contact</li>
      </ul>
    </nav>
  );
};
