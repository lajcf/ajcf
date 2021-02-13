import React from "react";
import { NUMBER_OF_NEXT_EVENTS } from "../../../lib/constants";
import { EventPageFragment, EventPreviewFragment } from "../../../types/types";
import styles from "./Event.module.scss";
import { NextEventPreview } from "./NextEventPreview";

type FilterNextEventsProps = {
  currentEvent: EventPageFragment;
  events: EventPreviewFragment[];
};
type NextEventsProps = {
  event: EventPageFragment;
  events: EventPreviewFragment[];
};

const filterNextEvents = ({ currentEvent, events }: FilterNextEventsProps) => {
  const eventsWithoutCurrentEvent = events.filter((event) => event.id !== currentEvent.id);
  const nextEvents = eventsWithoutCurrentEvent.slice(0, NUMBER_OF_NEXT_EVENTS);
  return nextEvents;
};
export const NextEvents = ({ event, events }: NextEventsProps) => {
  const nextEvents = filterNextEvents({ currentEvent: event, events });
  return (
    <section className={styles.nextEventsSection}>
      <h2>Événements à venir</h2>
      <ul className={styles.nextEventsList}>
        {nextEvents.map((nextEvent) => (
          <NextEventPreview key={nextEvent.id} event={nextEvent} />
        ))}
      </ul>
    </section>
  );
};
