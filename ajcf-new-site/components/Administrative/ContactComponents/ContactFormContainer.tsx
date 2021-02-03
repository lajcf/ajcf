import React, { useState } from "react";
import { omit } from "lodash";
import { useRouter } from "next/router";
import { Modal } from "antd";
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

export const ContactFormContainer = () => {
  const [isLoading, setIsLoading] = useState(false);
  const formName = "contactForm";
  const router = useRouter();

  const formSentConfirmation = () => {
    Modal.success({
      content: "Message envoyé avec succès!",
      onOk: () => router.reload(),
    });
  };

  const showSuccess = () => {
    setTimeout(() => {
      setIsLoading(false);
      formSentConfirmation();
    }, 2000);
  };

  const encode = (data: any) => {
    return Object.keys(data)
      .map((key) => `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`)
      .join("&");
  };

  const handleSubmit = (values: ContactMessage) => {
    setIsLoading(true);
    const messageWithCleanBotField = values.botField === undefined ? omit(values, ["botField"]) : values;
    fetch(`/`, {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({
        "form-name": formName,
        ...messageWithCleanBotField,
      }),
    }).then(() => showSuccess());
    // .catch((error) => showError(error));
  };

  return (
    <section className={styles.contactFormSection}>
      <h4>Envie de nous contacter ?</h4>
      <NetlifyForm formName={formName} />
      <ContactForm handleSubmit={handleSubmit} isLoading={isLoading} />
    </section>
  );
};
