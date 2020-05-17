import React from "react";
import { css } from "@emotion/core";
import { colors } from "../../../assets/css/variables/colors";
import { AreaPageTheme } from "../../../pages/areas/talk";

interface SocialIconsProps {
  pageTheme: AreaPageTheme;
}

export const SocialIcons = ({ pageTheme }: SocialIconsProps) => {
  const socialIconsStyle = css`
    position: absolute;
    bottom: 0;
    padding-left: 0.4em;
    margin: 0.1em;
    > ul {
      padding: 0;
      list-style: none;
      > li {
        text-align: center;
        > a {
          padding: 0.3em;

          > i.social {
            color: ${colors.ajcfWhite};
            transition: background-color 0.1s ease-in-out;
            background-color: ${pageTheme.mainColor};
            line-height: 2em !important;
            width: 40px !important;
            height: 40px !important;
            box-shadow: 0 0 0.05em 0.05em ${colors.ajcfWhite};

            &:hover {
              background-color: ${pageTheme.mainColorLight};
            }
          }
        }
      }
    }
  `;
  return (
    <div id="sidebar-social-icons" css={socialIconsStyle}>
      <ul>
        <li>
          <a href="https://www.facebook.com/lajcf">
            <i className="ui icon facebook f circular social" />
          </a>
          <a href="https://twitter.com/ajcf_fr">
            <i className="ui icon twitter circular social" />
          </a>
          <a href="https://www.instagram.com/ajcf_fr/">
            <i className="ui icon instagram circular social" />
          </a>
        </li>
      </ul>
    </div>
  );
};
