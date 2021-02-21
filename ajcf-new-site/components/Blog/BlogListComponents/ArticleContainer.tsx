import React from "react";
import parse from "html-react-parser";
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
      <main>
        {article.cover && ( // TODO Should I find a way to put that into the layout?
          <div className={styles.bannerContainer}>
            <img src={article.cover.url} />
          </div>
        )}
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
