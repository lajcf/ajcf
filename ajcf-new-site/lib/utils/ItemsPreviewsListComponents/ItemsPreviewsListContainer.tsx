import { uniq } from "lodash";
import React, { useState } from "react";
import { processItems } from "./processItems";
import { SelectorForCategoryOrLabel } from "./SelectorForCategoryOrLabel";

export type ItemBase<Category extends string, Label extends string> = {
  id: string;
  category: Category;
  labels: Label[];
};

type ItemsPreviewsListContainer<
  Item extends ItemBase<Category, Label>,
  Category extends string,
  Label extends string
> = {
  items: Item[];
  numberOfItemsToDisplayAtATime: number;
  renderItem: (item: Item) => JSX.Element;
  categoriesToShow: Category[];
};

export const ItemsPreviewsListContainer = <
  Item extends ItemBase<Category, Label>,
  Category extends string,
  Label extends string
>({
  items,
  numberOfItemsToDisplayAtATime,
  renderItem,
  categoriesToShow,
}: ItemsPreviewsListContainer<Item, Category, Label>) => {
  const [selectedCategory, setSelectedCategory] = useState<Category>();
  const [selectedLabel, setSelectedLabel] = useState<Label>();
  const [numberOfItemsToDisplay, setNumberOfItemsToDisplay] = useState(numberOfItemsToDisplayAtATime);

  const itemsToShow = processItems(items, numberOfItemsToDisplay, selectedCategory, selectedLabel);

  const selectUsedLabels = () => {
    return uniq(items.flatMap((item) => item.labels));
  };

  const resetFilters = () => {
    setSelectedCategory(undefined);
    setSelectedLabel(undefined);
  };

  const handleSelectedCategory = (category: Category) => {
    resetFilters();
    setSelectedCategory(category);
  };

  const handleSelectedLabel = (label: Label) => {
    resetFilters();
    setSelectedLabel(label);
  };

  const thereAreRemainingItems = () => {
    return items.length > numberOfItemsToDisplay;
  };

  return (
    <section>
      <SelectorForCategoryOrLabel
        selectedLabel={selectedLabel}
        selectedCategory={selectedCategory}
        handleSelectedLabel={handleSelectedLabel}
        handleSelectedCategory={handleSelectedCategory}
        categoriesToShow={categoriesToShow}
        labelsToShow={selectUsedLabels()}
        resetFilters={resetFilters}
      />
      <ul>{itemsToShow.map((item) => renderItem(item))}</ul>
      {thereAreRemainingItems() && (
        <button
          type="button"
          className="centered"
          onClick={() => setNumberOfItemsToDisplay(numberOfItemsToDisplay + numberOfItemsToDisplayAtATime)}
        >
          Voir plus
        </button>
      )}
    </section>
  );
};
