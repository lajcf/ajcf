import React from "react";
import { ArticlePageFragment } from "../../../types/types";
import { Layout } from "../../Layout/Layout";

export const ArticleContainer = ({ article }: { article: ArticlePageFragment }) => {
  return (
    <Layout>
      <main>
        <section>
          <ul>
            {article.blogLabels.map((blogLabel) => (
              <li key={blogLabel}>#{blogLabel}</li>
            ))}
          </ul>
          <h1>{article.title}</h1>
          <h3>{article.author}</h3>
          <h4>{article.createdAt}</h4>
          <text>{article.content.text}</text>
        </section>
      </main>
    </Layout>
  );
};
