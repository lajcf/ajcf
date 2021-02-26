import React from "react";
import ReactMarkdown from "react-markdown";
import { Layout } from "../../Layout/Layout";
import styles from "./ArticleContainer.module.scss";
import { dayjs } from "../../../lib/utils/dayjs";
import { ArticleRecommendations } from "./ArticleRecommendations";
import { ArticlePreviewFragment, ArticlePageFragment } from "../../../types/types";

export type ArticleContainerProps = {
  article: ArticlePageFragment;
  articles: ArticlePreviewFragment[];
};

export const ArticleContainer = ({ article, articles }: ArticleContainerProps) => {
  return (
    <Layout>
      {article.cover && (
        <div className={styles.bannerContainer}>
          <img src={article.cover.url} />
        </div>
      )}
      <section className={styles.articleSection}>
        <ul className={styles.blogLabels}>
          {article.blogLabels.map((blogLabel) => (
            <li key={blogLabel}>#{blogLabel}</li>
          ))}
        </ul>
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
        <hr />
      </section>
      <ArticleRecommendations article={article} articles={articles} />
    </Layout>
  );
};
