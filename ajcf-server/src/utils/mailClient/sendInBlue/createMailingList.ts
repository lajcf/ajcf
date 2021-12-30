import { sendInBlueClient } from "./sdk";

export const createMailingList = async ({ listName, folderId }: { listName: string; folderId: number }) => {
  if (process.env.ENV !== "prod") {
    console.log("Developement environment, do not create mailing list");
    return "0123456789";
  }
  const apiInstance = new sendInBlueClient.ContactsApi();

  const createList = new sendInBlueClient.CreateList();

  createList.name = listName;
  createList.folderId = folderId;

  const createdList = await apiInstance.createList(createList);

  console.log(`Successfully created mailing list ${listName} with id ${JSON.stringify(createdList, null, 2)}`);

  return createdList.id as string;
};
