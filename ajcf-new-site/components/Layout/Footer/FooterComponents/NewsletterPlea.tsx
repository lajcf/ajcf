import React from "react";
import styles from "../Footer.module.scss";
import { Input, Button } from "antd";
import { RightOutlined } from "@ant-design/icons";

const enterMail = <RightOutlined />;

const inputContent = `Entrez votre adresse e-mail`;

export const NewsletterPlea = () => {
  return (
    <div className={styles.newsletterPlea}>
      <h3>Inscrivez-vous à notre Newsletter !</h3>
      <div style={{ width: "100%" }}>
        <Input.Group compact>
          <Input placeholder={inputContent} bordered={false} style={{ width: "60%" }} />
          <Button type="primary">
            <RightOutlined />
          </Button>
        </Input.Group>
      </div>
    </div>
  );
};
