import React from "react";
import Image from "next/image";
import { ImageProps } from "next/dist/client/image";

export const AJCFImage = (props: ImageProps | { src: string }) => {
  const { src } = props;
  if (typeof src === "string") {
    return <img {...props} src={src} />;
  }
  return <Image {...props} placeholder="blur" />;
};
