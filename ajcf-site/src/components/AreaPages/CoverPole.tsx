import React from "react";
import { Link } from "gatsby";
import { TalkPoleId } from "../Shared/constants";

export interface CoverPoleProps {
  className: string;
  imageSource: string;
  to: string;
  poleId: TalkPoleId;
}

export const CoverPole = ({ className, imageSource, to }: CoverPoleProps) => {
  return (
    <div className={className}>
      <img src={imageSource} alt="" />
      <Link to={to} />
    </div>
  );
};
