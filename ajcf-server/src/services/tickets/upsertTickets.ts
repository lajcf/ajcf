import { getRepository } from "typeorm";
import { saveMultipleEntities } from "../../utils/saveUtils";
import { Ticket } from "../../entities/Ticket";

export const upsertTickets = async (tickets: Partial<Ticket>[]) => {
  return saveMultipleEntities(tickets, getRepository(Ticket), "id");
};
