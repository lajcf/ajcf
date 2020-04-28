import { Member } from "../../../entities/Member";
import { getRepository } from "typeorm";

export const fetchAllMembersFromDb = async (): Promise<Member[]> => {
  return getRepository(Member).find();
};
