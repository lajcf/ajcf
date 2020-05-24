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
import { AreaPageTheme, PoleProps } from "../../../pages/talk";
import { zIndices } from "../../../assets/css/variables/zIndices";

interface SecondarySidebarProps {
  sectionName: AreaName;
  pageTheme: AreaPageTheme;
  poles: PoleProps[];
  pageFrenchTitle: string;
  pageChineseTitle: string;
}

export const SecondarySidebar = ({ pageFrenchTitle, pageChineseTitle, pageTheme, poles }: SecondarySidebarProps) => {
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

    &:hover {
      color: ${pageTheme.secondaryColor};
    }
  `;

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
    &:hover {
      color: ${pageTheme.secondaryColor};
    }
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
    nav {
      > ul {
        list-style: none;
        padding: 0;
        > li {
          transform: translateY(0);
          transition: opacity 0.15s ease, transform 0.75s ease;
          margin: 4em 0 0 0;
          opacity: 1;
          padding: 0;
          position: relative;

          &:nth-child(1) {
            transition-delay: 0.2s + 0.25s;
          }
          &:nth-child(2) {
            transition-delay: 0.4s + 0.25s;
          }
          &:nth-child(3) {
            transition-delay: 0.6s + 0.25s;
          }
          &:nth-child(4) {
            transition-delay: 0.8s + 0.25s;
          }
          &.active {
            a {
              color: colors.$color-talk-light;

              &:after {
                max-width: 100%;
              }
            }
          }
        }
      }
    }
  `;
  const secondarySidebarStyle = css`
    background-color: ${pageTheme.mainColor};
    padding: 2em 1.25em;
    text-align: right;
    width: ${sizes.sidebarWidth};
    height: 100vh;
    z-index: ${zIndices.zIndexSidebar};
    overflow-y: auto;
    overflow-x: hidden;
    position: fixed;
    left: 0;
    top: 0;
  `;
  const tabs = poles.map((pole) => ({
    content: pole.title,
    key: pole.id,
    href: pole.to,
    className: "main-link",
  }));
  return (
    <section id="secondary-sidebar" css={secondarySidebarStyle}>
      <div css={secondarySidebarContentStyle}>
        <Link to="/">
          <Icon css={backToHomePageIconStyle} className="arrow left" size="big" />
        </Link>
        <AreaTitle titleFrench={pageFrenchTitle} titleChinese={pageChineseTitle} />
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
        <SocialIcons pageTheme={pageTheme} />
      </div>
    </section>
  );
};
