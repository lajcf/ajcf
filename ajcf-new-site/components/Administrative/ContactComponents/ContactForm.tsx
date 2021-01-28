import React from "react";
import { Form, Input, Button } from "antd";
import styles from "./Contact.module.scss";

const NetlifyForm = ({ formName }: { formName: string }) => {
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

const encode = (data: any) => {
  return Object.keys(data)
    .map((key) => `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`)
    .join("&");
};

export const ContactForm = () => {
  const formName = "contactForm";

  const handleSubmit = (values: any) => {
    if (values[`bot-field`] === undefined) {
      // eslint-disable-next-line no-param-reassign
      delete values[`bot-field`];
    }

    fetch(`/`, {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({
        "form-name": formName,
        ...values,
      }),
    });
    // .then(() => showSuccess())
    // .catch((error) => showError(error));
  };

  return (
    <section className={styles.contactFormSection}>
      <h4>Envie de nous contacter ?</h4>
      <NetlifyForm formName={formName} />
      <Form name="antForm" method="post" onFinish={handleSubmit}>
        <Form.Item label="Don't fill this out" className="hidden" style={{ display: `none` }} name="bot-field">
          <Input type="hidden" />
        </Form.Item>
        <Form.Item name="lastName">
          <Input placeholder="Nom*" />
        </Form.Item>
        <Form.Item name="firstName">
          <Input placeholder="Prénom*" />
        </Form.Item>
        <Form.Item name="mailAddress">
          <Input placeholder="Adresse e-mail*" />
        </Form.Item>
        <Form.Item name="messageObject">
          <Input placeholder="Objet du message*" />
        </Form.Item>
        <Form.Item name="messageContent">
          <Input.TextArea placeholder="Message*" />
        </Form.Item>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form>
      <div className={styles.formBottom}>
        <small className={styles.asteriskDescription}>* Champs obligatoires</small>
        <Button className={styles.formSubmitButton} type="primary">
          Envoyer
        </Button>
      </div>
    </section>
  );
};
