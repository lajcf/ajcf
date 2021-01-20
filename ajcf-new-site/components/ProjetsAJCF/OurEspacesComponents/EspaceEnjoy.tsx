import React from "react";
import { CoffeeOutlined, FireOutlined, RocketOutlined } from "@ant-design/icons";
import { ActivitiesContentProps, EspaceContent, EspaceContentProps } from "./EspaceContent";

const activitiesContent: ActivitiesContentProps["activitiesContent"] = [
  {
    name: "Chinese Food",
    logo: <FireOutlined />,
  },
  {
    name: "Sport & Sorties",
    logo: <RocketOutlined />,
  },
];

const espaceEnjoyContent: EspaceContentProps["espaceContent"] = {
  categoryName: "Espace Enjoy",
  title: "Cuisiner et se dépasser",
  text:
    "L’espace Talk comprendEt has minim elitr intellegat. Mea aeterno eleifend antiopam ad, nam no suscipit quaerendum. At nam minimum ponderum. Est audiam animal molestiae te. Et has minim elitr intellegat. Mea aeterno eleifend antiopam ad, nam no suscipit quaerendum. At nam minimum ponderum",
  logo: <CoffeeOutlined />,
  activities: activitiesContent,
};

export const EspaceEnjoy = () => {
  return <EspaceContent espaceContent={espaceEnjoyContent} />;
};
