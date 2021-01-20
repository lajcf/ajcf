import React from "react";
import { DingtalkOutlined, TranslationOutlined, RadarChartOutlined } from "@ant-design/icons";
import { ActivitiesContentProps, EspaceContentProps, EspaceContent } from "./EspaceContent";

const activitiesContent: ActivitiesContentProps["activitiesContent"] = [
  {
    name: "Développement Personnel",
    logo: <DingtalkOutlined />,
  },
  {
    name: "Échanges Linguistiques",
    logo: <TranslationOutlined />,
  },
];

const espaceLearnContent: EspaceContentProps["espaceContent"] = {
  categoryName: "Espace Learn",
  title: "Se développer et explorer de nouveaux horizons",
  text:
    "L’espace Talk comprendEt has minim elitr intellegat. Mea aeterno eleifend antiopam ad, nam no suscipit quaerendum. At nam minimum ponderum. Est audiam animal molestiae te. Et has minim elitr intellegat. Mea aeterno eleifend antiopam ad, nam no suscipit quaerendum. At nam minimum ponderum",
  logo: <RadarChartOutlined />,
  activities: activitiesContent,
};

export const EspaceLearn = () => {
  return <EspaceContent espaceContent={espaceLearnContent} />;
};
