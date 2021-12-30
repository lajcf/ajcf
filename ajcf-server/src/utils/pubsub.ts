import { EventBridge } from "aws-sdk";
import { HelloAssoForm, HelloAssoOrder } from "../types";

const AjcfEventBridge = new EventBridge({ region: "eu-west-3" });

const AjcfBus = `ajcf-server-bus-${process.env.ENV}`;

type HelloAssoOrderEvent = {
  detail: HelloAssoOrder;
  detailType: string;
  source: "helloasso.order";
};

type HelloAssoFormEvent = {
  detail: HelloAssoForm;
  detailType: string;
  source: "helloasso.form";
};

export const publishEvent = <T extends HelloAssoOrderEvent | HelloAssoFormEvent>(event: T) => {
  return AjcfEventBridge.putEvents({
    Entries: [
      {
        EventBusName: AjcfBus,
        Source: event.source,
        DetailType: event.detailType,
        Detail: JSON.stringify(event.detail),
      },
    ],
  });
};
