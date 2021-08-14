import { getRepository } from "typeorm";
import { Member } from "../../../../entities/Member";
import dayjs from "../../../../utils/dayjs";

export const fetchOutdatedMembers = async () => {
  return getRepository(Member)
    .createQueryBuilder("member")
    .where(`member.lastSubscriptionDate <= :now`, { now: dayjs().add(1, "year").format("YYYY-MM-DD") })
    .getMany();
};
