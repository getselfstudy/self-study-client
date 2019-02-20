import React, { Component } from "react";
import { Grid } from "semantic-ui-react";
import SelfStudy from "./images/SelfStudy";
import Phone1 from "./images/Phone1";
import Phone2 from "./images/Phone2";
export class info extends Component {
  render() {
    return (
      <div>
        <div className="container-body">
          <Grid columns={3} relaxed stackable>
            <Grid.Row>
              <Grid.Column>
                <SelfStudy />
                <ul>
                  <li>
                    Fits easily into your schedule; use SelfStudyPLUS whenever
                    you have time
                  </li>
                  <li>
                    Continually assesses you, adapting the questions delivered
                    to you, according to your specific strengths and weaknesses
                  </li>
                  <li>
                    Up-to-date content, relevant to your practice today, with
                    over 1900 questions
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
              <Grid.Column width={4}>
                <Phone1 />
                <Phone2 />
              </Grid.Column>
              <Grid.Column>
                <h1 className="title-color">
                  THE SCIENCE BEHIND SELFSTUDYPLUS:
                </h1>
                <h2 className="title-color ">
                  Individualized, Adaptive Learning
                </h2>
                <p className="sub-orange no-margin-bottom info-text">
                  Personalized learning
                </p>
                <p className="no-margin info-text">
                  SelfStudyPLUS employs adaptive learning methodology to
                  dynamically analyze your students strengths and weaknesses,
                  providing them with a personalized learning path. This leads
                  to improved performance and increased learning efficiency.
                </p>

                <p className="sub-orange no-margin-bottom info-text">
                  Spaced repetition
                </p>
                <p className="no-margin info-text">
                  Using a technique called spaced repetition, SelfStudyPLUS
                  automatically calculates how long it takes for you to forget
                  something they’ve learned and repeats important concepts as
                  needed. Repetitive storage and retrieval of information across
                  neural networks over time improves long-term retention.
                </p>
                <p className="sub-orange no-margin-bottom info-text">
                  Test-enhanced learning
                </p>
                <p className="no-margin info-text">
                  Scientific evidence suggests that testing is an important
                  component of learning. Tests can enhance and alert memory,
                  improving recall and promoting long-term retention. Emerging
                  evidence from cognitive science strongly suggests that testing
                  may be a very important component of learning. Tests,
                  especially pretests, can enhance and alert memory.
                </p>
                <p className="sub-orange no-margin-bottom info-text">
                  Interleaving
                </p>
                <p className="no-margin info-text">
                  SelfStudyPLUS presents information to you using an
                  interleaving approach to learning, a technique now recognized
                  as more effective than block learning for long-term retention.{" "}
                </p>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </div>
      </div>
    );
  }
}

export default info;
