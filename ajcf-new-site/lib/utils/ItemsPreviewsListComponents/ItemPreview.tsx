import React from "react";
import { EventPreview } from "../../../components/Agenda/AgendaComponents/EventPreview";
import { ArticlePreview } from "../../../components/Blog/BlogListComponents/ArticlePreview";
import { ArticlePreviewFragment, EventPreviewFragment } from "../../../types/types";
import { Item } from "./ItemsPreviewsListContainer";

const determineIfIsArticleOrEvent = (
  toBeDetermined: ArticlePreviewFragment | EventPreviewFragment
): toBeDetermined is ArticlePreviewFragment => {
  if ((toBeDetermined as ArticlePreviewFragment).blogCategory) {
    return true;
  }
  return false;
};
export const ItemPreview = ({ item }: { item: Item }) => {
  return (
    <>
      {determineIfIsArticleOrEvent(item) ? (
        <ArticlePreview article={item as ArticlePreviewFragment} />
      ) : (
        <EventPreview event={item as EventPreviewFragment} />
      )}
      <hr className="separator" />
    </>
  );
};
