import React from "react";
import { TeamOutlined, IdcardOutlined, FullscreenExitOutlined } from "@ant-design/icons";
import { ActivitiesContentProps, EspaceContent, EspaceContentProps } from "./EspaceContent";

const activitiesContent: ActivitiesContentProps["activitiesContent"] = [
  {
    name: "AJCF Club Pro",
    logo: <IdcardOutlined />,
  },
  {
    name: "Rencontres AJCF",
    logo: <FullscreenExitOutlined />,
  },
];

const espaceMeetContent: EspaceContentProps["espaceContent"] = {
  categoryName: "Espace Meet",
  title: "Connaître et intégrer notre réseau franco-chinois",
  text:
    "L’espace Talk comprendEt has minim elitr intellegat. Mea aeterno eleifend antiopam ad, nam no suscipit quaerendum. At nam minimum ponderum. Est audiam animal molestiae te. Et has minim elitr intellegat. Mea aeterno eleifend antiopam ad, nam no suscipit quaerendum. At nam minimum ponderum",
  logo: <TeamOutlined />,
  activities: activitiesContent,
};

export const EspaceMeet = () => {
  return <EspaceContent espaceContent={espaceMeetContent} />;
};
