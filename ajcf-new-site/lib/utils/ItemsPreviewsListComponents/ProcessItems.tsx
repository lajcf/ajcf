import { sortBy } from "lodash";
import { BlogCategory, BlogLabel, EventCategory, EventLabel } from "../../../types/types";
import { Category, Item, Label } from "./ItemsPreviewsListContainer";

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
