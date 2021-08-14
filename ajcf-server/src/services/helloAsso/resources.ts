export type HelloAssoCampaignType = "EVENT" | "FORM" | "FUNDRAISER" | "MEMBERSHIP" | "PAYMENT_FORM";

export interface HelloAssoCampaign {
  id: string;
  name: string;
  slug: string;
  type: HelloAssoCampaignType;
  state: string;
  funding: number;
  supporters: number;
  url: string;
  id_organism: string;
  slug_organism: string;
  creation_date: string;
  last_update: string;
  place_name: string;
  place_address: string;
  place_city: string;
  place_zipcode: string;
  place_country: string;
  start_date: string;
  end_date: string;
}

export type HelloAssoActionType =
  | "DONATION"
  | "INSCRIPTION"
  | "SUBSCRIPTION"
  | "RECURRENT_DONATION"
  | "OPTION"
  | "ADDITIONAL_OPTION";

export interface HelloAssoAction {
  id: string;
  id_campaign: string;
  id_organism: string;
  id_payment: string;
  date: string;
  amount: number;
  type: HelloAssoActionType;
  first_name: string;
  last_name: string;
  address: string;
  zip_code: string;
  city: string;
  country: string;
  email: string;
  status: string;
  option_label: string;
  custom_infos: {
    label: string;
    value: string;
  }[];
}

export type HelloAssoPaymentType = "CREDIT";

export interface HelloAssoPayment {
  id: string;
  date: string;
  amount: number;
  type: HelloAssoPaymentType;
  payer_first_name: string;
  payer_last_name: string;
  payer_address: string;
  payer_zip_code: string;
  payer_city: string;
  payer_country: string;
  payer_email: string;
  payer_birthdate: string;
  payer_citizenship: string;
  payer_society: string;
  payer_is_society: boolean;
  url_receipt: string;
  url_tax_receipt: string;
  status: string;
  actions: {
    id: string;
    type: string;
    amount: number;
  }[];
}

export const ID_HELLOASSO_AJCF = "000001697101";

export const GET_CAMPAIGN_URL = (campaignType?: HelloAssoCampaignType) =>
  `https://api.helloasso.com/v3/organizations/${ID_HELLOASSO_AJCF}/campaigns.json${
    campaignType ? `?type=${campaignType}` : ""
  }`;
export const GET_ACTIONS_URL = (campaignId: string, pageIndex = 1, actionType?: HelloAssoActionType) =>
  `https://api.helloasso.com/v3/campaigns/${campaignId}/actions.json${
    actionType ? `?type=${actionType}` : ""
  }&page=${pageIndex}&results_per_page=100`;
export const GET_PAYMENTS_URL = (campaignId: string, paymentType?: HelloAssoPaymentType) =>
  `https://api.helloasso.com/v3/organizations/${ID_HELLOASSO_AJCF}/campaigns/${campaignId}/payments.json${
    paymentType ? `?type=${paymentType}` : ""
  }&results_per_page=100`;
