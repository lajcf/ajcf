import { Link } from "gatsby";
import * as React from "react";
import { EspaceProps } from "./EspacesSection";
import Img from "gatsby-image";

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

export const Area = ({ imageSource, to, className, description }: EspaceProps) => {
  console.log(imageSource);
  return (
    <article style={articleStyle}>
      <div className={className}>
        <Img style={espaceImageStyle} fluid={imageSource} alt="" />
        <Link to={to}>
          <div className="area-tile-content">
            <p>{description}</p>
          </div>
        </Link>
      </div>
    </article>
  );
};
