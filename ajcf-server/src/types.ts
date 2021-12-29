type HelloAssoFormType = "Membership" | "Donation" | "Event";

export const mapHelloAssoFormTypeToEventBridgeDetailType: { [key in HelloAssoFormType]: string } = {
  Membership: "newMember",
  Donation: "donation",
  Event: "newAttendee",
};

export type HelloAssoPayment = {
  id: number; // 15349450;
  date: string; // "2021-12-21T20:28:05.4948762+01:00";
  items: [
    {
      id: number; // 30859497;
      shareAmount: number; // 2000;
      shareItemAmount: number; // 2000;
    }
  ];
  state: "Authorized";
  amount: number; //  2000;
  cashOutState: "MoneyIn";
  paymentMeans: "Card";
  paymentReceiptUrl: string; //
};

export type HelloAssoMembershipCustomField =
  | {
      name: "Email";
      type: "TextInput";
      answer: string; //
    }
  | {
      name: "Date de naissance";
      type: "Date";
      answer: string; // "29/09/1960"
    }
  | {
      name: "Justificatif étudiant / chômeur";
      type: "File";
      answer: string;
    }
  | Record<string, string>;

export type HelloAssoOrder = {
  id: number;
  date: string; // "2021-12-21T20:28:05.4948762+01:00",
  items: [
    {
      id: number;
      name: string; // "Cotisation annuelle (tarif normal)",
      type: "Membership" | "Donation" | "Registration";
      user: {
        lastName: string;
        firstName: string;
      };
      state: "Processed";
      amount: number; // 2000, in euro cents
      payments: [
        {
          id: number;
          shareAmount: number; // 2000
        }
      ];
      customFields: HelloAssoMembershipCustomField[];
      initialAmount: number; // 2000;
      priceCategory: "Fixed" | "Pwyw";
    }
  ];
  payer: {
    email: string;
    country: string; // "FRA";
    lastName: string;
    firstName: string;
    dateOfBirth: string;
  };
  amount: {
    vat: number; // 0;
    total: number; // 2000;
    discount: number; // 0;
  };
  formSlug: string; // "adhesion";
  formType: HelloAssoFormType;
  payments: HelloAssoPayment[];
  organizationSlug: "ajcf";
};

export type HelloAssoForm = {
  url: string;
  meta: {
    createdAt: string; // "2021-11-10T21:45:13.4482042+01:00",
    updatedAt: string; // "2021-11-10T21:45:13.4633333+01:00"
  };
  place: {
    city: string;
    name: string;
    address: string;
    country: string; // "FRA";
    zipCode: string; // "75000";
  };
  state: "Public";
  tiers: [];
  title: string;
  endDate: string; // "2021-12-19T18:00:00+01:00";
  currency: "EUR";
  formSlug: string;
  formType: "Event" | string;
  startDate: string; // "2021-12-18T10:00:00+01:00";
  description: "";
  activityType: string;
  widgetFullUrl: string;
  activityTypeId: number; // 2;
  widgetButtonUrl: string;
  organizationLogo: string;
  organizationName: "AJCF";
  organizationSlug: "ajcf";
  widgetVignetteVerticalUrl: string;
  widgetVignetteHorizontalUrl: string;
};
