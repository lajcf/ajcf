import { sortBy } from "lodash";
import { Category, Item, Label } from "./ItemsPreviewsListContainer";

const filterItems = (items: Item[], selectedCategory?: Category, selectedLabel?: Label) => {
  if (selectedCategory) {
    return items.filter((item) => item.category === selectedCategory);
  }
  if (selectedLabel) {
    // @ts-ignore
    return items.filter((item) => item.labels.includes(selectedLabel));
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
