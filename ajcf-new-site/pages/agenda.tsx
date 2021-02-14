import { GetStaticProps } from "next";
import React from "react";
import { AgendaContainer } from "../components/Agenda/AgendaComponents/AgendaContainer";
import { graphqlClient } from "../lib/graphql/graphqlClient";
import { EventPreviewFragment } from "../types/types";

type AgendaProps = { events: EventPreviewFragment[] };
export default function Agenda({ events }: AgendaProps) {
  return <AgendaContainer events={events} />;
}

export const getStaticProps: GetStaticProps<AgendaProps> = async () => {
  const eventsResult = await graphqlClient.eventsPreviewQuery();
  return {
    props: {
      events: eventsResult.events,
    },
  };
};
