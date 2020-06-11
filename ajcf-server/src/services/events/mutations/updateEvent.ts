import { getRepository } from "typeorm";
import { Event } from "../../../entities/Event";
import { saveSingleEntity } from "../../../utils/saveUtils";

export const updateEvent = async (event: Event) => {
  return saveSingleEntity(event, getRepository(Event), "id");
};
