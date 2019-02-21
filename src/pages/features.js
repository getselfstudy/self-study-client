import React from "react";
//unneeded unless links are added below. For all in-gatsby links, use <Link>. Otherwise, use <a></a> to other sites
import { Link } from "gatsby";
import { Grid, Button } from "semantic-ui-react";

import Layout from "../components/layout";
import SEO from "../components/seo";
import Responsive from "react-responsive";
//This handles the videos from vimeo. Don't remove unless a remplacement is installed.
import Vimeo from "@u-wave/react-vimeo";

//images served from the image folder through graphql
import LogoBig from "../components/images/LogoBig";

import FeaturesHeader from "../components/images/FeaturesHeader";
import FeaturesPhone from "../components/images/FeaturesPhone";
import SrnaPerson from "../components/images/SrnaPerson.js";
import CrnaPerson from "../components/images/CrnaPerson.js";

const Mobile = props => <Responsive {...props} maxWidth={767} />;
const Default = props => <Responsive {...props} minWidth={768} />;

const features = () => (
  <Layout>
    <SEO title="Features" />

    <div
      className="container-bottom centered"
      style={{ marginTop: 0, paddingTop: "0" }}
    >
      {" "}
      <h1>
        Over 1900 questions from teaching practitioners at top universities!
      </h1>{" "}
    </div>
    <div className="container-body">
      <Grid columns={2} stackable relaxed>
        <Grid.Row>
          <Grid.Column>
            <h1 className="title-color"> Introducing </h1>
            <div style={{ width: "55%" }}>
              <LogoBig />
            </div>
            <h3 className="title-color" style={{ marginTop: "0" }}>
              for Nurse Anesthesia
            </h3>
            <p>
              The first adaptive learning app for Nurse Anesthetists,
              SelfStudyPLUS personalizes learning using patented algorithms that
              assess and adapt to your individual needs.
            </p>
            <Link to="/">
              <Button color="orange" size="huge">
                Learn More{" "}
              </Button>
            </Link>
          </Grid.Column>
          <Grid.Column>
            <FeaturesHeader />
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </div>

    <div className="container-body centered">
      <h1 className="centered title-color">
        {" "}
        Take a quick tour of SelfStudyPLUS{" "}
      </h1>
      <Vimeo video="210490351" showTitle="false" className="video" />
      <p> Introducing SelfStudyPLUS for Nurse Anesthesia</p>
      <br />
      <Vimeo video="210765584" showTitle="false" className="video" />
      <p>
        Program, Practice Tests and Games in SelfstudyPLUS for Nurse Anesthesia
      </p>
    </div>

    <hr className="hr-blue" />

    <div className="container-body">
      <Grid columns={4} stackable relaxed>
        <Grid.Row>
          <Grid.Column width={6}>
            <h1 style={{ color: "#E94E0E", fontSize: "2.5em" }}>
              {" "}
              NOW AVAILABLE FOR SRNAs
            </h1>
            <p>
              For busy SRNAs balancing hours in training with studying,
              SelfStudyPLUS offer the most flexible and personalized learning
              system available. It strengthens knowledge and retention with an
              innovative technology that is based on research in education,
              psychology and neuroscience.
            </p>
            <p>
              SelfStudyPLUS asks you the questions that you need, to master what
              you need to know for the NCE and your practice.
            </p>
          </Grid.Column>
          <Grid.Column width={2}>
            <Default>
              <SrnaPerson />
            </Default>
            <Mobile>
              <div style={{ width: "60%", margin: "0 auto" }}>
                <SrnaPerson />
              </div>{" "}
            </Mobile>
          </Grid.Column>
          <Grid.Column width={6}>
            <h1 style={{ color: "#05467E", fontSize: "2.5em" }}>
              {" "}
              NOW AVAILABLE FOR CRNAs
            </h1>
            <p>
              For CRNAs seeking to keep up-to-date, SelfStudyPLUS is the most
              convenient and focused knowledge app ever. Available 24/7, and
              responding directly to your personal knowledge as revealed through
              each question you answer.{" "}
            </p>
            <p>
              This is a personalized system, tailored to you, and delivered in a
              format that fits easily into your schedule, whenever you have time
            </p>
          </Grid.Column>
          <Grid.Column width={2}>
            <div style={{}}>
              <Default>
                <CrnaPerson />
              </Default>
              <Mobile>
                <div style={{ width: "60%", margin: "0 auto" }}>
                  <CrnaPerson />
                </div>{" "}
              </Mobile>
            </div>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </div>
    <div className="container-bottom" style={{ marginBottom: "20px" }}>
      <div className="container-body">
        <Grid columns={2} relaxed stackable>
          <Grid.Row>
            <Grid.Column width={4}>
              <FeaturesPhone />
            </Grid.Column>
            <Grid.Column width={10}>
              <h1> CONTENT YOU CAN PUT INTO PRACTICE </h1>
              <p>
                {" "}
                As soon as you begin answering questions, SelfStudyPLUS begins
                assessing your strengths and any gaps in your knowledge, and
                will deliver to you subsequent questions appropriate to your
                specific knowledge.
              </p>
              <ul>
                <li>
                  {" "}
                  innovative and patented technology assessing and personalizing
                  content with every question you answer{" "}
                </li>
                <li>
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
