import React from "react";
import { ClearProperty, HeightProperty } from "csstype";

interface Props {
  className?: string;
  height?: HeightProperty<number>;
  clear?: ClearProperty;
  style?: React.CSSProperties;
}

const spaceStyle = (height?: Props["height"], clear?: Props["clear"], style?: Props["style"]): React.CSSProperties => ({
  width: "100%",
  height,
  clear,
  ...style,
});

const AJCFSpace = ({ className, clear, style, height = "1em" }: Props) => (
  <div className={className} style={spaceStyle(height, clear, style)} />
);

export default AJCFSpace;
