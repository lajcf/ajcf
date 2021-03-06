import { getRepository } from "typeorm";
import moment from "moment";
import { orderBy } from "lodash";
import { HelloAssoCampaign } from "../../helloAsso/resources";
import { Event } from "../../../entities/Event";
import { fetchCampaigns } from "../../helloAsso/fetchCampaigns";
import { createMailingListsForEvents } from "./createMailingListsForEvents";
import { saveMultipleEntities } from "../../../utils/saveUtils";

export const formatHelloAssoEvent = (campaign: HelloAssoCampaign) => ({
  id: parseInt(campaign.id, 10).toString(),
  name: campaign.name,
  funding: campaign.funding,
  supporters: campaign.supporters,
  placeName: campaign.place_name,
  placeAddress: campaign.place_address,
  placeCity: campaign.place_city,
  placeZipcode: campaign.place_zipcode,
  placeCountry: campaign.place_country,
  startDate: moment.utc(campaign.start_date).toDate(),
  endDate: moment.utc(campaign.end_date).toDate(),
  creationDate: moment.utc(campaign.creation_date).toDate(),
  lastUpdateOnHelloAsso: moment.utc(campaign.last_update).toDate(),
});

export const updateEventEntities = async (): Promise<Event[]> => {
  const helloAssoEvents = await fetchCampaigns({ campaignType: "EVENT" });
  const formattedHelloAssoEvents = helloAssoEvents.map(formatHelloAssoEvent);
  const currentEvents = formattedHelloAssoEvents.filter((event) => event.startDate > new Date());
  const updatedEvents = await saveMultipleEntities(currentEvents, getRepository(Event), "id");
  console.log(`Upserted ${updatedEvents.length} events into DB`);
  const updatedEventsWithMailingList = await createMailingListsForEvents(updatedEvents);
  console.log(`Upserted ${updatedEventsWithMailingList.length} mailing lists on MailJet`);
  return orderBy(updatedEventsWithMailingList, (event) => event.creationDate);
};
