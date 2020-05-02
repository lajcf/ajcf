import React from "react";
import { BureauMemberProps } from "./Bureau";
import AJCFColumn from "../Layout/AJCFColumn";
import { LazyLoadedImage } from "../Shared/LazyLoadedImage";

const style: React.CSSProperties = {
  textAlign: "center",
};

export const BureauMember = ({ imageSource, name, role }: BureauMemberProps) => {
  return (
    <AJCFColumn className={"four"}>
      <span>
        <LazyLoadedImage
          dominantColor="#ffffff"
          widthHeightRatio={47}
          srcLarge={imageSource}
          id="bureau-laetitia"
          alt="Laetitia Présidente"
        />
      </span>
      <div style={style}>
        <h2>{name}</h2>
        <p>{role}</p>
      </div>
    </AJCFColumn>
  );
};
