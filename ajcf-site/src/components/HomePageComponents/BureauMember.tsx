import React from "react";
import { BureauMemberProps } from "./Bureau";
import AJCFColumn from "../Shared/Layout/AJCFColumn";
import { LazyLoadedImage } from "../Shared/Components/LazyLoadedImage";

const style: React.CSSProperties = {
  textAlign: "center",
};

export const BureauMember = ({ imageSource, name, role, id }: BureauMemberProps) => {
  return (
    <AJCFColumn className="ui four">
      <span>
        <LazyLoadedImage srcLarge={imageSource} id={id} alt={name} />
      </span>
      <div style={style}>
        <h2>{name}</h2>
        <p>{role}</p>
      </div>
    </AJCFColumn>
  );
};
