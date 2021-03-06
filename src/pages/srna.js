import React from "react";
import Responsive from "react-responsive";
import { Grid } from "semantic-ui-react";
import Layout from "../components/layout";
import SEO from "../components/seo";
import Srna1 from "../components/images/Srna1";
import Srna2 from "../components/images/Srna2";
import Vimeo from "@u-wave/react-vimeo";
import PricingSrna from "../components/PricingSrna";
const Mobile = props => <Responsive {...props} maxWidth={767} />;
const Default = props => <Responsive {...props} minWidth={768} />;

const srna = () => (
  <Layout>
    <SEO title="SRNA" />

    <div className="container-body">
      <h1 className="title-color">ACCELERATE YOUR LEARNING</h1>
      <br />
      <p>
        {" "}
        SelfStudyPLUS for Nurse Anesthesia combines personalized learning,
        interval repetition and test-enhanced learning to help you learn faster
        and remember longer to ensure your success.
      </p>
      <br />
      <div className="centered">
        <h1 className="title-color centered" style={{ fontSize: "2.2em" }}>
          Take a quick tour of SelfStudyPlus
        </h1>
        <Vimeo video="210490351" showTitle="false" className="video" />
        <p style={{ marginTop: "0" }}>
          {" "}
          Introducing SelfStudyPLUS for Nurse Anesthesia
        </p>

        <Vimeo video="210765584" showTitle="false" className="video" />
        <p>
          {" "}
          Progress, Practice Tests and Games in SelfStudyPLUS for Nurse
          Anesthesia
        </p>
      </div>
    </div>
    <div className="container-bottom centered extra-margin" style={{}}>
      <h1>SelfStudyPLUS PERSONALIZES YOUR LEARNING PATH</h1>
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
          <Default>
            <Srna1 />
          </Default>
          <Mobile>
            <div style={{ width: "60%", margin: "0 auto" }}>
              <Srna1 />
            </div>
          </Mobile>
        </Grid.Column>
        <Grid.Column width={4}>
          <Default>
            <Srna2 />
          </Default>
          <Mobile>
            <Mobile>
              <div style={{ width: "60%", margin: "0 auto" }}>
                <Srna2 />
              </div>
            </Mobile>
          </Mobile>
        </Grid.Column>
      </Grid>
      <div className="centered">
        {" "}
        <h1
          className="title-color"
          style={{ fontSize: "3em", paddingTop: "5vh" }}
        >
          Start Your Membership
        </h1>
        <p style={{ fontSize: "2em" }}>
          {" "}
          Enjoy unlimited use of SelfStudyPLUS <br /> for Nurse Anesthesia{" "}
          <br /> for 3 months, 6 months, or 12 months!
        </p>
      </div>
    </div>
    <div className="centered">
      {" "}
      <PricingSrna />
    </div>
  </Layout>
);

export default srna;
