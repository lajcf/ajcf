import React from "react";
import { ArticlePreviewFragment } from "../../../types/types";
import styles from "./ArticleContainer.module.scss";
import { formatContentSummary } from "./formatContentSummary";

export const ArticleRecommendationPreview = ({ article }: { article: ArticlePreviewFragment }) => {
  const contentSummary = formatContentSummary(article.content.text, 80);
  return (
    <div className={styles.articleRecommendationPreview}>
      {article.cover?.url && (
        <div className={styles.articleRecommendationCover}>
          <img src={article.cover.url} />
        </div>
      )}
      <h3 className={styles.articleRecommendationTitle}>{article.title}</h3>
      <small className={styles.articleRecommendationSummary}>{contentSummary}</small>
    </div>
  );
};
