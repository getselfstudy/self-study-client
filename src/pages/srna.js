import React from "react";
import { Link } from "gatsby";

import { Grid } from "semantic-ui-react";
import Layout from "../components/layout";
import SEO from "../components/seo";
import Srna1 from "../components/images/Srna1";
import Srna2 from "../components/images/Srna2";

import { Button } from "semantic-ui-react";

const srna = () => (
  <Layout>
    <SEO title="SRNA" />
    <div style={{ paddingTop: "20vh" }} />
    <div className="container-bottom" />
    <div className="container-body">
      <h2 className="title-color" style={{ fontSize: "40px" }}>
        ACCELERATE YOUR LEARNING
      </h2>
      <p>
        {" "}
        SelfStudyPLUS for Nurse Anesthesia combines personalized learning,
        interval repetition and test-enhanced learning to help you learn faster
        and remember longer to ensure your success.
      </p>
      <div className="centered">
        <h1 className="title-color centered" style={{ fontSize: "50px" }}>
          Take a quick tour of SelfStudyPlus
        </h1>
        <h1> VIDEO </h1>
        <p> Introducing SelfStudyPLUS for Nurse Anesthesia</p>
        <h1> Video </h1>
        <p>
          {" "}
          Progress, Practice Tests and Games in SelfStudyPLUS for Nurse
          Anesthesia
        </p>
      </div>
    </div>
    <div
      className="container-bottom centered extra-margin"
      style={{ fontSize: "50px" }}
    >
      {" "}
      SelfStudyPLUS PERSONALIZES YOUR LEARNING PATH
    </div>
    <div className="container-body">
      <Grid columns={3} relaxed stackable>
        <Grid.Column width={8}>
          <ul>
            <li>
              Strengthens your knowledge and retention with innovative
              technology based on education, cognitive psychology and
              neuroscience research
            </li>
            <li>
              Provides over 1900 questions mapped to the NCE outline, created by
              teaching practitioners at top hospitals
            </li>
            <li>
              Promotes enjoyable learning with games and timed challenges: 20-,
              60- and 120-minute practice tests
            </li>
            <li>
              Fits learning into your busy schedule; 2-3 minutes per question is
              all you need
            </li>
          </ul>
        </Grid.Column>
        <Grid.Column width={4}>
          <Srna1 />
        </Grid.Column>
        <Grid.Column width={4}>
          <Srna2 />
        </Grid.Column>
      </Grid>
      <div className="centered">
        {" "}
        <h1
          className="title-color"
          style={{ fontSize: "80px", paddingTop: "5vh" }}
        >
          Start Your Membership
        </h1>
        <p style={{ fontSize: "40px" }}>
          {" "}
          Enjoy unlimited use of SelfStudyPLUS <br /> for Nurse Anesthesia{" "}
          <br /> for 3 months, 6 months, or 12 months!
        </p>
      </div>
    </div>
  </Layout>
);

export default srna;
