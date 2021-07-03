import { GetStaticPaths, GetStaticProps } from "next";
import React from "react";
import { EventContainer } from "../../components/Agenda/EventComponents/EventContainer";
import { graphqlClient } from "../../lib/graphql/graphqlClient";
import {
  EventPageFragment,
  EventPageQueryDocument,
  EventPageQueryQuery,
  EventPreviewFragment,
} from "../../types/types";
import { useActualItem } from "../../lib/graphql/useActualItem";

type EventProps = {
  initialEvent: EventPageFragment;
  events: EventPreviewFragment[];
};

export default function Event({ initialEvent, events }: EventProps) {
  const { actualItem: actualEvent } = useActualItem<EventPageQueryQuery>(
    EventPageQueryDocument,
    { event: initialEvent },
    initialEvent.id
  );
  if (!actualEvent?.event) throw new Error(`Event with id ${initialEvent.id} not found`);
  return <EventContainer event={actualEvent.event} events={events} />;
}

export const getStaticPaths: GetStaticPaths = async () => {
  const eventsMetaResult = await graphqlClient.eventsMetaQuery();
  return {
    paths: eventsMetaResult.events.map((event) => ({ params: { id: event.id } })) || [],
    fallback: "blocking", // enable page generation at runtime without fallback page
  };
};

export const getStaticProps: GetStaticProps<EventProps, { id: string }> = async ({ params }) => {
  const eventPageResult = await graphqlClient.eventPageQuery({ id: params?.id || "" });
  const eventsPreviewResult = await graphqlClient.eventsPreviewQuery();
  if (!eventPageResult.event) throw new Error(`Event with id ${params?.id} not found.`);
  return {
    props: {
      initialEvent: eventPageResult.event,
      events: eventsPreviewResult.events,
    },
  };
};