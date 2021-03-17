import { getRepository } from "typeorm";
import { Member } from "../../../entities/Member";

export const fetchAllMembersFromDb = async (): Promise<Member[]> => {
  return getRepository(Member).find();
};
