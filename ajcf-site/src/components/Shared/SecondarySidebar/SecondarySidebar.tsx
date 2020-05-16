import React from "react";
import { SocialIcons } from "../Sidebar/SocialIcons";
import cx from "classnames";
import { Link } from "gatsby";
import { AreaName } from "../constants";

interface SecondarySidebarProps {
  sectionName: AreaName;
}

interface SecondarySidebarTabProps {
  content: string;
  key: string;
  href: string;
  className: string;
}

export const SecondarySidebar = ({ sectionName }: SecondarySidebarProps) => {
  const [tabs] = React.useState<SecondarySidebarTabProps[]>([
    {
      content: "Conférences & Débats",
      key: "conferences",
      href: "/areas/talk/conferences",
      className: "main-link",
    },
    { content: "Mémoire", key: "memory", href: "/areas/talk/memory", className: "main-link" },
    { content: "Défense des droits", key: "rights", href: "/areas/talk/rights", className: "main-link" },
  ]);
  return (
    <section id="secondary-sidebar" className={cx(sectionName)}>
      <div className="inner">
        <nav>
          <ul>
            {tabs.map((tab) => (
              <li key={tab.key} className={cx(tab.className)}>
                <Link to={tab.href}>{tab.content}</Link>
              </li>
            ))}
          </ul>
        </nav>
        <SocialIcons />
      </div>
    </section>
  );
};
