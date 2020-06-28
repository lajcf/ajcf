import React, { Component } from "react";
import { Grid, StrictGridRowProps } from "semantic-ui-react";
import { DivAttributes } from "../../../../../../types/store/Utils";

const compact: React.CSSProperties = { padding: 0, margin: 0 };

type OvrseaCompactRowProps = {
  style?: React.CSSProperties;
} & StrictGridRowProps &
  DivAttributes;

class AJCFRow extends Component<OvrseaCompactRowProps> {
  render() {
    return (
      <Grid.Row {...this.props} style={{ ...compact, ...this.props.style }}>
        {this.props.children}
      </Grid.Row>
    );
  }
}

export default AJCFRow;
