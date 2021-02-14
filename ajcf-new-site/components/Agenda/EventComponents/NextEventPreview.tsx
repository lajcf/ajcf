import { Button } from "antd";
import Link from "next/link";
import React from "react";
import { dayjs } from "../../../lib/utils/dayjs";
import { formatContentSummary } from "../../../lib/utils/formatContentSummary";
import { EventPreviewFragment } from "../../../types/types";
import styles from "./Event.module.scss";

type NextEventProps = {
  event: EventPreviewFragment;
};
export const NextEventPreview = ({ event }: NextEventProps) => {
  const eventLink = `/agenda/${event.id}`;
  return (
    <li className={styles.nextEventPreview}>
      <div className={styles.nextEventCover}>{event.cover?.url && <img src={event.cover.url} />}</div>
      <div className={styles.nextEventInfos}>
        <h5>{dayjs(event.date).format("DD MMM YYYY HH:mm")}</h5>
        <Link href={eventLink}>
          <a>
            <h4>{event.title}</h4>
          </a>
        </Link>
      </div>
      <div className={styles.nextEventContent}>
        <p>{formatContentSummary(event.content.text, 80)}</p>
        <Link href={eventLink}>
          <Button>En savoir plus</Button>
        </Link>
      </div>
    </li>
  );
};
