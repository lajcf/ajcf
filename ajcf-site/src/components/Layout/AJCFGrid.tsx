import React, { Component } from "react";
import { Grid, StrictGridProps } from "semantic-ui-react";

const compact: React.CSSProperties = { margin: 0, width: "100%" };

export type BasicAttributes<E, T> = Partial<React.HTMLAttributes<E> & React.DOMAttributes<T>>; // for MouseEvents, e.g. onMouseEnter
export type DivAttributes = BasicAttributes<HTMLDivElement, React.BaseHTMLAttributes<HTMLDivElement>>;
export type OvrseaGridProps = StrictGridProps & DivAttributes;

class AJCFGrid extends Component<OvrseaGridProps> {
  render() {
    return (
      <Grid {...this.props} style={{ ...compact, ...this.props.style }}>
        {this.props.children}
      </Grid>
    );
  }
}

export default AJCFGrid;
