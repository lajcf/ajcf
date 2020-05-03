import React from "react";
import Scrollspy from "react-scrollspy";

import Tab from "./Tab";
import { Icon } from "semantic-ui-react";

const Sidebar = () => {
  const [tabs] = React.useState([
    { content: "Accueil", href: "home", className: "main-link" },
    { content: "Espaces", href: "areas", className: "main-link" },
    { content: "Actualités", href: "news", className: "main-link" },
    { content: "À propos", href: "about", className: "main-link" },
  ]);
  return (
    <section id="sidebar">
      <div className="inner">
        <nav>
          <Scrollspy items={tabs.map((s) => s.href)} currentClassName="active" offset={-500}>
            {tabs.map((tab) => (
              <Tab key={tab.href} {...tab} />
            ))}
          </Scrollspy>
        </nav>
        <Icon name="facebook" size="large" />
      </div>
    </section>
  );
};

export default Sidebar;
