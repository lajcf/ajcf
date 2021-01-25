import React from "react";
import { Layout } from "../../Layout/Layout";
import { DonationIncentives } from "./DonationIncentives";
import { HelloAssoDonation } from "./HelloAssoDonation";

export const DonateContainer = () => {
  return (
    <Layout>
      <section>
        <h1>Faire un don pour nous soutenir</h1>
        <p className="texte1">
          Et has minim elitr intellegat. Mea aeterno eleifend antiopam ad, nam no suscipit quaerendum. At nam minimum
          ponderum. Est audiam animal molestiae te. Et has minim elitr intellegat. Mea aeterno eleifend antiopam ad, nam
          no suscipit quaerendum. At nam minimum ponderum
        </p>
      </section>
      <DonationIncentives />
      <HelloAssoDonation />
    </Layout>
  );
};
