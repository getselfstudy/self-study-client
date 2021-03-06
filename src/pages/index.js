import React from "react";
import { Link } from "gatsby";

import Layout from "../components/layout";

import SEO from "../components/seo";
import { Button, Grid } from "semantic-ui-react";
import Responsive from "react-responsive";

import Tablet2 from "../components/Tablet2";
import FastImage from "../components/images/FastImage";
import FlexibleImage from "../components/images/FlexibleImage";
import ForYouImage from "../components/images/ForYouImage";

import BannerImage from "../components/images/BannerImage.js";
import BannerImageSmall from "../components/images/BannerImageSmall.js";

const Mobile = props => <Responsive {...props} maxWidth={767} />;
const Default = props => <Responsive {...props} minWidth={768} />;

class IndexPage extends React.Component {
  render() {
    return (
      <Layout>
        <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
        <div>
          <div>
            <Default>
              <BannerImage />
            </Default>
          </div>
          <div>
            <Mobile>
              <BannerImageSmall />
            </Mobile>
          </div>
          <div>
            <br />
            <div className="container-body">
              <Grid relaxed stackable>
                <Grid.Row columns={2}>
                  <Grid.Column>
                    <h2 className="title-color"> LEARN FAST. REMEMBER MORE.</h2>
                    <p>
                      {" "}
                      Whether your goal is to study for your SRNA training or
                      NCE, learn faster and more deeply with the “questions
                      first” SelfStudyPLUS approach.{" "}
                    </p>
                    <Link to="/crna">
                      <Button
                        style={{
                          backgroundColor: "#4599c5",
                          color: "white",
                          width: "45%",
                          padding: "20px",
                          margin: "5px",
                          fontSize: "1.3em"
                        }}
                        className="homepage-button"
                      >
                        {" "}
                        CRNA
                      </Button>
                    </Link>
                    <Link to="/srna">
                      <Button
                        style={{
                          backgroundColor: "#6db031",
                          color: "white",
                          width: "45%",
                          padding: "20px",
                          margin: "5px",
                          fontSize: "1.3em"
                        }}
                      >
                        {" "}
                        SRNA
                      </Button>
                    </Link>
                  </Grid.Column>
                  <Grid.Column>
                    <Tablet2 />
                  </Grid.Column>
                </Grid.Row>
              </Grid>
            </div>
            <div className="banner-background">
              {" "}
              <div className="container-body">
                {" "}
                <h2 style={{ color: "white" }}>
                  SelfStudyPLUS IS A BREAKTHROUGH ADAPTIVE LEARNING SYSTEM FOR
                  NURSE ANESTHETISTS
                </h2>
              </div>
            </div>
            <div className="container-body">
              <Grid relaxed stackable columns={3}>
                <Grid.Row>
                  <Grid.Column>
                    <div className="centered" />
                    <div
                      style={{
                        width: "50%",
                        textAlign: "center",
                        alignItems: "center",
                        margin: "0 auto"
                      }}
                    >
                      <FastImage />
                    </div>

                    <h1 className="centered title-color">FAST </h1>
                    <ul>
                      <li>
                        Personalize your learning with novel and patented
                        algorithms that assess and adapt to you
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
                    <div className="centered">
                      <div
                        style={{
                          width: "50%",
                          textAlign: "center",
                          alignItems: "center",
                          margin: "0 auto"
                        }}
                      >
                        <FlexibleImage />
                      </div>
                    </div>

                    <h1 className="centered title-color">FLEXIBLE </h1>
                    <ul>
                      <li>
                        {" "}
                        Fit learning into your busy schedule; 2-3 minutes per
                        question is all you need
                      </li>
                      <li>
                        See your progress at a glance with visual performance
                        reports
                      </li>
                      <li>
                        Access over 1900 questions from teaching practitioners
                        at top hospitals — via a fast, easy-to-use app
                      </li>
                    </ul>
                  </Grid.Column>
                  <Grid.Column>
                    <div className="centered" />
                    <div
                      style={{
                        width: "50%",
                        textAlign: "center",
                        alignItems: "center",
                        margin: "0 auto"
                      }}
                    >
                      <ForYouImage />
                    </div>

                    <h1 className="centered title-color">FOR YOU </h1>
                    <ul>
                      <li>Enjoy learning with games and timed challenges </li>
                      <li>
                        Challenge your colleagues or compete against the app
                      </li>
                      <li>
                        Test your knowledge with 20 in 20, 60 in 60 and
                        120-minute practice tests
                      </li>
                    </ul>

                    <div className="centered">
                      <Link to="/features">
                        <Button
                          color="orange"
                          size="huge"
                          style={{ width: "90%" }}
                        >
                          LEARN MORE
                        </Button>
                      </Link>
                    </div>
                  </Grid.Column>
                </Grid.Row>
              </Grid>
            </div>
            <div className="container-bottom">
              <div className="container-body">
                <div className="centered">
                  <h2 style={{ color: "white" }}>
                    {" "}
                    Our over 1900 questions in SelfStudyPLUS for Nurse
                    Anesthesia are written by practitioners at top hospitals and
                    universities, then carefully curated and edited by:
                  </h2>
                </div>
                <br />
                <hr className="hr-blue" />
                <div>
                  <h1
                    className="centered "
                    style={{ fontSize: "3em", color: "white" }}
                  >
                    {" "}
                    Our Experts{" "}
                  </h1>
                  <br />
                  <br />
                  <Grid relaxed stackable columns={3}>
                    <Grid.Row>
                      <Grid.Column>
                        <h1 style={{ color: "white" }}>
                          <strong style={{ color: "white" }}>
                            Dr. Franklin McShane <br />
                            DNP, CRNA, APNP
                          </strong>{" "}
                          <br />
                          Program Director{" "}
                        </h1>
                        <br />
                        <p style={{ color: "white" }}>
                          {" "}
                          Rosalind Franklin University of Medicine and Science
                          Chicago, IL{" "}
                        </p>
                      </Grid.Column>
                      <Grid.Column>
                        <h1 style={{ color: "white" }}>
                          <strong style={{ color: "white" }}>
                            Peter J. Kallio <br />
                            DNP, CRNA, APNP
                          </strong>
                          <br /> Associate Program Director{" "}
                        </h1>
                        <br />
                        <p style={{ color: "white" }}>
                          {" "}
                          Rosalind Franklin University of Medicine and Science
                          Chicago, IL
                        </p>
                      </Grid.Column>
                      <Grid.Column>
                        <h1 style={{ color: "white" }}>
                          <strong style={{ color: "white" }}>
                            Edward Zhovtis <br /> MS{" "}
                          </strong>{" "}
                          <br />
                          Adjunct Faculty{" "}
                        </h1>
                        <br />
                        <br />

                        <br />
                        <p style={{ color: "white" }}>
                          Rosalind Franklin University of Medicine and Science
                          Chicago, IL
                        </p>
                      </Grid.Column>
                    </Grid.Row>
                  </Grid>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    );
  }
}

export default IndexPage;
