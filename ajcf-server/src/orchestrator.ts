import { fetchCampaigns } from "./helloAsso/fetchCampaigns";
import { HelloAssoCampaign, HelloAssoPayment } from "./helloAsso/resources";
import { fetchPayments } from "./helloAsso/fetchPayments";
import { createGoogleSheet, extractEntityFromSheet, fetchGoogleSheet } from "./googleSheet/googleSheetOperations";
import { FetchGoogleSheetResponse, RowData } from "./googleSheet/resources";

export const upsertPayment = async (payment: HelloAssoPayment, rowData: RowData[]) => {};

export const insertPayment = async (payment: HelloAssoPayment, sheetId: string) => {
  return;
};

export const upsertCampaign = async (campaign: HelloAssoCampaign, lookupSheet: FetchGoogleSheetResponse) => {
  const rowData = lookupSheet.sheets[0].data[0].rowData;
  const campaignSheetInfo = extractEntityFromSheet(campaign.id, "helloAssoId", rowData);
  if (!campaignSheetInfo) {
    const newCampaignSheetId = await createGoogleSheet(campaign.name);
    const payments = await fetchPayments({
      campaignId: campaign.id,
    });
    await Promise.all(payments.map((p) => insertPayment(p, newCampaignSheetId)));
    return;
  }
  const campaignSheet = await fetchGoogleSheet(campaignSheetInfo["googleSheetId"]);
  const payments = await fetchPayments({
    campaignId: campaign.id,
  });
};

export const upsertAllCampaigns = async () => {
  const campaigns = await fetchCampaigns();
  const lookupSheet = await fetchGoogleSheet(process.env.GOOGLE_SHEET_LOOKUP!);
  if (!lookupSheet) throw new Error(`Lookup sheet could not be found!`);
  await Promise.all(campaigns.map((c) => upsertCampaign(c, lookupSheet)));
};
