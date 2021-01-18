import React from "react";
import { CommentOutlined, ReadOutlined, HistoryOutlined, InsuranceOutlined } from "@ant-design/icons";
import { ActivitiesContentProps, EspaceContent, EspaceContentProps } from "./EspaceContent";

const activitiesContent: ActivitiesContentProps[] = [
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
];

const espaceTalkContent: EspaceContentProps = {
  categoryName: "Espace Talk",
  title: "Comprendre et défendre l'identité franco-chinoise",
  text:
    "L’espace Talk comprendEt has minim elitr intellegat. Mea aeterno eleifend antiopam ad, nam no suscipit quaerendum. At nam minimum ponderum. Est audiam animal molestiae te. Et has minim elitr intellegat. Mea aeterno eleifend antiopam ad, nam no suscipit quaerendum. At nam minimum ponderum",
  logo: <CommentOutlined />,
  activities: activitiesContent,
};

export const EspaceTalk = () => {
  return <EspaceContent espaceContent={espaceTalkContent} />;
};
