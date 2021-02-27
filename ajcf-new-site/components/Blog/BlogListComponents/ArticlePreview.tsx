import Link from "next/link";
import React from "react";
import removeMarkdown from "remove-markdown";
import { dayjs } from "../../../lib/utils/dayjs";
import { formatContentSummary } from "../../../lib/utils/formatContentSummary";
import { ArticlePreviewFragment } from "../../../types/types";
import { BlogLabelsList } from "../BlogLabelsList";
import styles from "./BlogContainer.module.scss";

export const ArticlePreview = ({ article }: { article: ArticlePreviewFragment }) => {
  const contentSummary = formatContentSummary(removeMarkdown(article.content), 140);
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
              {article.author} (
              {article.optionalDate ? dayjs(article.optionalDate).fromNow() : dayjs(article.createdAt).fromNow()})
            </em>
          </p>
          <p className={styles.previewContentSummary}>{contentSummary}</p>
          <BlogLabelsList blogLabels={article.blogLabels} />
        </div>
      </div>
      <hr className="separator" />
    </>
  );
};
