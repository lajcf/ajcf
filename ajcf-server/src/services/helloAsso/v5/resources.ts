export type HelloAssoSoldItem = {
  order: {
    id: number; // 27125350;
    date: string; // "2021-09-27T00:14:59.4015461+02:00";
    formSlug: "adhesion";
    formType: "Membership";
    organizationSlug: "ajcf";
  };
  payer: {
    email: string; // "user@email.com";
    country: "FRA";
    firstName: string; // "john";
    lastName: string; // "doe";
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
  priceCategory: "Fixed";
  customFields: (
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
  type: "Membership";
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
