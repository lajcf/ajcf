import { GetStaticProps } from "next";
import React from "react";
import { truncate } from "lodash";
import { graphqlClient } from "../../lib/graphql/graphqlClient";
import { Article } from "../../types/types";
import styles from "../../components/Blog/BlogListComponents/BlogList.module.scss";

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
      <p className={styles.previewAuthor}>{article.author}</p>
      <small className={styles.previewContentSummary}>{contentSummary}</small>
    </div>
  );
};

export default function BlogList({ articles }: { articles: Article[] }) {
  return (
    <main className={styles.blogList}>
      <h1>Blog</h1>
      <section className={styles.articlesPreviews}>
        <ArticlePreview article={articles[0]} />
      </section>
    </main>
  );
}

export const getStaticProps: GetStaticProps<any> = async () => {
  const articlesResult = await graphqlClient.ArticlesQuery();
  return {
    props: {
      articles: articlesResult.articles,
    },
  };
};
