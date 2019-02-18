import React from "react";
import { Link } from "gatsby";

import Layout from "../components/layout";
import Image from "../components/image";
import SEO from "../components/seo";
import { Button, Grid, Row, Column } from "semantic-ui-react";
import BannerImage from "../components/images/BannerImage";
import Tablet from "../components/Tablet";
import FastImage from "../components/images/FastImage";
// import FlexibleImage from "../components/images/FlexibleImage";
import ForYouImage from "../components/images/ForYouImage";

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />

    <div className="image-wrapper-header space-below">
      <BannerImage />
      <div className="image-text-header">
        <h1>On Your Time. Anytime.</h1>
        <h3> Personalized learning that fits your busy schedule </h3>
      </div>
      <br />
      <div className="container-body">
        {" "}
        <Grid relaxed stackable>
          <Grid.Row columns={2}>
            <Grid.Column>
              <h2 className="title-color"> LEARN FAST. REMEMBER MORE.</h2>
              <p>
                {" "}
                Whether your goal is to study for your SRNA training or NCE,
                learn faster and more deeply with the “questions first”
                SelfStudyPLUS approach.{" "}
              </p>
              <Button
                style={{
                  backgroundColor: "#4599c5",
                  color: "white",
                  width: "45%"
                }}
              >
                {" "}
                CRNA
              </Button>

              <Button
                style={{
                  backgroundColor: "#6db031",
                  color: "white",
                  width: "45%"
                }}
              >
                {" "}
                SRNA
              </Button>
            </Grid.Column>
            <Grid.Column>
              <Tablet />
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </div>
      <div className="banner-background">
        {" "}
        <div className="container-body">
          {" "}
          <h2>
            SelfStudyPLUS IS A BREAKTHROUGH ADAPTIVE LEARNING SYSTEM FOR NURSE
            ANESTHETISTS
          </h2>
        </div>
      </div>
      <div className="container-body">
        <Grid relaxed stackable columns={3}>
          <Grid.Row>
            <Grid.Column>
              <FastImage />
              <h1 className="centered title-color">FAST </h1>
              <ul>
                <li>
                  Personalize your learning with novel and patented algorithms
                  that assess and adapt to you
                </li>
                <li>
                  Strengthen your knowledge and retention with innovative
                  technology based on education, cognitive psychology and
                  neuroscience research
                </li>
                <li>Quick online access from any device​</li>
              </ul>
            </Grid.Column>
            <Grid.Column>
              {/* <FlexibleImage /> */}
              <h1 className="centered title-color">FLEXIBLE </h1>
              <ul>
                <li>
                  {" "}
                  Fit learning into your busy schedule; 2-3 minutes per question
                  is all you need
                </li>
                <li>
                  See your progress at a glance with visual performance reports
                </li>
                <li>
                  Access over 1900 questions from teaching practitioners at top
                  hospitals — via a fast, easy-to-use app
                </li>
              </ul>
            </Grid.Column>
            <Grid.Column>
              <ForYouImage />
              <h1 className="centered title-color">FOR YOU </h1>
              <ul>
                <li>Enjoy learning with games and timed challenges </li>
                <li>Challenge your colleagues or compete against the app</li>
                <li>
                  Test your knowledge with 20 in 20, 60 in 60 and 120-minute
                  practice tests
                </li>
              </ul>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </div>
    </div>
  </Layout>
);

export default IndexPage;
