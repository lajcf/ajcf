import React from "react";

export const NetlifyForm = ({ formName }: { formName: string }) => {
  return (
    <form name={formName} data-netlify="true" hidden>
      <input type="text" name="lastName" />
      <input type="text" name="firstName" />
      <input type="email" name="mailAddress" />
      <input type="text" name="messageObject" />
      <input type="message" name="messageContent" />
    </form>
  );
};
