import axios from "axios";
import limit from "p-limit";
import { flatten } from "lodash";
import { memoizedAccessToken } from "./fetchAccessToken";
import { HelloAssoSoldItemsFromForm } from "./resources";
import { validateEmail } from "../validateMail";

const pLimit = limit(1);

const PAGE_SIZE = 20;

const fetchPaginatedMembers = async ({
  pageIndex,
  pageSize,
}: {
  pageIndex: number;
  pageSize: number;
}): Promise<HelloAssoSoldItemsFromForm> => {
  const token = await memoizedAccessToken();
  const result = await axios.get<HelloAssoSoldItemsFromForm>(
    `https://api.helloasso.com/v5/organizations/ajcf/forms/Membership/adhesion/items?pageIndex=${pageIndex}&pageSize=${pageSize}&tierTypes=Membership&itemStates=Processed&withDetails=true`,
    {
      headers: {
        authorization: `Bearer ${token}`,
      },
    }
  );
  return result.data;
};

const fetchTotalPages = async () => {
  const result = await fetchPaginatedMembers({ pageIndex: 1, pageSize: PAGE_SIZE });
  return result.pagination.totalPages;
};

export const fetchHelloAssoMembers = async () => {
  const totalNumberOfPagesToFetch = await fetchTotalPages();

  const pagesIndices = Array.from(Array(totalNumberOfPagesToFetch).keys()).map((i) => i + 1);

  const membersPages = await Promise.all(
    pagesIndices.map((pageIndex) => pLimit(() => fetchPaginatedMembers({ pageIndex, pageSize: PAGE_SIZE })))
  );

  return flatten(membersPages.map((page) => page.data)).filter((subscription) =>
    validateEmail(subscription.payer.email)
  );
};
