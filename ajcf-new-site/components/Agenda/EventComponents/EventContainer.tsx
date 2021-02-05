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
        <div className="capsHeading">{event.eventLabels[0]}</div>
        <div>{parse(event.content.html)}</div>
      </section>
    </Layout>
  );
};
