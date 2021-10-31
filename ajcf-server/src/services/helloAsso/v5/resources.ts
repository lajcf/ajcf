export type HelloAssoSoldItem = {
  order: {
    id: number; // 27125350;
    date: string; // "2021-09-27T00:14:59.4015461+02:00";
    formSlug: string; // "adhesion";
    formType: "Membership" | "Event";
    organizationSlug: "ajcf";
  };
  payer: {
    email: string; // "user@email.com";
    country?: "FRA";
    firstName?: string; // "john";
    lastName?: string; // "doe";
  };
  payments: {
    cashOutState: "CashedOut";
    shareAmount: number; // 2000;
    id: number; // 13592923;
    amount: number; // 2000;
    date: string; // "2021-09-27T00:14:59.4015461+02:00";
    paymentMeans: "Card";
    state: "Authorized";
  }[];
  name: string; // "Cotisation annuelle (tarif normal)";
  user: {
    firstName: string; // "John";
    lastName: string; // "Doe";
  };
  priceCategory: "Fixed" | "Free";
  customFields?: (
    | {
        name: "Date de naissance";
        type: "Date";
        answer: string; // "20/04/1950";
      }
    | {
        name: "Email";
        type: "TextInput";
        answer: string; // "user@email.com";
      }
    | {
        name: "Numéro de téléphone";
        type: "TextInput";
        answer: string; // "0624974339";
      }
    | {
        name: "Pourquoi veux-tu rejoindre l'AJCF ?";
        type: "FreeText";
        answer: string; // "Lorem ipsum";
      }
  )[];
  id: number; // 27125350,
  amount: number; // 2000,
  type: "Membership" | "Registration";
  initialAmount: number; // 2000,
  state: "Processed";
};

export type HelloAssoSoldItemsFromForm = {
  data: HelloAssoSoldItem[];
  pagination: {
    pageSize: number;
    totalCount: number;
    pageIndex: number;
    totalPages: number;
    continuationToken: string;
  };
};

export type HelloAssoEvent = {
  currency: string; // "EUR";
  description: string;
  startDate: string; // "2021-03-13T11:00:00+01:00";
  endDate: string; // "2021-03-13T13:00:00+01:00";
  meta?: {
    createdAt: string; //  "2021-03-03T21:28:09.147+01:00";
    updatedAt: string; // "2021-03-05T22:12:00.987+01:00";
  };
  state: string; // "Public";
  title: string; // "[#AJCFTalk] Remigrations ?";
  widgetButtonUrl: string;
  widgetFullUrl: string;
  widgetVignetteHorizontalUrl: string;
  widgetVignetteVerticalUrl: string;
  formSlug: string; // "ajcftalk-remigrations";
  formType: string; // "Event";
  url: string;
  organizationSlug: string;
};

export type HelloAssoEventsResponse = {
  data: HelloAssoEvent[];
  pagination: {
    pageSize: number;
    totalCount: number;
    pageIndex: number;
    totalPages: number;
    continuationToken: string;
  };
};
