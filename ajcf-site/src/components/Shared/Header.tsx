import React, { memo } from "react";
import { LandingLink } from "../LandingLink";
import { AJCFLogo } from "../AJCFLogo";
import { Link } from "gatsby";

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
      <Link to="/">
        <AJCFLogo />
      </Link>
      <div className="main-title">
        <h3 className="french-name">Association des Jeunes Chinois de France</h3>
        <h3 className="chinese-name">法国华裔青年协会</h3>
      </div>
      <nav className="ui text item menu">
        <LandingHeaderInner />
      </nav>
    </header>
  );
});

export { Header };
