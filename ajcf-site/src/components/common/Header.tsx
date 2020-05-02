import React, { memo } from "react";
import { LandingLink } from "../LandingLink";
import { AJCFLogo } from "../AJCFLogo";

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

const style: React.CSSProperties = {
  paddingTop: "0.5em",
  paddingLeft: "1em",
  paddingRight: "1em",
  fontWeight: "bolder",
  color: "white",
};

const Header = memo(({ className }: { className?: string }) => {
  return (
    <header className={className} id="header">
      <LandingLink href="/home/">
        <AJCFLogo />
      </LandingLink>
      <div style={style}>
        <h4>Association des Jeunes Chinois de France</h4>
        法国华裔青年协会
      </div>
      <nav className="ui text item menu">
        <LandingHeaderInner />
      </nav>
    </header>
  );
});

export { Header };
