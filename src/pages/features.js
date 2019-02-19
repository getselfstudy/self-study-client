import React from "react";
import { Link } from "gatsby";
import { Grid, Button } from "semantic-ui-react";

import Layout from "../components/layout";
import SEO from "../components/seo";
import Logo_Image from "../components/Logo_Image";
import FeaturesHeader from "../components/images/FeaturesHeader";
import FeaturesPhone from "../components/images/FeaturesPhone";
const features = () => (
  <Layout>
    <SEO title="Features" />
    <div style={{ paddingTop: "15vh" }} />
    <div className="container-bottom" />
    <div className="container-body" style={{ paddingTop: "5vh" }}>
      <Grid columns={2} stackable relaxed>
        <Grid.Row>
          <Grid.Column>
            <h1 className="title-color"> Introducing </h1>

            <Logo_Image />

            <h3 className="title-color" style={{ marginTop: "0" }}>
              for Nurse Anesthesia
            </h3>
            <p>
              The first adaptive learning app for Nurse Anesthetists,
              SelfStudyPLUS personalizes learning using patented algorithms that
              assess and adapt to your individual needs.
            </p>
            <Button color="orange" size="huge">
              Learn More{" "}
            </Button>
          </Grid.Column>
          <Grid.Column>
            <FeaturesHeader />
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </div>
    <div className="container-bottom centered">
      <h1>
        {" "}
        Over 1900 questions from teaching practitioners at top universities!{" "}
      </h1>
    </div>
    <h1 className="centered"> Video </h1>
    <h1 className="centered"> Video </h1>
    <p className="centered">
      Program, Practice Tests, and Games in SelfstudyPLUS for Nurse Anesthesia
    </p>
    <hr className="hr-blue" />
    <br />
    <div className="container-body">
      <Grid columns={2} stackable relaxed>
        <Grid.Row>
          <Grid.Column>
            <h1 style={{ color: "#E94E0E", fontSize: "40px" }}>
              {" "}
              NOW AVAILABLE FOR SRNAs
            </h1>
            <p style={{ fontSize: "22px" }}>
              For busy SRNAs balancing hours in training with studying,
              SelfStudyPLUS offer the most flexible and personalized learning
              system available. It strengthens knowledge and retention with an
              innovative technology that is based on research in education,
              psychology and neuroscience. SelfStudyPLUS asks you the questions
              that you need, to master what you need to know for the NCE and
              your practice.
            </p>
          </Grid.Column>
          <Grid.Column>
            <h1 style={{ color: "#05467E", fontSize: "40px" }}>
              {" "}
              NOW AVAILABLE FOR CRNAs
            </h1>
            <p style={{ fontSize: "22px" }}>
              For CRNAs seeking to keep up-to-date, SelfStudyPLUS is the most
              convenient and focused knowledge app ever. Available 24/7, and
              responding directly to your personal knowledge as revealed through
              each question you answer. This is a personalized system, tailored
              to you, and delivered in a format that fits easily into your
              schedule, whenever you have time
            </p>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </div>
    <div className="container-bottom" style={{ marginBottom: "20px" }}>
      <div className="container-body">
        <Grid columns={2} relaxed stackable>
          <Grid.Row>
            <Grid.Column width={6}>
              <FeaturesPhone />
            </Grid.Column>
            <Grid.Column width={10}>
              <h1> CONTENT YOU CAN PUT INTO PRACTICE </h1>
              <p style={{ fontSize: "22px" }}>
                {" "}
                As soon as you begin answering questions, SelfStudyPLUS begins
                assessing your strengths and any gaps in your knowledge, and
                will deliver to you subsequent questions appropriate to your
                specific knowledge.
              </p>
              <ul>
                <li style={{ fontSize: "18px" }}>
                  {" "}
                  innovative and patented technology assessing and personalizing
                  content with every question you answer{" "}
                </li>
                <li style={{ fontSize: "18px" }}>
                  up to date content, relevant today, with over 1900 questions;
                  written by teaching practitioners at top universities
                  throughout North America
                </li>
              </ul>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </div>
    </div>
  </Layout>
);

export default features;
