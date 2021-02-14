import Link from "next/link";
import React from "react";
import { dayjs } from "../../../lib/utils/dayjs";
import { formatContentSummary } from "../../../lib/utils/formatContentSummary";
import { ArticlePreviewFragment } from "../../../types/types";
import styles from "./BlogContainer.module.scss";

export const ArticlePreview = ({ article }: { article: ArticlePreviewFragment }) => {
  const contentSummary = formatContentSummary(article.content.text, 140);
  return (
    <Link href={`/blog/${article.id}`}>
      <a>
        <div className={styles.preview}>
          {article.cover?.url && (
            <div className={styles.previewCover}>
              <img src={article.cover.url} />
            </div>
          )}
          <h2 className={styles.previewTitle}>{article.title}</h2>
          <p className={styles.previewAuthor}>
            {article.author} ({dayjs(article.createdAt).fromNow()})
          </p>
          <small className={styles.previewContentSummary}>{contentSummary}</small>
          <hr className={styles.separator} />
        </div>
      </a>
    </Link>
  );
};
