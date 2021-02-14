import parse from "html-react-parser";
import React from "react";
import { EventPageFragment, EventPreviewFragment } from "../../../types/types";
import { Layout } from "../../Layout/Layout";
import styles from "./Event.module.scss";
import { NextEvents } from "./NextEvents";

type EventContainerProps = {
  event: EventPageFragment;
  events: EventPreviewFragment[];
};

export const EventContainer = ({ event, events }: EventContainerProps) => {
  return (
    <Layout>
      <section className={styles.eventContentSection}>
        <h1>{event.title}</h1>
        {event.eventLabels && (
          <ul className={styles.eventLabelsList}>
            {event.eventLabels.map((label) => (
              <li key={label}>#{label}</li>
            ))}
          </ul>
        )}
        <div>{parse(event.content.html)}</div>
      </section>
      <NextEvents event={event} events={events} />
    </Layout>
  );
};
