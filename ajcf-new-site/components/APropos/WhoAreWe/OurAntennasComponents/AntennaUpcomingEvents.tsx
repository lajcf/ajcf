import React from "react";
import styles from "./OurAntennas.module.scss";
import { dayjs } from "../../../../lib/utils/dayjs";

type AntennaEventProps = {
  id: number;
  name: string;
  eventCategory: string;
  date: Date;
};

const antennaEvents: AntennaEventProps[] = [
  {
    id: 1,
    name: "Titre de l'événement",
    eventCategory: "Conférences AJCF",
    date: new Date(2020, 6, 30, 19, 0),
  },
  {
    id: 2,
    name: "Titre de l'événement",
    eventCategory: "Conférences AJCF",
    date: new Date(2020, 6, 30, 19, 0),
  },
  {
    id: 3,
    name: "Titre de l'événement",
    eventCategory: "Conférences AJCF",
    date: new Date(2020, 6, 30, 19, 0),
  },
];

export const AntennaUpcomingEvents = () => {
  return (
    <section className={styles.antennaEventsSection}>
      <h2>Événements à venir</h2>
      <p className="texte1">Retrouvez tous nos événéments des Conférences Débats de l’AJCF !</p>
      <ul className={styles.antennaEventsList}>
        {antennaEvents.map((event) => (
          <li key={event.id} className={styles.antennaEvent}>
            <img className={styles.antennaEventCover} src={require("../../../../public/ajcf-logo.png")} />
            <div className={styles.antennaEventBody}>
              <div className={styles.antennaEventDate}>{`${dayjs(event.date).format("DD MMM YYYY HH")}h`}</div>
              <div className={styles.antennaEventVerticalSeparator} />
              <div className={styles.antennaEventDescription}>
                <div className="capsHeading">{event.eventCategory}</div>
                <h3>{event.name}</h3>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
};
