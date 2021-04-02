import { GetStaticProps } from "next";
import React from "react";
import { RecruitmentContainer } from "../../components/APropos/RecruitmentComponents/RecruitmentContainer";
import { graphqlClient } from "../../lib/graphql/graphqlClient";
import { mapEnvToStage } from "../../lib/utils/mapEnvToStage";
import { JobOffer } from "../../types/types";

export default function Recruitment({ jobOffers }: { jobOffers: JobOffer[] }) {
  return <RecruitmentContainer jobOffers={jobOffers} />;
}

export const getStaticProps: GetStaticProps<any> = async () => {
  const jobOffersResult = await graphqlClient.jobOffersQuery({ stage: mapEnvToStage(process.env.ENV) });
  return {
    props: {
      jobOffers: jobOffersResult.jobOffers,
    },
  };
};
