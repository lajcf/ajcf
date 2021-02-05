import parse from "html-react-parser";
import React from "react";
import { EventPageFragment } from "../../../types/types";
import { Layout } from "../../Layout/Layout";

type EventContainerProps = {
  event: EventPageFragment;
};

export const EventContainer = ({ event }: EventContainerProps) => {
  return (
    <Layout>
      <section>
        <h1>{event.title}</h1>
        <h3>#{event.eventLabels[0]}</h3>
        <div>{parse(event.content.html)}</div>
      </section>
    </Layout>
  );
};
