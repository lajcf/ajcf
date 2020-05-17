import { getRepository } from "typeorm";
import moment from "moment";
import { HelloAssoCampaign } from "../../helloAsso/resources";
import { Event } from "../../../entities/Event";
import { fetchCampaigns } from "../../helloAsso/fetchCampaigns";

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

export const upsertHelloAssoEvents = async () => {
  const helloAssoEvents = await fetchCampaigns({ campaignType: "EVENT" });
  const insertedEventsToDb = await getRepository(Event).save(helloAssoEvents.map(formatHelloAssoEvent));
  console.log(`Upserted ${insertedEventsToDb.length} events into DB`);
  return true;
};