import React, { memo } from "react";
import { Link } from "gatsby";
import { css } from "@emotion/core";
import { AJCFLogo } from "./AJCFLogo";
import { colors } from "../../../assets/css/variables/colors";
import { zIndices } from "../../../assets/css/variables/zIndices";
import { sizes } from "../../../assets/css/variables/sizes";

const LandingHeaderInner = () => {
  return (
    <ul>
      <li>
        <Link className="main-link" to="/contact/">
          Nous contacter
        </Link>
      </li>
      <li>
        <Link className="main-link" to="/join/">
          Adhérer
        </Link>
      </li>
      <li>
        <Link className="main-link" to="/donate/">
          Faire un don
        </Link>
      </li>
    </ul>
  );
};

const Header = memo(() => {
  const headerStyle = css({
    backgroundColor: colors.colorTalkLight,
    display: "flex",
    zIndex: zIndices.zIndexHeader,
    position: "sticky",
    height: sizes.headerHeight,
  });
  return (
    <header css={headerStyle} id="header">
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
