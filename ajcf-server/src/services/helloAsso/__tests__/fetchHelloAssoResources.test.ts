import { fetchCampaigns } from "../fetchCampaigns";
import { fetchPayments } from "../fetchPayments";
import { fetchActions } from "../fetchActions";

describe("fetchCampaigns", () => {
  test("fetchCampaigns", async () => {
    const campaigns = await fetchCampaigns({ campaignType: "MEMBERSHIP" });
    expect(campaigns.length).toBeGreaterThan(0);
    expect(campaigns.some((campaign) => campaign.type === "MEMBERSHIP")).toEqual(true);
  });
  test("fetchActions", async () => {
    const campaigns = await fetchCampaigns({ campaignType: "MEMBERSHIP" });
    const actions = await fetchActions({
      campaignId: campaigns[0].id,
      actionType: "SUBSCRIPTION",
    });
    expect(actions.length).toBeGreaterThan(0);
  });
  test.skip("fetchPayments", async () => {
    const campaigns = await fetchCampaigns({ campaignType: "MEMBERSHIP" });
    const payments = await fetchPayments({ campaignId: campaigns[0].id });
    expect(payments.length).toBeGreaterThan(0);
  });
});
