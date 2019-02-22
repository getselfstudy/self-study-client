import React, { Component } from "react";
import { Grid, Button } from "semantic-ui-react";
import CpcaPractice from "./images/CpcaPractice.js";

export class Cpca extends Component {
  render() {
    return (
      <div className="container-body">
        <br />
        <div />
        <div className="cpca">
          <Grid columns={3} relaxed stackable>
            <Grid.Row>
              <Grid.Column width={5}>
                <div className="cpca-sub ">
                  <div
                    className="container-positioning-inner"
                    style={{ padding: "20px" }}
                  >
                    <CpcaPractice />
                  </div>
                </div>
              </Grid.Column>
              <Grid.Column width={7}>
                <h3 style={{ paddingTop: "20px" }}>
                  CPCA Practice Assessment I $30
                </h3>
                <h3>CPCA Practice Assessment II $30</h3>
                <h3 style={{ paddingBottom: "20px" }}>
                  CPCA Practice Assessment I & II $50{" "}
                </h3>
              </Grid.Column>
              <Grid.Column width={4}>
                <a href="https://www.nbcrna.com/exams/cpce/practice-exam">
                  <Button
                    color="blue"
                    size="huge"
                    style={{ margin: "50px 0 10px" }}
                  >
                    {" "}
                    LEARN MORE{" "}
                  </Button>
                </a>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </div>
        <p style={{ fontSize: ".7em" }}>
          {" "}
          Not part of SelfStudyPLUS membership. If you are purchasing CPCA
          Practice a second time, you can use your previous login.
        </p>
      </div>
    );
  }
}

export default Cpca;
