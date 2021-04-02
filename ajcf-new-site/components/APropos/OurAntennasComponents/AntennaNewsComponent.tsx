import Link from "next/link";
import React from "react";
import removeMarkdown from "remove-markdown";
import { CustomCarousel } from "../../../lib/utils/CustomCarouselComponents/CustomCarousel";
import { formatContentSummary } from "../../../lib/utils/formatContentSummary";
import { ArticlePreviewFragment } from "../../../types/types";
import styles from "./OurAntennas.module.scss";

const AntennaNewsItem = ({ article }: { article: ArticlePreviewFragment }) => {
  return (
    <div className={styles.antennaNewsItem}>
      <div>{article.cover && <img src={article.cover.url} />}</div>
      <div>
        <h4 className="capsHeading">Actualité</h4>
        <h3>{article.title}</h3>
        <p>{formatContentSummary(removeMarkdown(article.content), 220)}</p>
        <Link href={`/blog/${article.id}`}>
          <button type="button">Lire l'article</button>
        </Link>
      </div>
    </div>
  );
};

export const AntennaNewsComponent = ({ articles }: { articles: ArticlePreviewFragment[] }) => {
  return (
    <section className={styles.antennaNewsSection}>
      <CustomCarousel>
        {articles.map((article) => (
          <AntennaNewsItem article={article} key={article.id} />
        ))}
      </CustomCarousel>
    </section>
  );
};
