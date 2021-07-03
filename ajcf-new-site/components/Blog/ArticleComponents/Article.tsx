import React from "react";
import ReactMarkdown from "react-markdown";
import { ArticlePageFragment } from "../../../types/types";
import { LabelsList } from "../../../lib/utils/ItemsPreviewsListComponents/LabelsList";
import styles from "./ArticleContainer.module.scss";
import { dayjs } from "../../../lib/utils/dayjs";
import { AJCFImage } from "../../../lib/utils/AJCFImage";

export const Article = ({ article }: { article: ArticlePageFragment }) => {
  return (
    <>
      {article.cover && (
        <div className={styles.bannerContainer}>
          <AJCFImage src={article.cover.url} />
        </div>
      )}
      <section className={styles.articleSection}>
        <div className={styles.articleInfos}>
          <LabelsList labels={article.labels} />
          <h1>{article.title}</h1>
          <h3>{article.author}</h3>
          <h4>
            {article.optionalPublishedDate
              ? dayjs(article.optionalPublishedDate).format("DD MMM YYYY")
              : dayjs(article.createdAt).format("DD MMM YYYY")}
          </h4>
        </div>
        <div className={styles.contentContainer}>
          <ReactMarkdown
            className={styles.content}
            renderers={{
              link: ({ href, children }) => (
                <a href={href} target="_blank" rel="noopener noreferrer">
                  {children}
                </a>
              ),
            }}
          >
            {article.content}
          </ReactMarkdown>
        </div>
      </section>
    </>
  );
};
