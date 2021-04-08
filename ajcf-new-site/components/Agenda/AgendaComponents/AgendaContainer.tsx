import React from "react";
import { NUMBER_OF_EVENTS_TO_DISPLAY_AT_A_TIME } from "../../../lib/constants";
import {
  Item,
  ItemsPreviewsListContainer,
} from "../../../lib/utils/ItemsPreviewsListComponents/ItemsPreviewsListContainer";
import { EventPreviewFragment } from "../../../types/types";
import { Layout } from "../../Layout/Layout";

export const AgendaContainer = ({ events }: { events: EventPreviewFragment[] }) => {
  return (
    <Layout>
      <section>
        <h1>Agenda AJCF</h1>
        <p>
          Retrouvez tous les événements à venir et passés de l’AJCF ! Tenez vous au courant également de notre agenda
          grâce à la newsletter mensuelle de l’AJCF
        </p>
      </section>
      <ItemsPreviewsListContainer
        items={events as Item[]}
        numberOfItemsToDisplayAtATime={NUMBER_OF_EVENTS_TO_DISPLAY_AT_A_TIME}
      />
    </Layout>
  );
};
