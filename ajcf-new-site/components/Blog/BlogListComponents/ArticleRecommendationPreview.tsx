import React from "react";
import removeMarkdown from "remove-markdown";
import { formatContentSummary } from "../../../lib/utils/formatContentSummary";
import { ArticlePreviewFragment } from "../../../types/types";
import styles from "./ArticleContainer.module.scss";

export const ArticleRecommendationPreview = ({ article }: { article: ArticlePreviewFragment }) => {
  const contentSummary = formatContentSummary(removeMarkdown(article.content), 80);
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
