import { HelloAssoEvent } from "../resources";
import { Event } from "../../../../entities/Event";
import dayjs from "../../../../utils/dayjs";

export const mapHelloAssoEventToEvent = (event: HelloAssoEvent): Partial<Event> => ({
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
  creationDate: event.meta?.createdAt ? dayjs.utc(event.meta?.createdAt).toDate() : undefined,
  lastUpdateOnHelloAsso: event.meta?.updatedAt ? dayjs.utc(event.meta?.updatedAt).toDate() : undefined,
});
