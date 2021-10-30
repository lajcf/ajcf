import axios from "axios";
import { GET_CAMPAIGN_URL, HelloAssoCampaign, HelloAssoCampaignType } from "./resources";

interface GetCampaignsArgs {
  campaignType: HelloAssoCampaignType;
}

interface HelloAssoCampaignsQueryResponse {
  resources: HelloAssoCampaign[];
}

export const fetchCampaigns = async (args?: GetCampaignsArgs): Promise<HelloAssoCampaign[]> => {
  const encodedAuth = Buffer.from(`${process.env.HELLOASSO_USERNAME}:${process.env.HELLOASSO_PASSWORD}`).toString(
    "base64"
  );
  const url = GET_CAMPAIGN_URL(args?.campaignType);
  try {
    const result = await axios.get<HelloAssoCampaignsQueryResponse>(url, {
      headers: {
        Authorization: `Basic ${encodedAuth}`,
      },
    });
    return result.data.resources;
  } catch (e) {
    console.log(e);
    throw e;
  }
};
