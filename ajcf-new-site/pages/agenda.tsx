import { GetStaticProps } from "next";
import React from "react";
import { AgendaContainer } from "../components/Agenda/AgendaComponents/AgendaContainer";
import { graphqlClient } from "../lib/graphql/graphqlClient";
import { EventPreviewFragment, EventsPreviewQueryDocument, EventsPreviewQueryQuery } from "../types/types";
import { useActualItem } from "../lib/graphql/useActualItem";

type AgendaProps = { initialEvents: EventPreviewFragment[] };

export default function Agenda({ initialEvents }: AgendaProps) {
  const { actualItem: actualEvents } = useActualItem<EventsPreviewQueryQuery>(EventsPreviewQueryDocument, {
    events: initialEvents,
  });
  if (!actualEvents?.events) throw new Error(`List of events not found`);
  return <AgendaContainer events={actualEvents.events} />;
}

export const getStaticProps: GetStaticProps<AgendaProps> = async () => {
  const eventsResult = await graphqlClient.eventsPreviewQuery();
  return {
    props: {
      initialEvents: eventsResult.events,
    },
  };
};
