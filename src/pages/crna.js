import React from "react";

import { Grid } from "semantic-ui-react";

import Info from "../components/Info.js";
import Layout from "../components/layout";
import SEO from "../components/seo";
import Pricing from "../components/Pricing";
import Vimeo from "@u-wave/react-vimeo";

const crna = () => (
  <Layout>
    <SEO title="CRNA" />

    <div className="container-body">
      {" "}
      <h1 className="title-color centered" style={{ marginBottom: "5vh" }}>
        PERSONALIZED FOR YOU. ON YOUR TIME. ANYTIME.
      </h1>
      <Grid columns={2} relaxed stackable>
        <Grid.Column>
          <p>
            {" "}
            Earn CE with CPCA Practice I, CPCA Practice II, or both, the CE
            program from the NBCRNA.{" "}
          </p>
          <p>Stay Current with SelfStudyPLUS for Nurse Anesthesia</p>
          <p>
            Available 24/7, and responding directly to your personal knowledge
            as revealed through each question you answer, SelfStudyPLUS presents
            you with questions chosen specifically for you. Learn what you need
            from content you can put into practice immediately, with the most
            efficient learning application available for CRNAs.
          </p>
        </Grid.Column>
        <Grid.Column>
          <div className="centered">
            <Vimeo video="210490351" showTitle="false" className="video" />
            <p className="centered">
              Introducing SelfStudyPLUS for Nurse Anesthesia
            </p>
          </div>
        </Grid.Column>
      </Grid>
    </div>
    <div className="container-bottom centered ">
      <h1> PERSONALIZED - TAILORED FOR YOU </h1>
    </div>
    <Info />
    <div className="centered">
      <h1
        className="title-color"
        style={{ fontSize: "4em", paddingTop: "5vh" }}
      >
        Start Your Membership
      </h1>
      <p style={{ fontSize: "2em" }}>
        Begin earning 20 Class A CE Credits today <br />
        --including 5 pharmacology credits! <br /> Or enjoy unlimited usage
        without CE <br /> in 6- and 12-month membership options. <br /> Over
        1700 questions, tagged to the NBCRNA Core Modules outline!
      </p>
      <Pricing />
    </div>
  </Layout>
);

export default crna;
