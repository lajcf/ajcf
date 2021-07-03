import Link from "next/link";
import React from "react";
import removeMarkdown from "remove-markdown";
import { dayjs } from "../../../lib/utils/dayjs";
import { formatContentSummary } from "../../../lib/utils/formatContentSummary";
import { EventPreviewFragment } from "../../../types/types";
import styles from "./Event.module.scss";
import { AJCFImage } from "../../../lib/utils/AJCFImage";

type NextEventProps = {
  event: EventPreviewFragment;
};
export const NextEventPreview = ({ event }: NextEventProps) => {
  const eventLink = `/agenda/${event.id}`;
  return (
    <li>
      <Link href={eventLink}>
        <a>
          <div>{event.cover?.url && <AJCFImage src={event.cover.url} />}</div>
          <div className={styles.nextEventInfos}>
            <h5>{dayjs(event.date).format("DD MMM YYYY HH:mm")}</h5>
            <div>
              <h5>{event.category}</h5>
              <h4>{event.title}</h4>
            </div>
          </div>
          <div className={styles.nextEventContent}>
            <p>{formatContentSummary(removeMarkdown(event.content), 80)}</p>
            <Link href={eventLink}>
              <button type="button">En savoir plus</button>
            </Link>
          </div>
        </a>
      </Link>
    </li>
  );
};
