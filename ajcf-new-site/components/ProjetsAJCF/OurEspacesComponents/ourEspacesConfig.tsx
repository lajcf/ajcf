import React from "react";
import {
  CommentOutlined,
  ReadOutlined,
  HistoryOutlined,
  InsuranceOutlined,
  DingtalkOutlined,
  TranslationOutlined,
  RadarChartOutlined,
  TeamOutlined,
  IdcardOutlined,
  FullscreenExitOutlined,
  CoffeeOutlined,
  FireOutlined,
  RocketOutlined,
} from "@ant-design/icons";

export type ActivityContent = {
  name: string;
  logo: JSX.Element;
};

export type EspaceContent = {
  categoryName: string;
  title: string;
  text: string;
  logo: JSX.Element;
  activities: ActivityContent[];
};

export const ourEspacesContent: EspaceContent[] = [
  {
    categoryName: "Espace Talk",
    title: "Comprendre et défendre l'identité franco-chinoise",
    text:
      "L’espace Talk comprendEt has minim elitr intellegat. Mea aeterno eleifend antiopam ad, nam no suscipit quaerendum. At nam minimum ponderum. Est audiam animal molestiae te. Et has minim elitr intellegat. Mea aeterno eleifend antiopam ad, nam no suscipit quaerendum. At nam minimum ponderum",
    logo: <CommentOutlined />,
    activities: [
      {
        name: "Culture",
        logo: <ReadOutlined />,
      },
      {
        name: "Mémoire",
        logo: <HistoryOutlined />,
      },
      {
        name: "Défense des droits",
        logo: <InsuranceOutlined />,
      },
    ],
  },
  {
    categoryName: "Espace Learn",
    title: "Se développer et explorer de nouveaux horizons",
    text:
      "L’espace Talk comprendEt has minim elitr intellegat. Mea aeterno eleifend antiopam ad, nam no suscipit quaerendum. At nam minimum ponderum. Est audiam animal molestiae te. Et has minim elitr intellegat. Mea aeterno eleifend antiopam ad, nam no suscipit quaerendum. At nam minimum ponderum",
    logo: <RadarChartOutlined />,
    activities: [
      {
        name: "Développement Personnel",
        logo: <DingtalkOutlined />,
      },
      {
        name: "Échanges Linguistiques",
        logo: <TranslationOutlined />,
      },
    ],
  },
  {
    categoryName: "Espace Meet",
    title: "Connaître et intégrer notre réseau franco-chinois",
    text:
      "L’espace Talk comprendEt has minim elitr intellegat. Mea aeterno eleifend antiopam ad, nam no suscipit quaerendum. At nam minimum ponderum. Est audiam animal molestiae te. Et has minim elitr intellegat. Mea aeterno eleifend antiopam ad, nam no suscipit quaerendum. At nam minimum ponderum",
    logo: <TeamOutlined />,
    activities: [
      {
        name: "AJCF Club Pro",
        logo: <IdcardOutlined />,
      },
      {
        name: "Rencontres AJCF",
        logo: <FullscreenExitOutlined />,
      },
    ],
  },
  {
    categoryName: "Espace Enjoy",
    title: "Cuisiner et se dépasser",
    text:
      "L’espace Talk comprendEt has minim elitr intellegat. Mea aeterno eleifend antiopam ad, nam no suscipit quaerendum. At nam minimum ponderum. Est audiam animal molestiae te. Et has minim elitr intellegat. Mea aeterno eleifend antiopam ad, nam no suscipit quaerendum. At nam minimum ponderum",
    logo: <CoffeeOutlined />,
    activities: [
      {
        name: "Chinese Food",
        logo: <FireOutlined />,
      },
      {
        name: "Sport & Sorties",
        logo: <RocketOutlined />,
      },
    ],
  },
];
