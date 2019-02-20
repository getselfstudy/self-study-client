import React from "react";
import { Link } from "gatsby";

import Layout from "../components/layout";
import SEO from "../components/seo";

const anpd = () => (
  <Layout>
    <SEO title="Program Directors" />
    <div style={{ paddingTop: "30vh" }} />
    <div className="container-body">
      <h2 className="title-color" style={{ fontSize: "50px" }}>
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
        <h1> VIDEO </h1>
        <p>Introducing SelfStudyPLUS for Nurse Anesthesia</p>
        <h1> VIDEO </h1>
        <p>
          Progress reporting, Practice tests and Games in SelfStudyPLUS for
          Nurse Anesthesia
        </p>
      </div>
    </div>
  </Layout>
);

export default anpd;
