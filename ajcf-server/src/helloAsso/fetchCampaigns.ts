import axios from "axios";
import { GET_CAMPAIGN_URL, HelloAssoCampaign, HelloAssoCampaignType, } from "./resources";

interface GetCampaignsArgs {
  campaignType: HelloAssoCampaignType;
}

interface HelloAssoCampaignsQueryResponse {
  resources: HelloAssoCampaign[];
}

export const fetchCampaigns = async (
  args?: GetCampaignsArgs
): Promise<HelloAssoCampaign[]> => {
  const url = GET_CAMPAIGN_URL(args && args.campaignType);
  const encodedAuth = Buffer.from(
    `${process.env.USER_AJCF}:${process.env.PASSWORD_AJCF}`
  ).toString("base64");
  try {
    const result = await axios.get<HelloAssoCampaignsQueryResponse>(url, {
      headers: {
        Authorization: `Basic ${encodedAuth}`,
      },
    });
    return result.data.resources;
  } catch (e) {
    return e;
  }
};
