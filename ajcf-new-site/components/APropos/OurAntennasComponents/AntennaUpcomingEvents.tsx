import React from "react";
import Link from "next/link";
import { EventPreviewFragment } from "../../../types/types";
import styles from "./OurAntennas.module.scss";
import { dayjs } from "../../../lib/utils/dayjs";
import { AJCFImage } from "../../../lib/utils/AJCFImage";

const EventItem = ({ event }: { event: EventPreviewFragment }) => {
  return (
    <li className={styles.eventItemContainer}>
      <div>{event.cover && <AJCFImage src={event.cover.url} />}</div>
      <div className={styles.eventItemText}>
        <div>
          <h5>{`${dayjs(event.date).format("DD MMM YYYY HH:mm")}`}</h5>
        </div>
        <div>
          <h4 className="capsHeading">{event.category}</h4>
          <h3>{event.title}</h3>
        </div>
      </div>
    </li>
  );
};

export const AntennaUpcomingEvents = ({ events }: { events: EventPreviewFragment[] }) => {
  return (
    <section className={styles.antennaEventsSection}>
      <h2>Événements à venir</h2>
      <ul className={styles.antennaEventsList}>
        {events.map((event) => (
          <Link href={`/agenda/${event.id}`} key={event.id}>
            <a>
              <EventItem event={event} />
            </a>
          </Link>
        ))}
      </ul>
    </section>
  );
};
