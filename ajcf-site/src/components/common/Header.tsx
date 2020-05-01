import React, { memo } from 'react';
import { LandingLink } from '../LandingLink';
import { AJCFLogo } from '../AJCFLogo';

const LandingHeaderInner = () => {
  return (
    <ul>
      <li>
        <LandingLink className="main-link" href="/contact/">
          Nous contacter
        </LandingLink>
      </li>
      <li>
        <LandingLink className="main-link" href="/join/">
          Adhérer
        </LandingLink>
      </li>
      <li>
        <LandingLink className="main-link" href="/donate/">
          Faire un don
        </LandingLink>
      </li>
    </ul>
  );
};

const Header = memo(({ className }: { className?: string }) => {
  return (
    <header className={className} id="header">
      <LandingLink href="/home/">
        <AJCFLogo />
      </LandingLink>
      <nav className="ui text item menu">
        <LandingHeaderInner />
      </nav>
    </header>
  );
});

export { Header };
