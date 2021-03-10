import React from "react";

export type QuoteCard = {
  text: string;
  author: string;
  authorRole: string;
};

const cards: QuoteCard[] = [
  {
    text: `Est tation latine aliquip id, mea ad tale illud definitiones. Periculis omittantur necessitatibus eum ad, pro eripuit minimum comprehensam ne, usu cu stet.`,
    author: `Sacha Lin`,
    authorRole: `Co-Fondateur de l'AJCF`,
  },
  {
    text: `Est tation latine aliquip id, mea ad tale illud definitiones. Periculis omittantur necessitatibus eum ad, pro eripuit minimum comprehensam ne, usu cu stet.`,
    author: `Soudan XXX`,
    authorRole: `Membre active en 2018`,
  },
];

export const TestimoniesCarousel = () => {
  return (
    <div>
      {cards.map((card) => (
        <div key={card.author}>
          <p>{card.text}</p>
          <h5>{card.author}</h5>
          <h6>{card.authorRole}</h6>
        </div>
      ))}
    </div>
  );
};
