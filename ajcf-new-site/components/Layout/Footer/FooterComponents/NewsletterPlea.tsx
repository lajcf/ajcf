import React from "react";
import Head from "next/head";
import styles from "../Footer.module.scss";

export const NewsletterPlea = () => {
  return (
    <div className={styles.newsletterPlea}>
      <Head>
        <script type="text/javascript" src="https://app.mailjet.com/statics/js/iframeResizer.min.js" />
      </Head>
      {/* <iframe
        title="newsletterIframe"
        classNameName="mj-w-res-iframe"
        frameBorder="0"
        scrolling="no"
        marginHeight={0}
        marginWidth={0}
        src="https://app.mailjet.com/widget/iframe/4yAg/Hsf"
        width="100%"
      /> */}
      <div className="mj-embedded mj-embed-shadow mj-horizontal">
        <div className="mj-embedded-content">
          <div className="mj-embedded-header">
            <div className="mj-embedded-title">Abonnez-vous à notre Newsletter</div>
          </div>
          <div className="mj-embedded-body">
            Inscrivez-vous à notre liste pour recevoir toutes les mises à jour de la part de notre équipe. Nous offrons
            également un téléchargement gratuit de notre dernier e-book à chaque abonné !
          </div>
          <div className="mj-embedded-footer">
            <div className="mj-form">
              <div className="w-preview-field-table">
                <div className="w-preview-fields-content-row">
                  <div className="w-preview-fields-content-cell">
                    <input
                      className="w-preview-fields-content-cell-field-email"
                      type="email"
                      placeholder="Adresse E-Mail"
                      name="w-field-field-new-email"
                      required="required"
                    />
                  </div>
                  <div className="mj-form-button">
                    <div className="mj-subscribe-button">
                      <div className="mj-subscribe-button-content">
                        <b>ABONNEZ-VOUS !</b>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
