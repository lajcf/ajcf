import React from "react";
import { Form, Input, Button } from "antd";
import styles from "./Contact.module.scss";
import { ContactMessage } from "./ContactFormContainer";

type ContactFormProps = {
  handleSubmit: (values: ContactMessage) => void;
  isLoading: boolean;
};

export const ContactForm = ({ handleSubmit, isLoading }: ContactFormProps) => {
  return (
    <Form name="antForm" method="post" onFinish={handleSubmit} className={styles.antForm} action="/">
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
        <Button className={styles.formSubmitButton} type="primary" htmlType="submit" loading={isLoading}>
          Envoyer
        </Button>
      </div>
    </Form>
  );
};
