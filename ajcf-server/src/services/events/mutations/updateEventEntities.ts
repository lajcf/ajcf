import { getRepository } from "typeorm";
import { orderBy } from "lodash";
import { Event } from "../../../entities/Event";
import { createMailingListsForEvents } from "./createMailingListsForEvents";
import { saveMultipleEntities } from "../../../utils/saveUtils";
import dayjs from "../../../utils/dayjs";
import { fetchEvents } from "../../helloAsso/v5/fetchEvents";
import { HelloAssoEvent } from "../../helloAsso/v5/resources";

export const formatHelloAssoEvent = (event: HelloAssoEvent) => ({
  slug: event.formSlug,
  name: event.title,
  funding: 0,
  supporters: 0,
  placeName: null,
  placeAddress: null,
  placeCity: null,
  placeZipcode: null,
  placeCountry: null,
  startDate: dayjs.utc(event.startDate).toDate(),
  endDate: dayjs.utc(event.endDate).toDate(),
  creationDate: event.meta?.createdAt && dayjs.utc(event.meta?.createdAt).toDate(),
  lastUpdateOnHelloAsso: event.meta?.updatedAt && dayjs.utc(event.meta?.updatedAt).toDate(),
});

export const updateEventEntities = async (): Promise<Event[]> => {
  const helloAssoEvents = await fetchEvents();
  const formattedHelloAssoEvents = helloAssoEvents.map(formatHelloAssoEvent);
  const currentEvents = formattedHelloAssoEvents.filter((event) => event.startDate > new Date());
  const updatedEvents = await saveMultipleEntities(currentEvents, getRepository(Event), "slug");
  console.log(`Upserted ${updatedEvents.length} events into DB`);
  const updatedEventsWithMailingList = await createMailingListsForEvents(updatedEvents);
  console.log(`Upserted ${updatedEventsWithMailingList.length} mailing lists on MailJet`);
  return orderBy(updatedEventsWithMailingList, (event) => event.creationDate);
};
