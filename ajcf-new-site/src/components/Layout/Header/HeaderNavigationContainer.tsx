import React, { ReactNode } from "react";

export type HeaderNavigationContainerProps = { children: ReactNode; style: React.CSSProperties };

export const HeaderNavigationContainer = ({ children, style }: HeaderNavigationContainerProps) => {
  return <div style={style}>{children}</div>;
};
