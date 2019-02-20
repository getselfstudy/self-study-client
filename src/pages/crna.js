import React from "react";
import { Link } from "gatsby";
import { Grid } from "semantic-ui-react";

import Info from "../components/Info.js";
import Layout from "../components/layout";
import SEO from "../components/seo";

const crna = () => (
  <Layout>
    <SEO title="CRNA" />\<div className="container-bottom" />
    <div style={{ paddingTop: "20vh" }} />
    <div className="container-body">
      {" "}
      <h1 className="title-color centered" style={{ marginBottom: "5vh" }}>
        PERSONALIZED FOR YOU. ON YOUR TIME. ANYTIME.
      </h1>
      <Grid columns={2} relaxed stackable>
        <Grid.Column>
          <p style={{ fontSize: "22px" }}>
            {" "}
            Earn CE with CPCA Practice I, CPCA Practice II, or both, the CE
            program from the NBCRNA.{" "}
          </p>
          <p style={{ fontSize: "22px" }}>
            Stay Current with SelfStudyPLUS for Nurse Anesthesia
          </p>
          <p style={{ fontSize: "22px" }}>
            Available 24/7, and responding directly to your personal knowledge
            as revealed through each question you answer, SelfStudyPLUS presents
            you with questions chosen specifically for you. Learn what you need
            from content you can put into practice immediately, with the most
            efficient learning application available for CRNAs.
          </p>
        </Grid.Column>
        <Grid.Column>
          {" "}
          <h1 className="centered">Video</h1>{" "}
          <p className="centered">
            {" "}
            Introducing SelfStudyPLUS for Nurse Anesthesia
          </p>
        </Grid.Column>
      </Grid>
    </div>
    <div className="container-bottom centered ">
      {" "}
      <h1> PERSONALIZED - TAILORED FOR YOU </h1>
    </div>
    <Info />
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
        Begin earning 20 Class A CE Credits today <br />
        --including 5 pharmacology credits! <br /> Or enjoy unlimited usage
        without CE <br /> in 6- and 12-month membership options. <br /> Over
        1700 questions, tagged to the NBCRNA Core Modules outline!
      </p>
    </div>
  </Layout>
);

export default crna;
