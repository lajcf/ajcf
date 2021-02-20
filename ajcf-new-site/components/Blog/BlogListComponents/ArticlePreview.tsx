import Link from "next/link";
import React from "react";
import { dayjs } from "../../../lib/utils/dayjs";
import { formatContentSummary } from "../../../lib/utils/formatContentSummary";
import { ArticlePreviewFragment } from "../../../types/types";
import styles from "./BlogContainer.module.scss";

export const ArticlePreview = ({ article }: { article: ArticlePreviewFragment }) => {
  const contentSummary = formatContentSummary(article.content.text, 140);
  return (
    <>
      <div className={styles.preview}>
        {article.cover && (
          <div className={styles.previewCover}>
            <Link href={`/blog/${article.id}`}>
              <a>
                <img src={article.cover.url} />
              </a>
            </Link>
          </div>
        )}
        <div className={styles.previewText}>
          <h3>{article.blogCategory}</h3>
          <Link href={`/blog/${article.id}`}>
            <a>
              <h2 className={styles.previewTitle}>{article.title}</h2>
            </a>
          </Link>
          <p className={styles.previewAuthor}>
            <em>
              {article.author} ({dayjs(article.createdAt).fromNow()})
            </em>
          </p>
          <p className={styles.previewContentSummary}>{contentSummary}</p>
          {article.blogLabels && (
            <ul className={styles.labelsList}>
              {article.blogLabels.map((label) => (
                <li key={label}>#{label}</li>
              ))}
            </ul>
          )}
        </div>
      </div>
      <hr className="separator" />
    </>
  );
};
