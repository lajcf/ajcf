import { Button } from "antd";
import React from "react";
import { dayjs } from "../../../lib/utils/dayjs";
import { formatContentSummary } from "../../../lib/utils/formatContentSummary";
import { EventPreviewFragment } from "../../../types/types";
import styles from "./Event.module.scss";

type FollowingEventProps = {
  event: EventPreviewFragment;
};
export const FollowingEventPreview = ({ event }: FollowingEventProps) => {
  return (
    <li className={styles.followingEventPreview}>
      <div className={styles.followingEventCover}>{event.cover?.url && <img src={event.cover.url} />}</div>
      <div className={styles.followingEventInfos}>
        <h5>{dayjs(event.date).format("DD MMM YYYY HH:mm")}</h5>
        <h4>{event.title}</h4>
      </div>
      <div className={styles.followingEventContent}>
        <p>{formatContentSummary(event.content.text, 80)}</p>
        <Button>En savoir plus</Button>
      </div>
    </li>
  );
};
