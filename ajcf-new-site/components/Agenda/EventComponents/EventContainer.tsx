import React from "react";
import { EventPageFragment, EventPreviewFragment } from "../../../types/types";
import { Layout } from "../../Layout/Layout";
import { Event } from "./Event";
import { NextEvents } from "./NextEvents";

type EventContainerProps = {
  event: EventPageFragment;
  events: EventPreviewFragment[];
};

export const EventContainer = ({ event, events }: EventContainerProps) => {
  return (
    <Layout>
      <Event event={event} />
      <NextEvents event={event} events={events} />
    </Layout>
  );
};
