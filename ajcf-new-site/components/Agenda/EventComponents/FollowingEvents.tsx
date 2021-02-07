import React from "react";
import { EventPageFragment, EventPreviewFragment } from "../../../types/types";
import styles from "./Event.module.scss";
import { FollowingEventPreview } from "./FollowingEventPreview";

type FollowingEventsProps = {
  event: EventPageFragment;
  events: EventPreviewFragment[];
};
export const FollowingEvents = ({ event, events }: FollowingEventsProps) => {
  const filterFollowingEvents = () => {
    const numberOfFollowingEvents = 3;
    const followingEvents = events.slice(0, numberOfFollowingEvents);
    const followingEventsWithoutPageEvent = followingEvents.filter((followingEvent) => followingEvent.id !== event.id);
    if (followingEventsWithoutPageEvent.length === numberOfFollowingEvents) return followingEventsWithoutPageEvent;
    // eslint-disable-next-line no-unused-expressions
    events[numberOfFollowingEvents] && followingEventsWithoutPageEvent.push(events[numberOfFollowingEvents]); // FIXME Eslint not happy here, what should I do?
    return followingEventsWithoutPageEvent;
  };

  const followingEvents = filterFollowingEvents();
  return (
    <section className={styles.followingEventsSection}>
      <h2>Événements à venir</h2>
      <ul className={styles.followingEventsList}>
        {followingEvents.map((followingEvent) => (
          <FollowingEventPreview key={followingEvent.id} event={followingEvent} />
        ))}
      </ul>
    </section>
  );
};
