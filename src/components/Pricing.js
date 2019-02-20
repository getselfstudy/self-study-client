import React, { Component } from "react";
import { Grid } from "semantic-ui-react";

import InverseLogoBlue from "./images/InverseLogoBlue";
export class pricing extends Component {
  render() {
    return (
      <div>
        <div className="container-body">
          <Grid columns={3}>
            <Grid.Row>
              <Grid.Column>
                <InverseLogoBlue />
              </Grid.Column>
              <Grid.Column>.</Grid.Column>
              <Grid.Column>.</Grid.Column>
            </Grid.Row>
          </Grid>
        </div>
      </div>
    );
  }
}

export default pricing;
