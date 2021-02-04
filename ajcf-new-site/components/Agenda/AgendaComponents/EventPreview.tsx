import React from "react";
import { dayjs } from "../../../lib/utils/dayjs";
import { formatContentSummary } from "../../../lib/utils/formatContentSummary";
import { EventPreviewFragment } from "../../../types/types";

type EventPreviewProps = {
  event: EventPreviewFragment;
};

export const EventPreview = ({ event }: EventPreviewProps) => {
  return (
    <li>
      <div>
        <div>{event.cover?.url && <img src={event.cover.url} />}</div>
        <h3>{`${dayjs(event.date).format("DD MMM YYYY - HH:mm")}`}</h3>
      </div>
      <h2>{event.title}</h2>
      <p className="texte2">{formatContentSummary(event.content.text, 140)}</p>
    </li>
  );
};
