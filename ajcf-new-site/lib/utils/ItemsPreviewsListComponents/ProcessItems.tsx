import Item from "antd/lib/descriptions/Item";
import { sortBy } from "lodash";
import { Category, Label } from "../../../components/Blog/BlogListComponents/BlogContainer";
import {
  ArticlePreviewFragment,
  BlogCategory,
  BlogLabel,
  EventCategory,
  EventLabel,
  EventPreviewFragment,
} from "../../../types/types";

type Item = ArticlePreviewFragment | EventPreviewFragment;

const filterItems = (items: Item[], selectedCategory?: Category, selectedLabel?: Label) => {
  if (selectedCategory) {
    return items.filter((item) =>
      "blogCategory" in item
        ? item.blogCategory.includes(selectedCategory as BlogCategory)
        : item.eventCategory.includes(selectedCategory as EventCategory)
    );
  }
  if (selectedLabel) {
    return items.filter((item) =>
      "blogLabels" in item
        ? item.blogLabels.includes(selectedLabel as BlogLabel)
        : item.eventLabels.includes(selectedLabel as EventLabel)
    );
  }
  return items;
};

export const processItems = (
  items: Item[],
  numberOfItemsToDisplay: number,
  selectedCategory?: Category,
  selectedLabel?: Label
) => {
  const orderedItems = sortBy(items, ["optionalPublishedDate", "createdAt"]);
  const filteredItems = filterItems(orderedItems, selectedCategory, selectedLabel);
  return filteredItems.slice(0, numberOfItemsToDisplay);
};
