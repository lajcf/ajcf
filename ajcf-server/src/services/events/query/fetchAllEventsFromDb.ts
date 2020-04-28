import { getRepository } from "typeorm";
import { Event } from "../../../entities/Event";

export const fetchAllEventsFromDb = async (): Promise<Event[]> => {
  return getRepository(Event).find();
};
