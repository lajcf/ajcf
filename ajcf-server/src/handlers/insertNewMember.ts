import { EventBridgeEvent } from "aws-lambda";
import { HelloAssoOrder } from "../types";
import { upsertMembers } from "../services/members/mutations/upsertMembers";
import { mapHelloAssoOrderToMembers } from "../services/helloAsso/v5/mappers/mapHelloAssoItemToMember";
import { sendWelcomeMails } from "../services/members/mutations/sendWelcomeMails/sendWelcomeMails";
import { subscribeMembersToNewsletter } from "../services/members/mutations/subscribeMembersToNewsletter";

const shouldProcessEvent = (eventType: "newMember" | "newAttendee" | string) => {
  if (eventType === "newMember") {
    return true;
  }
  return false;
};

export const handler = async (event: EventBridgeEvent<"newMember" | "newAttendee" | string, HelloAssoOrder>) => {
  console.log("Event received: ", JSON.stringify(event));
  if (!shouldProcessEvent(event["detail-type"])) {
    console.log(`Cannot process eventType: ${event["detail-type"]}`);
    return;
  }
  const upsertedMembers = await upsertMembers(mapHelloAssoOrderToMembers(event.detail));
  await sendWelcomeMails(upsertedMembers);
  await subscribeMembersToNewsletter(upsertedMembers);
  return event;
};
