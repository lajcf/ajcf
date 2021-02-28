import React from "react";
import Head from "next/head";
import styles from "../Footer.module.scss";

export const NewsletterPlea = () => {
  return (
    <div className={styles.newsletterPlea}>
      <Head>
        <script type="text/javascript" src="https://app.mailjet.com/statics/js/iframeResizer.min.js" />
      </Head>
      <iframe
        title="newsletterIframe"
        className="mj-w-res-iframe"
        frameBorder="0"
        scrolling="no"
        marginHeight={0}
        marginWidth={0}
        src="https://app.mailjet.com/widget/iframe/4yAg/Hsf"
        width="100%"
      />
    </div>
  );
};
