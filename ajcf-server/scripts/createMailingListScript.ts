import dotenv from "dotenv";
import { createMailingList } from "../src/services/mailjet/createMailingList";

dotenv.config();

export const createMailingListScript = async () => {
  process.env.ENV = "prod";
  await createMailingList("Test");
};

createMailingListScript();
