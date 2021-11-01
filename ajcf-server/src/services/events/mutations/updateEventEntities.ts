import { getRepository } from "typeorm";
import { orderBy } from "lodash";
import { Event } from "../../../entities/Event";
import { createMailingListsForEvents } from "./createMailingListsForEvents";
import { saveMultipleEntities } from "../../../utils/saveUtils";
import { fetchEvents } from "../../helloAsso/v5/fetchEvents";

const keepCurrentEvents = (events: Partial<Event>[]) =>
  events.filter((event) => event.startDate && event.startDate > new Date());

export const updateEventEntities = async (): Promise<Event[]> => {
  const formattedHelloAssoEvents = await fetchEvents();
  const currentEvents = keepCurrentEvents(formattedHelloAssoEvents);

  const updatedEvents = await saveMultipleEntities(currentEvents, getRepository(Event), "slug");
  console.log(`Upserted ${updatedEvents.length} events into DB`);

  const updatedEventsWithMailingList = await createMailingListsForEvents(updatedEvents);
  console.log(`Upserted ${updatedEventsWithMailingList.length} mailing lists on MailJet`);

  return orderBy(updatedEventsWithMailingList, (event) => event.creationDate);
};
