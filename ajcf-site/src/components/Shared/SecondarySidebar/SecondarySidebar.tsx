import React from "react";
import cx from "classnames";
import { Link } from "gatsby";
import { css } from "@emotion/core";
import { Icon } from "semantic-ui-react";
import { SocialIcons } from "../Sidebar/SocialIcons";
import { AreaName } from "../constants";
import { colors } from "../../../assets/css/variables/colors";
import { sizes } from "../../../assets/css/variables/sizes";
import { AreaTitle } from "../AreaTitle";

interface SecondarySidebarProps {
  sectionName: AreaName;
}

interface SecondarySidebarTabProps {
  content: string;
  key: string;
  href: string;
  className: string;
}

const secondaryTabLinkStyle = css`
  transition: color 0.2s ease;
  border: 0;
  color: ${colors.ajcfWhite};
  display: block;
  font-size: ${sizes.secondarySidebarTitleFontSize};
  letter-spacing: 0.25em;
  line-height: 1.75;
  text-transform: uppercase;
  outline: 0;
  position: relative;
`;

/* const activeLinkStyle = css`
  border-radius: 0.2em;
  position: absolute;
  bottom: 0;
  right: 0;
  height: 0.15em;
  width: 100%;
  content: "";
  max-width: 100%;
  background-image: linear-gradient(to right, ${colors.colorTalkLight}, ${colors.colorTalkLight});
  color: ${colors.colorTalkLight};
`; */

const activeLinkStyle = {
  borderRadius: "0.2em",
  // position: "absolute",
  bottom: "0",
  right: "0",
  height: "0.15em",
  width: "100%",
  content: "",
  maxWidth: "100%",
  backgroundImage: `linear-gradient(to right, ${colors.colorTalkLight}, ${colors.colorTalkLight})`,
  color: colors.colorTalkLight,
};

const backToHomePageIconStyle = css`
  color: ${colors.ajcfWhite};
  margin-bottom: 0em !important;
  padding-bottom: 4em !important;
`;

const secondarySidebarContentStyle = css`
  display: flex;
  flex-direction: column;
  justify-content: center;
  transform: translateY(0);
  transition: opacity 1s ease;
  min-height: 100%;
  opacity: 1;
  width: 100%;
  position: relative;
`;

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
      <div css={secondarySidebarContentStyle}>
        <Link to="/">
          <Icon css={backToHomePageIconStyle} className="arrow left" size="big" />
        </Link>
        <AreaTitle titleFrench="Identité" titleChinese="探讨" />
        <nav>
          <ul>
            {tabs.map((tab) => (
              <li key={tab.key} className={cx(tab.className)}>
                <Link to={tab.href} css={secondaryTabLinkStyle} activeStyle={activeLinkStyle}>
                  {tab.content}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <SocialIcons />
      </div>
    </section>
  );
};
