import React from "react";
import removeMarkdown from "remove-markdown";
import { formatContentSummary } from "../../../lib/utils/formatContentSummary";
import { ArticlePreviewFragment } from "../../../types/types";
import styles from "./ArticleContainer.module.scss";
import { AJCFImage } from "../../../lib/utils/AJCFImage";

export const ArticleRecommendationPreview = ({ article }: { article: ArticlePreviewFragment }) => {
  const contentSummary = formatContentSummary(removeMarkdown(article.content), 80);
  return (
    <>
      {article.cover?.url && (
        <div>
          <AJCFImage src={article.cover.url} />
        </div>
      )}
      <h3 className={styles.articleRecommendationTitle}>{article.title}</h3>
      <p className={styles.articleRecommendationSummary}>{contentSummary}</p>
    </>
  );
};
