import React, { HTMLAttributes } from "react";
import { GridColumn, SemanticWIDTHS, StrictGridColumnProps } from "semantic-ui-react";

const compact: React.CSSProperties = { padding: 0, margin: 0 };

/** SemanticUI device breakpoints:
 *
 * DEVICE   -   MIN   -   MAX
 *
 * mobile       320       767
 * tablet       768       991
 * computer     992       NA
 * largeScreen  1200      1919
 * widescreen   1920      NA
 * **/

export interface OvrseaColumnDimensions {
  xs?: SemanticWIDTHS;
  sm?: SemanticWIDTHS;
  md?: SemanticWIDTHS;
  lg?: SemanticWIDTHS;
  xl?: SemanticWIDTHS;
}

export type OvrseaCompactColumnProps = OvrseaColumnDimensions &
  StrictGridColumnProps &
  Omit<HTMLAttributes<HTMLDivElement>, "color">;

const AJCFColumn = (props: OvrseaCompactColumnProps) => {
  const { xs, sm, md, lg, xl, ...cleanProps } = props;

  return (
    <GridColumn
      widescreen={xl || lg || md || sm || xs}
      largeScreen={lg || md || sm || xs}
      computer={md || sm || xs}
      tablet={sm || xs}
      mobile={xs}
      {...cleanProps}
      style={{ ...compact, ...props.style }}
    >
      {props.children}
    </GridColumn>
  );
};

export default AJCFColumn;
