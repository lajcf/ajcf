import mailjet from "node-mailjet";

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
  emails: string[];
  mailjetListId: string;
}

export const linkContactsToMailingList = async (args: LinkContactsToMailingListArgs) => {
  if (process.env.ENV !== "prod") {
    console.log("Developement environment, do not link contacts to mailing list");
    return;
  }
  try {
    const mailjetArgs: CreateMailingListArgs = {
      Contacts: args.emails.map((email) => ({
        Email: email,
      })),
      ContactsLists: [
        {
          Action: MailingListAction.addnoforce,
          ListID: args.mailjetListId,
        },
      ],
    };
    const mailjetClient = mailjet.connect(process.env.MAILJET_API_KEY, process.env.MAILJET_API_SECRET);
    await mailjetClient.post("contact", { version: "v3" }).action("managemanycontacts").request(mailjetArgs);
  } catch (e) {
    console.log(e);
    throw e;
  }
};
