import { sortBy } from "lodash";
import { ItemBase } from "./ItemsPreviewsListContainer";

const filterItems = <Item extends ItemBase<Category, Label>, Category extends string, Label extends string>(
  items: Item[],
  selectedCategory?: Category,
  selectedLabel?: Label
) => {
  if (selectedCategory) {
    return items.filter((item) => item.category === selectedCategory);
  }
  if (selectedLabel) {
    return items.filter((item) => item.labels.includes(selectedLabel));
  }
  return items;
};

export const processItems = <Item extends ItemBase<Category, Label>, Category extends string, Label extends string>(
  items: Item[],
  numberOfItemsToDisplay: number,
  selectedCategory?: Category,
  selectedLabel?: Label
) => {
  const orderedItems = sortBy(items, ["optionalPublishedDate", "createdAt"]);
  const filteredItems = filterItems(orderedItems, selectedCategory, selectedLabel);
  return filteredItems.slice(0, numberOfItemsToDisplay);
};
