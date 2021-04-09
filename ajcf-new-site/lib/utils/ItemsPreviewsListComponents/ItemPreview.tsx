import React from "react";
import { EventPreview } from "../../../components/Agenda/AgendaComponents/EventPreview";
import { ArticlePreview } from "../../../components/Blog/BlogListComponents/ArticlePreview";
import { ArticlePreviewFragment, EventPreviewFragment } from "../../../types/types";
import { Item } from "./ItemsPreviewsListContainer";

const isArticle = (
  itemToCheck: ArticlePreviewFragment | EventPreviewFragment
): itemToCheck is ArticlePreviewFragment => {
  if (!itemToCheck.__typename) throw new Error(`You must request __typename for this item: ${itemToCheck}`);
  if (itemToCheck.__typename === "Article") {
    return true;
  }
  return false;
};
export const ItemPreview = ({ item }: { item: Item }) => {
  return (
    <>
      {isArticle(item) ? <ArticlePreview article={item} /> : <EventPreview event={item} />}
      <hr className="separator" />
    </>
  );
};
