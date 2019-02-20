import React from "react";
import { Link } from "gatsby";
import { Grid } from "semantic-ui-react";
import SelfStudy from "../components/images/SelfStudy";
import Phone1 from "../components/images/Phone1";
import Phone2 from "../components/images/Phone2";
import Layout from "../components/layout";
import SEO from "../components/seo";

const crna = () => (
  <Layout>
    <SEO title="CRNA" />\<div className="container-bottom" />
    <div style={{ paddingTop: "15vh" }} />
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
    <div className="container-body">
      <Grid columns={3} relaxed stackable>
        <Grid.Row>
          <Grid.Column>
            <SelfStudy />
            <ul>
              <li>
                Fits easily into your schedule; use SelfStudyPLUS whenever you
                have time
              </li>
              <li>
                Continually assesses you, adapting the questions delivered to
                you, according to your specific strengths and weaknesses
              </li>
              <li>
                Up-to-date content, relevant to your practice today, with over
                1900 questions
              </li>
              <li>
                New questions added each month by practitioners at top
                universities across North America
              </li>
              <li>As cost-efficient as it is content-efficient</li>
            </ul>
            <div className="title-color">
              <h1>SPECIAL RATES AVAILABLE FOR GROUP PRACTICES</h1>
              <p>To learn more:</p>
              <p>
                {" "}
                <a href="mailto:info@openanesthesia.org">
                  Email: info@openanesthesia.org
                </a>
              </p>

              <p>
                {" "}
                <a href="tel:(628)333-9718">Call: (628) 333-9718</a>, or
              </p>
              <p> Write to:</p>
              <p style={{ paddingTop: "0px" }}>
                44 Montgomery St., Ste 1605 San Francisco, CA 94104
              </p>
            </div>
          </Grid.Column>
          <Grid.Column>
            <Phone1 />
            <Phone2 />
          </Grid.Column>
          <Grid.Column>
            <h1 className="title-color">THE SCIENCE BEHIND SELFSTUDYPLUS:</h1>
            <h2 className="title-color">Individualized, Adaptive Learning</h2>
            <p className="sub-orange">Personalized learning</p>
            <p className="no-margin">
              SelfStudyPLUS employs adaptive learning methodology to dynamically
              analyze your students strengths and weaknesses, providing them
              with a personalized learning path. This leads to improved
              performance and increased learning efficiency.
            </p>

            <p className="sub-orange">Spaced repetition</p>
            <p className="no-margin">
              Using a technique called spaced repetition, SelfStudyPLUS
              automatically calculates how long it takes for you to forget
              something they’ve learned and repeats important concepts as
              needed. Repetitive storage and retrieval of information across
              neural networks over time improves long-term retention.
            </p>
            <p className="sub-orange">Test-enhanced learning</p>
            <p className="no-margin">
              Scientific evidence suggests that testing is an important
              component of learning. Tests can enhance and alert memory,
              improving recall and promoting long-term retention. Emerging
              evidence from cognitive science strongly suggests that testing may
              be a very important component of learning. Tests, especially
              pretests, can enhance and alert memory.
            </p>
            <p className="sub-orange">Interleaving</p>
            <p className="no-margin">
              SelfStudyPLUS presents information to you using an interleaving
              approach to learning, a technique now recognized as more effective
              than block learning for long-term retention.{" "}
            </p>
          </Grid.Column>
        </Grid.Row>
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
          Begin earning 20 Class A CE Credits today <br />
          --including 5 pharmacology credits! <br /> Or enjoy unlimited usage
          without CE <br /> in 6- and 12-month membership options. <br /> Over
          1700 questions, tagged to the NBCRNA Core Modules outline!
        </p>
      </div>
    </div>
  </Layout>
);

export default crna;
