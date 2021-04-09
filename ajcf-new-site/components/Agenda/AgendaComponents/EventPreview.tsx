import Link from "next/link";
import React from "react";
import removeMarkdown from "remove-markdown";
import { dayjs } from "../../../lib/utils/dayjs";
import { formatContentSummary } from "../../../lib/utils/formatContentSummary";
import { LabelsList } from "../../../lib/utils/ItemsPreviewsListComponents/LabelsList";
import { EventPreviewFragment } from "../../../types/types";
import styles from "./EventPreview.module.scss";

type EventPreviewProps = {
  event: EventPreviewFragment;
};

export const EventPreview = ({ event }: EventPreviewProps) => {
  const contentSummary = formatContentSummary(removeMarkdown(event.content), 280);
  return (
    <li className={styles.previewItem}>
      <div className={styles.previewCover}>
        <Link href={`/agenda/${event.id}`}>
          <a>
            <div>{event.cover?.url && <img src={event.cover.url} />}</div>
          </a>
        </Link>
        <h3>{`${dayjs(event.date).format("DD MMM YYYY - HH:mm")}`}</h3>
      </div>
      <div className={styles.previewText}>
        <h3>{event.eventCategory}</h3>
        <Link href={`/agenda/${event.id}`}>
          <a>
            <h2>{event.title}</h2>
          </a>
        </Link>
        <p className="texte2">{contentSummary}</p>
        <LabelsList labels={event.eventLabels} />
      </div>
    </li>
  );
};
