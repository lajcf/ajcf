import mailjet from "node-mailjet";
import { Attendee } from "../../entities/Attendee";
import { Event } from "../../entities/Event";

export enum MailingListAction {
  addnoforce = "addnoforce",
  remove = "remove",
  unsub = "unsub",
}

export interface CreateMailingListArgs {
  Contacts: {
    Email: string;
    Name?: string;
  }[];
  ContactsLists: {
    Action: MailingListAction;
    ListID: string;
  }[];
}

export interface LinkContactsToMailingListArgs {
  attendees: Attendee[];
  event: Event;
}

export const linkContactsToMailingList = async (args: LinkContactsToMailingListArgs) => {
  if (process.env.ENV !== "prod") {
    console.log("Developement environment, do not link contacts to mailing list");
    return;
  }
  const mailingListId = args.event.mailjetListId;
  if (!mailingListId) throw new Error(`Event ${args.event.name} does not have a related mailing list on Mailjet`);
  try {
    const mailjetArgs: CreateMailingListArgs = {
      Contacts: args.attendees.map((attendee) => ({
        Email: attendee.email,
      })),
      ContactsLists: [
        {
          Action: MailingListAction.addnoforce,
          ListID: mailingListId,
        },
      ],
    };
    const mailjetClient = mailjet.connect(process.env.MAILJET_API_KEY!, process.env.MAILJET_API_SECRET!);
    await mailjetClient.post("contact", { version: "v3" }).action("managemanycontacts").request(mailjetArgs);
  } catch (e) {
    console.log(e);
    throw e;
  }
};
