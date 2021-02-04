import React from "react";
import { EventPreviewFragment } from "../../../types/types";
import styles from "./Agenda.module.scss";
import { EventPreview } from "./EventPreview";

type EventsListProps = {
  events: EventPreviewFragment[];
};

export const EventsList = ({ events }: EventsListProps) => {
  return (
    <section>
      <h2>Les prochains événements de l’AJCF</h2>
      <ul className={styles.eventsList}>
        {events.map((event) => (
          <EventPreview key={event.id} event={event} />
        ))}
      </ul>
    </section>
  );
};
