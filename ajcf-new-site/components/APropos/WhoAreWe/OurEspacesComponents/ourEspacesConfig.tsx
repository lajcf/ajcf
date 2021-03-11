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
  summaryText: string;
  title: string;
  text: string;
  logo: JSX.Element;
  activities: ActivityContent[];
};

export const OUR_ESPACES: EspaceContent[] = [
  {
    categoryName: "Talk",
    summaryText: "TALK - Identité - Comprendre et défendre l’identité franco-chinoise",
    title: "L’identité est riche et complexe, il faut en parler.",
    text:
      "Cet espace est dédié à la culture, à l’histoire et à l’identité franco-chinoises. que nous proposons de découvrir et de valoriser ensemble. Plusieurs axes sont abordés à travers les trois pôles : Culture, Education/Mémoire, Défense des droits.",
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
    categoryName: "Learn",
    summaryText: "LEARN - Découverte - Se développer et explorer de nouveaux horizon",
    title: "La découverte de soi et de l’autre se fait par l’apprentissage.",
    text:
      "Cet espace procure des occasions pour s’inspirer et progresser, grâce aux événements du pôle Développement personnel et du pôle Echanges linguistiques.",
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
    categoryName: "Meet",
    summaryText: "MEET - Connexion - Connaître et intégrer le réseau franco-chinois",
    title: "La connexion à un réseau franco-chinois est source de belles rencontres.",
    text:
      "Cet espace favorise notre interaction avec tous les partenaires et procure des moments d’échanges privilégiés avec nos membres. Ces occasions se présentent via l’AJCF Club Pro ou les Rencontres AJCF.",
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
    categoryName: "Enjoy",
    summaryText: "ENJOY - Loisir - Apprendre en s’amusant et se dépasser",
    title: "Quel meilleur loisir dans la vie que d'en profiter ?",
    text:
      "Cet espace vous propose de partager le plaisir de manger autour de la table avec de nombreuses cuisines de Chinese Food Day ou encore de se dépenser via des activités physiques grâce au pôle Sports & Sorties.",
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
