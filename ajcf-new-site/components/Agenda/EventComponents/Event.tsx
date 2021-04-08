import parse from "html-react-parser";
import React from "react";
import { EventPageFragment } from "../../../types/types";
import styles from "./Event.module.scss";

export const Event = ({ event }: { event: EventPageFragment }) => {
  return (
    <>
      {event.cover && (
        <div className={styles.bannerContainer}>
          <img src={event.cover.url} />
        </div>
      )}
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
    </>
  );
};
