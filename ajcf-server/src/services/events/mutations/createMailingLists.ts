import { getRepository } from "typeorm";
import { Event } from "../../../entities/Event";
import { createMailingList } from "../../mailjet/createMailingList";
import { saveSingleEntity } from "../../../utils/saveUtils";

export const createAndSaveMailingListId = async (event: Event) => {
  const mailjetListId = await createMailingList(event.name);
  return saveSingleEntity(
    {
      ...event,
      mailjetListId,
    },
    getRepository(Event),
    "id"
  );
};

export const createMailingLists = async (events: Event[]): Promise<Event[]> => {
  const eventsWithMailingList = events.filter((event) => !!event.mailjetListId);
  const eventsWithoutList = events.filter((event) => !event.mailjetListId);
  const updatedEventsWithoutList = await Promise.all(eventsWithoutList.map(createAndSaveMailingListId));
  return [...eventsWithMailingList, ...updatedEventsWithoutList];
};
