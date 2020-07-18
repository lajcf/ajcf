import React from "react";
import { Link } from "gatsby";
import { css } from "@emotion/core";

export const advantagesListStyle = css`
  li {
    font-size: 1.3em;
  }
`;

export const DescriptionComponent = () => {
  return (
    <>
      <h1>Devenir membre de l'AJCF</h1>
      <p>
        L’AJCF est un lieu d’échanges et de solidarité, composé de 4 espaces que nous t’invitons à découvrir en
        parcourant le site, mais aussi sur nos réseaux sociaux. Pour nous rencontrer, il suffit de participer à nos
        événements qui ont lieu très régulièrement !
      </p>
      <p>Adhérer à l’AJCF, c’est manifester son soutien à notre association et aux idéaux que nous portons.</p>
      <p>De plus, l’adhésion à l’AJCF offre les avantages suivants, pour une durée d’un an renouvelable :</p>
      <div css={advantagesListStyle}>
        <ol>
          <li> bénéficier de tarifs préférentiels pour nos activités payantes; </li>
          <li> recevoir en avant-première le calendrier des événements du mois suivant;</li>
          <li> participer et voter à l’Assemblée Générale de l’AJCF.</li>
        </ol>
      </div>
      <p>
        Enfin, si tu le souhaites, l’adhésion permet de devenir un membre adhérent actif et de contribuer directement à
        l’organisation des événements de l’association. Nous ne serons jamais trop dans cette grande aventure ! En
        effet, la vie de l’AJCF repose uniquement sur l’énergie et le temps accordés par nos bénévoles. Si toi aussi, tu
        souhaites apporter une pierre à l’édifice « AJCF », contacte-nous en remplissant{" "}
        <a href="https://forms.gle/Waf4UxScggWfb3C26">ce formulaire</a>.
      </p>
      <p>
        Et, si tu as encore des questions, n’hésite pas à nous contacter via{" "}
        <Link to="/contact/">le formulaire de contact.</Link>
      </p>
    </>
  );
};
