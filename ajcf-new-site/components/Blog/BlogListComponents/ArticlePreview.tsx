import Link from "next/link";
import React from "react";
import removeMarkdown from "remove-markdown";
import { dayjs } from "../../../lib/utils/dayjs";
import { formatContentSummary } from "../../../lib/utils/formatContentSummary";
import { ArticlePreviewFragment } from "../../../types/types";
import { BlogLabelsList } from "../BlogLabelsList";
import styles from "./ArticlePreview.module.scss";

export const ArticlePreview = ({ article }: { article: ArticlePreviewFragment }) => {
  const contentSummary = formatContentSummary(removeMarkdown(article.content), 140);
  return (
    <li className={styles.previewItem}>
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
            <h2>{article.title}</h2>
          </a>
        </Link>
        <p>
          <em>
            {article.author} (
            {article.optionalPublishedDate
              ? dayjs(article.optionalPublishedDate).fromNow()
              : dayjs(article.createdAt).fromNow()}
            )
          </em>
        </p>
        <p>{contentSummary}</p>
        <BlogLabelsList blogLabels={article.blogLabels} />
      </div>
    </li>
  );
};
