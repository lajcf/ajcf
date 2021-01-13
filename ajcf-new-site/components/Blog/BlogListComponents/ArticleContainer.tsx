import React from "react";
import parse from "html-react-parser";
import { Layout } from "../../Layout/Layout";
import styles from "./ArticleContainer.module.scss";
import { dayjs } from "../../../lib/utils/dayjs";
import { ArticleRecommendations } from "./ArticleRecommendations";
import { ArticleFragment, ArticlePageFragment } from "../../../types/types";

export type ArticleContainerProps = {
  article: ArticlePageFragment;
  articles: ArticleFragment[];
};

export const ArticleContainer = ({ article, articles }: ArticleContainerProps) => {
  return (
    <Layout>
      <main>
        <section className={styles.article}>
          <ul className={styles.blogLabels}>
            {article.blogLabels.map((blogLabel) => (
              <li key={blogLabel}>#{blogLabel}</li>
            ))}
          </ul>
          <h1>{article.title}</h1>
          <h3>{article.author}</h3>
          <h4>{dayjs(article.createdAt).format("DD MMM YYYY")}</h4>
          <hr />
          <div>{parse(article.content.html)}</div>
          <hr />
        </section>
        <ArticleRecommendations article={article} articles={articles} />
      </main>
    </Layout>
  );
};
