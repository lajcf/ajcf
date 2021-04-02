import { GetStaticProps } from "next";
import React from "react";
import { OurAntennasContainer } from "../../components/APropos/OurAntennasComponents/OurAntennasContainer";
import { graphqlClient } from "../../lib/graphql/graphqlClient";
import { mapEnvToStage } from "../../lib/utils/mapEnvToStage";
import { ArticlePreviewFragment, EventPreviewFragment } from "../../types/types";

export default function OurAntennas({
  articles,
  events,
}: {
  articles: ArticlePreviewFragment[];
  events: EventPreviewFragment[];
}) {
  return <OurAntennasContainer articles={articles} events={events} />;
}
export const getStaticProps: GetStaticProps<{
  articles: ArticlePreviewFragment[];
  events: EventPreviewFragment[];
}> = async () => {
  const articlesResult = await graphqlClient.articlesPreviewPartialQuery({
    stage: mapEnvToStage(process.env.ENV),
    numberOfArticles: 3,
  });
  const eventsResult = await graphqlClient.eventsPreviewPartialQuery({
    stage: mapEnvToStage(process.env.ENV),
    numberOfEvents: 3,
  });
  return {
    props: {
      articles: articlesResult.articles,
      events: eventsResult.events,
    },
  };
};
