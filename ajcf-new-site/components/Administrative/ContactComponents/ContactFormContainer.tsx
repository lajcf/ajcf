import React from "react";
import { omit } from "lodash";
import { NetlifyForm } from "./NetlifyForm";
import { ContactForm } from "./ContactForm";
import styles from "./Contact.module.scss";

export type ContactMessage = {
  botField?: string;
  lastName: string;
  firstName: string;
  mailAddress: string;
  messageObject: string;
  messageContent: string;
};

const showSuccess = (values: ContactMessage) => {
  console.log("Submit Success");
  console.log(values);
};

const encode = (data: any) => {
  return Object.keys(data)
    .map((key) => `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`)
    .join("&");
};

export const handleSubmit = (values: ContactMessage, formName: string) => {
  const messageWithCleanBotField = values.botField === undefined ? omit(values, ["botField"]) : values;
  fetch(`/`, {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: encode({
      "form-name": formName,
      ...messageWithCleanBotField,
    }),
  }).then(() => showSuccess(values));
  // .catch((error) => showError(error));
};

export const ContactFormContainer = () => {
  const formName = "contactForm";

  return (
    <section className={styles.contactFormSection}>
      <h4>Envie de nous contacter ?</h4>
      <NetlifyForm formName={formName} />
      <ContactForm formName={formName} />
    </section>
  );
};
