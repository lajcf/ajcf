import React from "react";
import styles from "../Footer.module.scss";
import { Input, Button } from "antd";
import { RightOutlined } from "@ant-design/icons";

const enterMail = <RightOutlined />;

export const NewsletterPlea = () => {
  return (
    <div className={styles.newsletterPlea}>
      <h3>Inscrivez-vous à notre Newsletter !</h3>
      <div>
        <Input.Group compact>
          <Input placeholder="Email address" bordered={false} style={{ width: "50%" }} />
          <Button type="primary">
            <RightOutlined />
          </Button>
        </Input.Group>
      </div>
    </div>
  );
};
