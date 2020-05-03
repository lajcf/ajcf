import axios from "axios";
import { GET_CAMPAIGN_URL, HelloAssoCampaign, HelloAssoCampaignType } from "./resources";
import { fetchAwsSecret } from "../utils/fetchAwsSecret";

interface GetCampaignsArgs {
  campaignType: HelloAssoCampaignType;
}

interface HelloAssoCampaignsQueryResponse {
  resources: HelloAssoCampaign[];
}

export const fetchCampaigns = async (args?: GetCampaignsArgs): Promise<HelloAssoCampaign[]> => {
  const helloAssoCredentials = await fetchAwsSecret<{ USER_AJCF: string; PASSWORD_AJCF: string }>(
    "HELLOASSO_CREDENTIALS"
  );
  const encodedAuth = Buffer.from(`${helloAssoCredentials.USER_AJCF}:${helloAssoCredentials.PASSWORD_AJCF}`).toString(
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
