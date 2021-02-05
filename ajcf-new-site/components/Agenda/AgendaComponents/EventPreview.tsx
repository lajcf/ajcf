import { Button } from "antd";
import React from "react";
import { dayjs } from "../../../lib/utils/dayjs";
import { formatContentSummary } from "../../../lib/utils/formatContentSummary";
import { EventPreviewFragment } from "../../../types/types";
import styles from "./Agenda.module.scss";

type EventPreviewProps = {
  event: EventPreviewFragment;
};

export const EventPreview = ({ event }: EventPreviewProps) => {
  return (
    <li className={styles.eventPreview}>
      <div className={styles.coverColumn}>
        <div className={styles.imgContainer}>{event.cover?.url && <img src={event.cover.url} />}</div>
        <h3>{`${dayjs(event.date).format("DD MMM YYYY - HH:mm")}`}</h3>
      </div>
      <div className={styles.textColumn}>
        <div className="capsHeading">{event.eventLabels[0]}</div>
        <h2>{event.title}</h2>
        <p className="texte2">{formatContentSummary(event.content.text, 280)}</p>
        <Button>En savoir plus</Button>
      </div>
    </li>
  ); // TODO Make decision regarding eventLabel(s). Is there just one or do we allow several labels?
};
