import React from "react";
import { Link } from "gatsby";

import Layout from "../components/layout";
import SEO from "../components/seo";
import PeopleBanner from "../components/images/PeopleBanner";
import Info from "../components/Info.js";
import { Grid, Button } from "semantic-ui-react";
import Brain from "../components/images/Brain";
import Vimeo from "@u-wave/react-vimeo";
const anpd = () => (
  <Layout>
    <SEO title="Program Directors" />

    <div className="container-body">
      <h2 className="title-color" style={{ fontSize: "2.5em" }}>
        KNOW WHERE YOUR STUDENTS STAND EVERY DAY
      </h2>
      <p>
        {" "}
        Through continuous assessment and real-time reporting, SelfStudyPLUS for
        Nurse Anesthesia gives you an accurate view of your students knowledge
        as it develops, enabling a tracking of students progress not otherwise
        possible.
      </p>
      <div className="centered">
        <h1 className="title-color " style={{ fontSize: "50px" }}>
          Take a quick tour of SelfStudyPLUS
        </h1>

        <Vimeo video="210490351" showTitle="false" className="video" />
        <p>Introducing SelfStudyPLUS for Nurse Anesthesia</p>
        <br />
        <br />
        <br />
        <Vimeo video="210765584" showTitle="false" className="video" />
        <p>
          Progress reporting, Practice tests and Games in SelfStudyPLUS for
          Nurse Anesthesia
        </p>
      </div>
      <br />
      <br />
      <p>
        {" "}
        Click{" "}
        <a
          href="https://na-admin.selfstudy.plus/login"
          style={{ fontSize: "1.2em" }}
        >
          here
        </a>{" "}
        to view our Program Directors Dashboard demo, using{" "}
        <strong>testpd@selfstudy.plus</strong> as your login, and{" "}
        <strong>"password"</strong> as the password. This demo consists of
        multiple pages, which can be accessed by clicking on each of the
        individual student names on the first page.
      </p>
      <br />
      <br />
      <PeopleBanner style={{ marginBottom: "0" }} />
    </div>
    <div className="container-bottom centered">
      {" "}
      <h1> SelfStudyPLUS: PERSONALIZED LEARNING FOR YOUR STUDENTS</h1>
    </div>
    <Info />
    <div className="container-bottom">
      <div className="container-body ">
        <Grid relaxed stackable columns={2}>
          <Grid.Row>
            <Grid.Column width={10}>
              <h1>Learn more about the science behind SelfStudyPLUS</h1>
              <p>
                {" "}
                ScientificAmerican.com:
                <a
                  href="https://www.scientificamerican.com/article/the-interleaving-effect-mixing-it-up-boosts-learning/"
                  style={{ color: "white", textDecoration: "underline" }}
                >
                  The Interleaving Effect: Mixing It Up Boosts Learning
                </a>{" "}
              </p>
              <p>
                {" "}
                The New York Times:
                <a
                  href="https://www.nytimes.com/2014/09/07/magazine/why-flunking-exams-is-actually-a-good-thing.html?_r=0"
                  style={{ color: "white", textDecoration: "underline" }}
                >
                  Why Flunking Exams Is Actually a Good Thing
                </a>{" "}
              </p>
              <p>
                {" "}
                Anesthesia & Analgesia:
                <a
                  href="http://journals.lww.com/anesthesia-analgesia/Citation/2015/09000/Test_Enhanced_Learning_in_Flipped_Classroom.4.aspx"
                  style={{ color: "white", textDecoration: "underline" }}
                >
                  Test-Enhanced Learning in Flipped Classroom
                </a>{" "}
              </p>
            </Grid.Column>
            <Grid.Column width={6}>
              <Brain />
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </div>
    </div>
  </Layout>
);

export default anpd;
