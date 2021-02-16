import React from "react";
import { ArticlePreviewFragment } from "../../../../types/types";
import styles from "./Carousel.module.scss";

// const titleContent = `Être "Jeune Chinois de France", quel sens aujourd'hui?`;
const textContent =
  "Et has minim elitr intellegat. Mea aeterno eleifend antiopam ad, nam no suscipit quaerendum. At nam minimum ponderum. Est audiam animal molestiae te. Ex duo eripuit mentitum.";
export const Carousel = ({ articles }: { articles: ArticlePreviewFragment[] }) => {
  return (
    <section className={styles.carousel}>
      <figure className={styles.image}>
        <div>Image</div>
      </figure>
      <h3 className="capsHeading">À la Une du Blog</h3>
      {/* <h2>{titleContent}</h2> */}
      <h2>{articles[0].title}</h2>
      <p>{textContent}</p>
      <div>
        <button type="button">Lire l'article</button>
      </div>
    </section>
  );
};
