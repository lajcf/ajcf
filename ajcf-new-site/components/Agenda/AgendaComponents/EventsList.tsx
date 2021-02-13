import React, { useState } from "react";
import { EventLabel, EventPreviewFragment } from "../../../types/types";
import styles from "./Agenda.module.scss";
import { EventPreview } from "./EventPreview";
import { SelectEventLabels } from "./SelectEventLabels";

type filterEventsProps = {
  selectedEventLabel: EventLabel | undefined;
  events: EventPreviewFragment[];
};
type EventsListProps = {
  events: EventPreviewFragment[];
};

const filterEvents = ({ selectedEventLabel, events }: filterEventsProps) => {
  if (!selectedEventLabel) {
    return events;
  }
  return events.filter((event) => event.eventLabels.includes(selectedEventLabel));
};

export const EventsList = ({ events }: EventsListProps) => {
  const [selectedEventLabel, setSelectedEventLabel] = useState<EventLabel>();

  const filteredEvents = filterEvents({ selectedEventLabel, events });

  return (
    <section>
      <h2>Les prochains événements de l’AJCF</h2>
      <SelectEventLabels setSelectedEventLabel={setSelectedEventLabel} />
      <ul className={styles.eventsList}>
        {filteredEvents.map((event) => (
          <EventPreview key={event.id} event={event} />
        ))}
      </ul>
    </section>
  );
};
