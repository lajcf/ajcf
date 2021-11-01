import { getRepository } from "typeorm";
import { Event } from "../../../entities/Event";
import { saveSingleEntity } from "../../../utils/saveUtils";
import { createMailingList } from "../../mailClient/sendInBlue/createMailingList";

export const createAndSaveMailingListId = async (event: Event) => {
  console.log(`Processing event ${JSON.stringify(event, null, 2)}...`);
  // TODO: change mailjetListId column name
  const mailjetListId = await createMailingList({
    listName: event.name,
    folderId: parseInt(process.env.SEND_IN_BLUE_EVENTS_LISTS_FOLDER_ID, 10),
  });
  return saveSingleEntity(
    {
      ...event,
      mailjetListId,
    },
    getRepository(Event),
    "slug"
  );
};

export const createMailingListsForEvents = async (events: Event[]): Promise<Event[]> => {
  const eventsWithMailingList = events.filter((event) => !!event.mailjetListId);
  const eventsWithoutList = events.filter((event) => !event.mailjetListId);
  const updatedEventsWithoutList = await Promise.all(eventsWithoutList.map(createAndSaveMailingListId));
  return [...eventsWithMailingList, ...updatedEventsWithoutList];
};
