import React from "react";
import { Alert, Form, Input, Button } from "antd";
import { omit } from "lodash";
import styles from "./Contact.module.scss";
import { NetlifyForm } from "./NetlifyForm";

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
  return <Alert message="Envoi réussi!" type="success" />; // FIXME Doesn't seem to work, what's wrong?
};

const encode = (data: any) => {
  return Object.keys(data)
    .map((key) => `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`)
    .join("&");
};

const handleSubmit = (values: ContactMessage, formName: string) => {
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

export const ContactForm = () => {
  const formName = "contactForm";

  return (
    <section className={styles.contactFormSection}>
      <h4>Envie de nous contacter ?</h4>
      <NetlifyForm formName={formName} />
      <Form
        name="antForm"
        method="post"
        onFinish={(values) => handleSubmit(values, formName)}
        className={styles.antForm}
        action="/"
      >
        <Form.Item label="Don't fill this out" className="hidden" style={{ display: `none` }} name="botField">
          <Input type="hidden" />
        </Form.Item>
        <Form.Item name="lastName" className={styles.lastName}>
          <Input placeholder="Nom*" />
        </Form.Item>
        <Form.Item name="firstName" className={styles.firstName}>
          <Input placeholder="Prénom*" />
        </Form.Item>
        <Form.Item name="mailAddress" className={styles.mailAddress}>
          <Input placeholder="Adresse e-mail*" />
        </Form.Item>
        <Form.Item name="messageObject" className={styles.messageObject}>
          <Input placeholder="Objet du message*" />
        </Form.Item>
        <Form.Item name="messageContent" className={styles.messageContent}>
          <Input.TextArea placeholder="Message*" />
        </Form.Item>
        <div className={styles.formBottom}>
          <small className={styles.asteriskDescription}>* Champs obligatoires</small>
          <Button className={styles.formSubmitButton} type="primary" htmlType="submit">
            Envoyer
          </Button>
        </div>
      </Form>
    </section>
  );
};
