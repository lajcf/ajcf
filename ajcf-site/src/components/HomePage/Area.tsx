import { Link } from "gatsby";
import * as React from "react";
import { AreaProps } from "./AreasSection";

export const Area = ({ imageSource, to }: AreaProps) => {
  return (
    <article className="style1">
      <span className="image">
        <img src={imageSource} alt="" />
      </span>
      <Link to={to}>
        <div className="content"></div>
      </Link>
    </article>
  );
};
