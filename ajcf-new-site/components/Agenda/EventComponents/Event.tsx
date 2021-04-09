import dayjs from "dayjs";
import React from "react";
import ReactMarkdown from "react-markdown";
import { LabelsList } from "../../../lib/utils/ItemsPreviewsListComponents/LabelsList";
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
        <h2>{event.eventCategory}</h2>
        <LabelsList labels={event.eventLabels} />
        <h1>{event.title}</h1>
        <h4>{dayjs(event.date).format("DD MMM YYYY")}</h4>
        <ReactMarkdown
          className={styles.content}
          renderers={{
            link: ({ href, children }) => (
              <a href={href} target="_blank" rel="noopener noreferrer">
                {children}
              </a>
            ),
          }}
        >
          {event.content}
        </ReactMarkdown>
      </section>
    </>
  );
};