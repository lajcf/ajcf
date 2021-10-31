import axios from "axios";
import limit from "p-limit";
import { flatten } from "lodash";
import { memoizedAccessToken } from "./fetchAccessToken";
import { HelloAssoEventsResponse } from "./resources";

const pLimit = limit(1);

const PAGE_SIZE = 20;

const fetchPaginatedEvents = async ({
  pageIndex,
  pageSize,
}: {
  pageIndex: number;
  pageSize: number;
}): Promise<HelloAssoEventsResponse> => {
  const token = await memoizedAccessToken();
  const result = await axios.get<HelloAssoEventsResponse>(
    `https://api.helloasso.com/v5/organizations/ajcf/forms?states=Public&formTypes=Event&pageIndex=${pageIndex}&pageSize=${pageSize}`,
    {
      headers: {
        authorization: `Bearer ${token}`,
      },
    }
  );
  return result.data;
};

const fetchTotalPages = async () => {
  const result = await fetchPaginatedEvents({ pageIndex: 1, pageSize: PAGE_SIZE });
  return result.pagination.totalPages;
};

export const fetchEvents = async () => {
  const totalNumberOfPagesToFetch = await fetchTotalPages();

  const pagesIndices = Array.from(Array(totalNumberOfPagesToFetch).keys()).map((i) => i + 1);

  const eventsPages = await Promise.all(
    pagesIndices.map((pageIndex) => pLimit(() => fetchPaginatedEvents({ pageIndex, pageSize: PAGE_SIZE })))
  );

  return flatten(eventsPages.map((page) => page.data));
};
