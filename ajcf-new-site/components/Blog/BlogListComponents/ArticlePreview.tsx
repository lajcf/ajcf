import React from "react";
import { truncate } from "lodash";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import { Article } from "../../../types/types";
import styles from "./BlogList.module.scss";

require("dayjs/locale/fr");

dayjs.locale("fr");

dayjs.extend(relativeTime);

const filterContentSummary = (content: string) => {
  const truncatedContentSummary = truncate(content, { length: 140 });
  return truncatedContentSummary.replace("\\n", ". ");
};

export const ArticlePreview = ({ article }: { article: Article }) => {
  const contentSummary = filterContentSummary(article.content.text);
  return (
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
  );
};
