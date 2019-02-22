import React, { Component } from "react";
import { Grid, Button } from "semantic-ui-react";
import SelfStudyInverseBlue from "./images/SelfStudyInverseBlue";
import SelfStudyInverseOrange from "./images/SelfStudyInverseOrange";

export class pricing extends Component {
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
                      6 <br /> Months
                    </h2>
                    <h1> $249</h1>
                    <a href="https://na.selfstudy.plus/purchase/SK00000000C6">
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
                    <h1> $299</h1>
                    <a href="https://na.selfstudy.plus/purchase/SK00000000C6">
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
                  <div className="pricing-header-blue">
                    <SelfStudyInverseBlue />
                  </div>
                  <div className="pricing-header-blue-sub">
                    {" "}
                    <h1>CE 20</h1>{" "}
                  </div>
                  <div>
                    <h1 style={{ paddingTop: "20px" }}> $199</h1>
                    <p> earn up to 20 hours of CE</p>
                    <a href="https://na.selfstudy.plus/purchase/SK00000000C6">
                      <Button
                        size="huge"
                        color="orange"
                        style={{ margin: " 0 0 0", color: "white" }}
                        className="pricing-button"
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

export default pricing;
