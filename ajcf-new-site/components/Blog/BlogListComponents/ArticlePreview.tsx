import React from "react";
import { truncate } from "lodash";
import Link from "next/link";
import { ArticleFragment } from "../../../types/types";
import styles from "./BlogContainer.module.scss";
import { dayjs } from "../../../lib/utils/dayjs";

const formatContentSummary = (content: string) => {
  const truncatedContentSummary = truncate(content, { length: 140 });
  return truncatedContentSummary.replace("\\n", ". ");
};

export const ArticlePreview = ({ article }: { article: ArticleFragment }) => {
  const contentSummary = formatContentSummary(article.content.text);
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
