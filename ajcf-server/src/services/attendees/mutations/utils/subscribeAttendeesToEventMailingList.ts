import { Attendee } from "../../../../entities/Attendee";
import { Event } from "../../../../entities/Event";
import { linkContactsToMailingList } from "../../../mailClient/linkContactsToMailingList";

export interface LinkContactsToMailingListArgs {
  attendees: Attendee[];
  event: Event;
}

export const subscribeAttendeesToEventMailingList = async (args: LinkContactsToMailingListArgs) => {
  const mailingListId = args.event.mailjetListId;
  if (!mailingListId) throw new Error(`Event ${args.event.name} does not have a related mailing list on Mailjet`);
  await linkContactsToMailingList({
    emails: args.attendees.map((attendee) => attendee.email),
    mailjetListId: mailingListId,
  });
};
