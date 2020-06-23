import { Link } from "gatsby";
import * as React from "react";
import Img from "gatsby-image";
import { css } from "@emotion/core";
import { EspaceProps } from "./EspacesSection";
import { colors } from "../../assets/css/variables/colors";

const articleStyle: React.CSSProperties = {
  display: "flex",
  position: "relative",
  justifyContent: "center",
  width: "25%",
};

const espaceImageStyle: React.CSSProperties = {
  height: "100%",
  width: "100%",
  borderRadius: "10px",
  transition: "opacity 0.5s ease",
};

const espaceLinkStyle = css`
  position: absolute;
  top: 0;
  left: 0;
  width: 225px;
  height: 225px;
  display: flex;
  text-align: center;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  transition: opacity 0.5s ease;
  opacity: 0;
  padding: 0 1em 0 1em;
  div {
    color: ${colors.ajcfWhite};
  }
`;

const determineEspaceDivStyle = (backgroundColor: string) => css`
  position: relative;
  width: 225px;
  height: 225px;
  margin: 1em;
  border-radius: 10px;
  transition: transform 0.5s ease, opacity 0.5s ease;
  background-color: ${backgroundColor};
  &:hover {
    transform: scale(1.1);
    > div {
      opacity: 0;
    }
    a {
      opacity: 1;
    }
  }
`;

export const Espace = ({ imageSource, to, backgroundColor, description }: EspaceProps) => {
  return (
    <article style={articleStyle}>
      <div css={determineEspaceDivStyle(backgroundColor)}>
        <Img style={espaceImageStyle} fluid={imageSource} alt="" />
        <Link to={to} css={espaceLinkStyle}>
          <div>
            <p>{description}</p>
          </div>
        </Link>
      </div>
    </article>
  );
};
