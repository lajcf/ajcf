import { GetStaticPaths, GetStaticProps } from "next";
import React from "react";
import { EventContainer } from "../../components/Agenda/EventComponents/EventContainer";
import { graphqlClient } from "../../lib/graphql/graphqlClient";
import { EventPageFragment, EventPreviewFragment } from "../../types/types";

type EventProps = {
  event?: EventPageFragment | null;
  events: EventPreviewFragment[];
};

export default function Event({ event, events }: EventProps) {
  if (!event) throw new Error("event not found");
  return <EventContainer event={event} events={events} />;
}

export const getStaticPaths: GetStaticPaths = async () => {
  const eventsMetaResult = await graphqlClient.eventsMetaQuery();
  return {
    paths: eventsMetaResult.events.map((event) => ({ params: { id: event.id } })) || [],
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps<EventProps, { id: string }> = async ({ params }) => {
  const eventPageResult = await graphqlClient.eventPageQuery({ id: params?.id || "" });
  const eventsPreviewResult = await graphqlClient.eventsPreviewQuery();
  return {
    props: {
      event: eventPageResult.event,
      events: eventsPreviewResult.events,
    },
  };
};
