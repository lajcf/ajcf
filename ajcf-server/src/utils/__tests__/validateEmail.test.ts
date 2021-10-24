import { validateEmail } from "../validateMail";

describe("validateEmail", function () {
  test("valid email should pass", () => {
    // GIVEN
    const email = "user.foo@email.com";

    // WHEN
    const result = validateEmail(email);

    // THEN
    expect(result).toEqual(true);
  });
  test("invalid email should not pass", () => {
    // GIVEN
    const email = "user.@email.com";

    // WHEN
    const result = validateEmail(email);

    // THEN
    expect(result).toEqual(false);
  });
});
