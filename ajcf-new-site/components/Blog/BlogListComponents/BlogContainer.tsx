import React from "react";
import { NUMBER_OF_ARTICLES_TO_DISPLAY_AT_A_TIME } from "../../../lib/constants";
import { ArticlePreviewFragment, BlogCategory } from "../../../types/types";
import { Layout } from "../../Layout/Layout";
import { ItemsPreviewsListContainer } from "../../../lib/utils/ItemsPreviewsListComponents/ItemsPreviewsListContainer";
import { ArticlePreview } from "./ArticlePreview";

export const BlogContainer = ({ articles }: { articles: ArticlePreviewFragment[] }) => {
  return (
    <Layout>
      <ItemsPreviewsListContainer
        items={articles}
        numberOfItemsToDisplayAtATime={NUMBER_OF_ARTICLES_TO_DISPLAY_AT_A_TIME}
        renderItem={(item) => <ArticlePreview key={item.id} article={item} />}
        categoriesToShow={Object.values(BlogCategory)}
      />
    </Layout>
  );
};
