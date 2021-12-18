export type SibContact = {
  email: string;
  id: number;
  emailBlacklisted: boolean;
  smsBlacklisted: boolean;
  createdAt: string; // "2021-12-04T12:50:32.169+01:00",
  modifiedAt: string; // "2021-12-10T13:43:21.000+01:00",
  listIds: number[];
  attributes: Record<string, any>;
};
