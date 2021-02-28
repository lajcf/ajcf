import React from "react";
import ReactMarkdown from "react-markdown";
import { ArticlePageFragment } from "../../../types/types";
import { BlogLabelsList } from "../BlogLabelsList";
import styles from "./ArticleContainer.module.scss";
import { dayjs } from "../../../lib/utils/dayjs";

export const Article = ({ article }: { article: ArticlePageFragment }) => {
  return (
    <>
      {article.cover && (
        <div className={styles.bannerContainer}>
          <img src={article.cover.url} />
        </div>
      )}
      <section className={styles.articleSection}>
        <BlogLabelsList blogLabels={article.blogLabels} />
        <h1>{article.title}</h1>
        <h3>{article.author}</h3>
        <h4>
          {article.optionalDate
            ? dayjs(article.optionalDate).format("DD MMM YYYY")
            : dayjs(article.createdAt).format("DD MMM YYYY")}
        </h4>
        <hr />
        <div className={styles.contentContainer}>
          <ReactMarkdown className={styles.content}>{article.content}</ReactMarkdown>
        </div>
      </section>
    </>
  );
};
