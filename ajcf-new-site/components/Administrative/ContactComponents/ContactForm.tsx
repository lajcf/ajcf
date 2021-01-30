import React from "react";
import { Form, Input, Button } from "antd";
import styles from "./Contact.module.scss";
import { NetlifyForm } from "./NetlifyForm";

export const ContactForm = () => {
  const formName = "contactForm";

  const encode = (data: any) => {
    return Object.keys(data)
      .map((key) => `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`)
      .join("&");
  };

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
      <Form name="antForm" method="post" onFinish={handleSubmit} className={styles.antForm}>
        <Form.Item label="Don't fill this out" className="hidden" style={{ display: `none` }} name="bot-field">
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
