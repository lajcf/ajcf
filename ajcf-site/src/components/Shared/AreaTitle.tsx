import React from "react";

interface AreaTitleProps {
  title: string;
}

export const AreaTitle = ({ title }: AreaTitleProps) => {
  return (
    <div className="area-title">
      <h1>{title}</h1>
    </div>
  );
};
