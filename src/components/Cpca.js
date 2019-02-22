import React, { Component } from "react";
import { Grid, Button } from "semantic-ui-react";
import CpcaPractice from "./images/CpcaPractice";
import SelfStudyInverseBlue from "./images/SelfStudyInverseBlue";
import SelfStudyInverseOrange from "./images/SelfStudyInverseOrange";
export class Cpca extends Component {
  render() {
    return (
      <div className="container-body">
        <br />
        <div />

        <Grid columns={3} relaxed stackable>
          <Grid.Row>
            <Grid.Column>
              {/* <div className="cpca">
                <h1
                  className="title-color"
                  style={{ fontSize: "3em", paddingBottom: "40px" }}
                >
                  {" "}
                  CPCA Practice
                </h1>
                <hr className="hr-blue" />
                <h2>CPCA Practice Assessment I</h2> <h3>$30</h3>
                <h2>CPCA Practice Assessment II</h2>
                <h3> $30</h3>
                <h2>CPCA Practice Assessment I & II </h2>
                <h3> $50</h3>
                <a href="https://www.nbcrna.com/exams/cpce/practice-exam">
                  <Button
                    color="blue"
                    size="massive"
                    style={{ margin: "35px 0 25px" }}
                  >
                    {" "}
                    LEARN MORE{" "}
                  </Button>
                </a>
              </div> */}
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </div>
    );
  }
}

export default Cpca;
