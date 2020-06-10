import { getRepository } from "typeorm";
import moment from "moment";
import { orderBy } from "lodash";
import { HelloAssoCampaign } from "../../helloAsso/resources";
import { Event } from "../../../entities/Event";
import { fetchCampaigns } from "../../helloAsso/fetchCampaigns";
import { createMailingLists } from "./createMailingLists";
import { saveMultipleEntities } from "../../../utils/saveUtils";

export const formatHelloAssoEvent = (campaign: HelloAssoCampaign): Partial<Event> => ({
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
  const updatedEvents = await saveMultipleEntities(
    helloAssoEvents.map(formatHelloAssoEvent),
    getRepository(Event),
    "id"
  );
  console.log(`Upserted ${updatedEvents.length} events into DB`);
  const updatedEventsWithMailingList = await createMailingLists(updatedEvents);
  console.log(`Upserted ${updatedEventsWithMailingList.length} mailing lists on MailJet`);
  return orderBy(updatedEventsWithMailingList, (event) => event.creationDate);
};
