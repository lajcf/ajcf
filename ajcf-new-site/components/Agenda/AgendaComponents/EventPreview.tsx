import { Button } from "antd";
import Link from "next/link";
import React from "react";
import { dayjs } from "../../../lib/utils/dayjs";
import { formatContentSummary } from "../../../lib/utils/formatContentSummary";
import { EventPreviewFragment } from "../../../types/types";
import styles from "./Agenda.module.scss";

type EventPreviewProps = {
  event: EventPreviewFragment;
};

export const EventPreview = ({ event }: EventPreviewProps) => {
  const eventLink = `/agenda/${event.id}`;
  const additionalEventLabels = event.eventLabels.slice(1);
  return (
    <li className={styles.eventPreview}>
      <div className={styles.coverColumn}>
        <div className={styles.imgContainer}>{event.cover?.url && <img src={event.cover.url} />}</div>
        <h3>{`${dayjs(event.date).format("DD MMM YYYY - HH:mm")}`}</h3>
      </div>
      <div className={styles.textColumn}>
        <h3>#{event.eventLabels[0]}</h3>
        <Link href={eventLink}>
          <a>
            <h2>{event.title}</h2>
          </a>
        </Link>
        <p className="texte2">{formatContentSummary(event.content.text, 280)}</p>
        {additionalEventLabels && (
          <ul className={styles.additionalEventLabelsList}>
            {additionalEventLabels.map((label) => (
              <li key={label}>#{label}</li>
            ))}
          </ul>
        )}
        <Link href={eventLink}>
          <Button>En savoir plus</Button>
        </Link>
      </div>
    </li>
  );
};
