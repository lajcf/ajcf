import React from "react";
import { EventPreviewFragment } from "../../../types/types";
import { Layout } from "../../Layout/Layout";
import { EventsList } from "./EventsList";

type AgendaContainerProps = {
  events: EventPreviewFragment[];
};

export const AgendaContainer = ({ events }: AgendaContainerProps) => {
  return (
    <Layout>
      <section>
        <h1>Agenda AJCF</h1>
        <p>
          Retrouvez tous les événements à venir et passés de l’AJCF ! Tenez vous au courant également de notre agenda
          grâce à la newsletter mensuelle de l’AJCF
        </p>
      </section>
      <EventsList events={events} />
    </Layout>
  );
};
