import { config } from "dotenv";
import { fetchMembers } from "./fetchMembers";

config();
describe("f", () => {
  test("ffrfe", async () => {
    const result = await fetchMembers();
    console.log(JSON.stringify(result, null, 2));
    console.log(JSON.stringify(result.length, null, 2));
  }, 15000);
});
