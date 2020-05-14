import { Link } from "gatsby";
import * as React from "react";
import { AreaProps } from "./AreasSection";

export const Area = ({ imageSource, to, className, description }: AreaProps) => {
  return (
    <article className="style1">
      <div className={className}>
        <img src={imageSource} alt="" />
        <Link to={to}>
          <div className="area-tile-content">
            <p>{description}</p>
          </div>
        </Link>
      </div>
    </article>
  );
};
