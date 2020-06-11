import mailjet from "node-mailjet";

export interface CreateMailingListMailjetResponse {
  Count: number;
  Data: {
    Name: string;
    Address: string;
    CreatedAt: string;
    ID: number;
    SubscriberCount: number;
  }[];
  Total: number;
}

export const createMailingList = async (name: string) => {
  if (process.env.ENV !== "prod") {
    console.log("Developement environment, do not create mailing list");
    return "0123456789";
  }
  try {
    const mailjetClient = mailjet.connect(process.env.MAILJET_API_KEY!, process.env.MAILJET_API_SECRET!);
    const request = (await mailjetClient.post("contactslist", { version: "v3" }).request({
      Name: name.slice(0, 60),
    })) as { body: CreateMailingListMailjetResponse };
    const response = request.body.Data;
    if (response.length === 0) {
      throw new Error(`Failed to create Mailjet contacts list for event ${name}`);
    }
    return response[0].ID;
  } catch (e) {
    console.log(`An error happened with event ${name}.`);
    console.log(e);
    throw e;
  }
};
