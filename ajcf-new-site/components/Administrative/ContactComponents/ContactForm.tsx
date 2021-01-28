import React from "react";
import { Form, Input, Button } from "antd";
import styles from "./Contact.module.scss";

// const onFinish = (values: any) => {
//   console.log("Success:", values);
// };

export const ContactForm = () => {
  return (
    <section className={styles.contactFormSection}>
      <h4>Envie de nous contacter ?</h4>
      <Form name="contact" method="POST" data-netlify="true">
        <Input type="hidden" name="form-name" value="contact" />
        <p>
          <label htmlFor="name">Name</label>
          <Input type="text" id="name" name="name" />
        </p>
        <p>
          <label htmlFor="email">Email</label>
          <Input type="text" id="email" name="email" />
        </p>
        <p>
          <label htmlFor="message">Message</label>
          <Input.TextArea id="message" name="message" />
        </p>
        <p>
          <Button htmlType="submit">Send</Button>
        </p>
      </Form>
      {/* <Form name="contact" onFinish={onFinish} method="POST" data-netlify="true">
        <input type="hidden" name="contact" value="contact" />
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
      </div> */}
    </section>
  );
};
