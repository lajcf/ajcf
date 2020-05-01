import React from 'react';
import Scrollspy from 'react-scrollspy';

import Tab from './Tab';

const Sidebar = () => {
  const [tabs] = React.useState([
    { content: 'Accueil', href: 'home', className: 'main-link' },
    { content: 'Qui sommes-nous ?', href: 'one', className: 'main-link' },
    { content: 'Projets', href: 'two', className: 'main-link' },
    { content: 'Actualités', href: 'three', className: 'main-link' },
  ]);
  return (
    <section id="sidebar">
      <div className="inner">
        <nav>
          <Scrollspy
            items={tabs.map((s) => s.href)}
            currentClassName="active"
            offset={0}
          >
            {tabs.map((tab) => (
              <Tab key={tab.href} {...tab} />
            ))}
          </Scrollspy>
        </nav>
      </div>
    </section>
  );
};

export default Sidebar;
