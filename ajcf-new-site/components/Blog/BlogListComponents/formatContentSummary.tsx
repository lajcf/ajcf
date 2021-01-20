import { truncate } from "lodash";

export const formatContentSummary = (content: string, summaryLength: number) => {
  const truncatedContentSummary = truncate(content, { length: summaryLength });
  return truncatedContentSummary.replace("\\n", ". ");
};
