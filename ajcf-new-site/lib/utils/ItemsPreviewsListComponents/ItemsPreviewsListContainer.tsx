import { uniq } from "lodash";
import React, { useState } from "react";
import {
  ArticlePreviewFragment,
  BlogCategory,
  BlogLabel,
  EventCategory,
  EventLabel,
  EventPreviewFragment,
} from "../../../types/types";
import { processItems } from "./processItems";
import { SelectorForCategoryOrLabel } from "./SelectorBlogCategoryOrLabel";
import { ItemPreview } from "./ItemPreview";

export type Item = ArticlePreviewFragment | EventPreviewFragment;
export type Category = BlogCategory | EventCategory;
export type Label = BlogLabel | EventLabel;
export const ItemsPreviewsListContainer = ({
  items,
  numberOfItemsToDisplayAtATime,
}: {
  items: Item[];
  numberOfItemsToDisplayAtATime: number;
}) => {
  const [selectedCategory, setSelectedCategory] = useState<Category>();
  const [selectedLabel, setSelectedLabel] = useState<Label>();
  const [numberOfItemsToDisplay, setNumberOfItemsToDisplay] = useState(numberOfItemsToDisplayAtATime);

  const itemsToShow = processItems(items, numberOfItemsToDisplay, selectedCategory, selectedLabel);

  const selectUsedLabels = (): Label[] => {
    // TODO: find a better implementation
    // @ts-ignore
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
        categoriesToShow={Object.values(BlogCategory)}
        labelsToShow={selectUsedLabels()}
        resetFilters={resetFilters}
      />
      <ul>
        {itemsToShow.map((item) => (
          <ItemPreview key={item.id} item={item} />
        ))}
      </ul>
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
