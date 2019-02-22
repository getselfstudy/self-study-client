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
              <Grid.Column width={4}>
                <div className="cpca-sub">
                  <div style={{ padding: "20px" }}>
                    <CpcaPractice />
                  </div>
                </div>
              </Grid.Column>
              <Grid.Column width={8}>
                <h2>CPCA Practice Assessment I$30</h2>
                <h2>CPCA Practice Assessment II $30</h2>
                <h2>CPCA Practice Assessment I & II $50 </h2>
              </Grid.Column>
              <Grid.Column width={4}>
                <a href="https://www.nbcrna.com/exams/cpce/practice-exam">
                  <Button
                    color="blue"
                    size="huge"
                    style={{ margin: "50px 0 25px" }}
                  >
                    {" "}
                    LEARN MORE{" "}
                  </Button>
                </a>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </div>
      </div>
    );
  }
}

export default Cpca;
