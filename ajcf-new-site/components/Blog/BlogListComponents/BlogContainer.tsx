import React from "react";
import { NUMBER_OF_ARTICLES_TO_DISPLAY_AT_A_TIME } from "../../../lib/constants";
import { ArticlePreviewFragment } from "../../../types/types";
import { Layout } from "../../Layout/Layout";
import {
  Item,
  ItemsPreviewsListContainer,
} from "../../../lib/utils/ItemsPreviewsListComponents/ItemsPreviewsListContainer";

export const BlogContainer = ({ articles }: { articles: ArticlePreviewFragment[] }) => {
  return (
    <Layout>
      <ItemsPreviewsListContainer
        items={articles as Item[]}
        numberOfItemsToDisplayAtATime={NUMBER_OF_ARTICLES_TO_DISPLAY_AT_A_TIME}
      />
    </Layout>
  );
};
