import axios from "axios";
import limit from "p-limit";
import { flatten } from "lodash";
import { memoizedAccessToken } from "./fetchAccessToken";
import { HelloAssoSoldItemsFromForm } from "./resources";

const pLimit = limit(1);

const PAGE_SIZE = 20;

const fetchPaginatedTickets = async ({
  pageIndex,
  pageSize,
  eventSlug,
}: {
  pageIndex: number;
  pageSize: number;
  eventSlug: string;
}): Promise<HelloAssoSoldItemsFromForm> => {
  const token = await memoizedAccessToken();
  const result = await axios.get<HelloAssoSoldItemsFromForm>(
    `https://api.helloasso.com/v5/organizations/ajcf/forms/Event/${eventSlug}/items?pageIndex=${pageIndex}&pageSize=${pageSize}&tierTypes=Registration&itemStates=Processed&withDetails=true`,
    {
      headers: {
        authorization: `Bearer ${token}`,
      },
    }
  );
  return result.data;
};

const fetchTotalPages = async (eventSlug: string) => {
  const result = await fetchPaginatedTickets({ pageIndex: 1, pageSize: PAGE_SIZE, eventSlug });
  return result.pagination.totalPages;
};

export const fetchEventTickets = async (eventSlug: string) => {
  const totalNumberOfPagesToFetch = await fetchTotalPages(eventSlug);

  const pagesIndices = Array.from(Array(totalNumberOfPagesToFetch).keys()).map((i) => i + 1);

  const membersPages = await Promise.all(
    pagesIndices.map((pageIndex) => pLimit(() => fetchPaginatedTickets({ pageIndex, pageSize: PAGE_SIZE, eventSlug })))
  );

  return flatten(membersPages.map((page) => page.data));
};
