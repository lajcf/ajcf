import React from "react";
import Link from "next/link";
import styles from "./ArticleContainer.module.scss";
import { ArticleContainerProps } from "./ArticleContainer";
import { ArticleRecommendationPreview } from "./ArticleRecommendationPreview";
import { ArticlePageFragment, ArticlePreviewFragment } from "../../../types/types";

const blogLabelsInCommon = (filteredArticle: ArticlePreviewFragment, article: ArticlePageFragment) => {
  return filteredArticle.blogLabels.some((filteredArticleBlogLabel) =>
    article.blogLabels.includes(filteredArticleBlogLabel)
  );
};

const selectArticleRecommendations = ({ article, articles }: ArticleContainerProps) => {
  const selectedArticles = articles.filter((filteredArticle) => {
    if (filteredArticle.id === article.id) return false;
    return blogLabelsInCommon(filteredArticle, article);
  });
  return selectedArticles;
};

export const ArticleRecommendations = ({ article, articles }: ArticleContainerProps) => {
  const articleRecommendations = selectArticleRecommendations({ article, articles });
  // if (articleRecommendations.length <= 0) return <div />; // TODO: Check if there is a better way to return nothing
  if (articleRecommendations.length <= 0) return null;
  return (
    <section className={styles.articleRecommendations}>
      <h2>Lire d'autres articles similaires</h2>
      <ul className={styles.articleRecommendationsList}>
        {articleRecommendations.map((articleRecommendation) => (
          <li key={articleRecommendation.id}>
            <Link href={`/blog/${articleRecommendation.id}`}>
              <a>
                <ArticleRecommendationPreview article={articleRecommendation} />
              </a>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
};
