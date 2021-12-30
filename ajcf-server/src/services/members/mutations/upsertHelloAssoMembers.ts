import { fetchHelloAssoMembers } from "../../../utils/helloAsso/fetchHelloAssoMembers";
import { mapHelloAssoItemsToMembers } from "../../../utils/helloAsso/mappers/mapHelloAssoItemToMember";
import { upsertMembers } from "./upsertMembers";
import { Member } from "../../../entities/Member";

export const upsertHelloAssoMembers = async (): Promise<Member[]> => {
  const helloAssoMembers = await fetchHelloAssoMembers();
  console.log(`Members subscription: ${JSON.stringify(helloAssoMembers, null, 2)}`);
  const membersToUpsert = mapHelloAssoItemsToMembers(helloAssoMembers);

  return upsertMembers(membersToUpsert);
};
