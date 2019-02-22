import React, { Component } from "react";
import { Grid, Button } from "semantic-ui-react";

import SelfStudyInverseOrange from "./images/SelfStudyInverseOrange";

export class pricingSrna extends Component {
  render() {
    return (
      <div>
        <div className="container-body">
          <Grid columns={3} relaxed stackable>
            <Grid.Row>
              <Grid.Column>
                <div className="pricing center">
                  <div className="pricing-header">
                    <SelfStudyInverseOrange />
                  </div>
                  <div>
                    <h2>
                      {" "}
                      3 <br /> Months
                    </h2>
                    <h1> $159</h1>
                    <a href="https://na.selfstudy.plus/purchase/SK00000000S3">
                      <Button
                        size="huge"
                        color="blue"
                        style={{ margin: "20px 0 20px", color: "white" }}
                      >
                        {" "}
                        Select{" "}
                      </Button>
                    </a>
                  </div>
                </div>
              </Grid.Column>
              <Grid.Column>
                {" "}
                <div className="pricing">
                  <div className="pricing-header">
                    <SelfStudyInverseOrange />
                  </div>
                  <div>
                    <h2>
                      {" "}
                      6 <br /> Months
                    </h2>
                    <h1> $199</h1>
                    <a href="https://na.selfstudy.plus/purchase/SK00000000S6">
                      <Button
                        size="huge"
                        color="blue"
                        style={{ margin: "20px 0 20px", color: "white" }}
                      >
                        {" "}
                        Select{" "}
                      </Button>
                    </a>
                  </div>
                </div>
              </Grid.Column>
              <Grid.Column>
                {" "}
                <div className="pricing">
                  <div className="pricing-header">
                    <SelfStudyInverseOrange />
                  </div>
                  <div>
                    <h2>
                      {" "}
                      12 <br /> Months
                    </h2>
                    <h1> $239</h1>
                    <a href="https://na.selfstudy.plus/purchase/SK0000000S12">
                      <Button
                        size="huge"
                        color="blue"
                        style={{ margin: "20px 0 20px", color: "white" }}
                      >
                        {" "}
                        Select{" "}
                      </Button>
                    </a>
                  </div>
                </div>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </div>
      </div>
    );
  }
}

export default pricingSrna;
