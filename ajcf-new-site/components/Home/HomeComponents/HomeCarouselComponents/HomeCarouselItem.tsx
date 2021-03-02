import Link from "next/link";
import React from "react";
import removeMarkdown from "remove-markdown";
import { formatContentSummary } from "../../../../lib/utils/formatContentSummary";
import { ArticlePreviewFragment } from "../../../../types/types";
import styles from "./HomeCarousel.module.scss";

export const HomeCarouselItem = ({ article }: { article: ArticlePreviewFragment }) => {
  return (
    <div className={styles.carouselItem}>
      <div className={styles.image}>{article.cover && <img src={article.cover.url} />}</div>
      <div className={styles.text}>
        <h3 className="capsHeading">À la Une du Blog</h3>
        <h2>{article.title}</h2>
        <p>{formatContentSummary(removeMarkdown(article.content), 220)}</p>
        <div>
          <Link href={`/blog/${article.id}`}>
            <button type="button">Lire l'article</button>
          </Link>
        </div>
      </div>
    </div>
  );
};
