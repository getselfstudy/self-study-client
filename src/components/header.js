import { Link } from "gatsby";

import React, { Component } from "react";
import Responsive from "react-responsive";
import { Grid } from "semantic-ui-react";
import LogoBig from "./images/LogoBig.js";
const Mobile = props => <Responsive {...props} maxWidth={767} />;
const Default = props => <Responsive {...props} minWidth={768} />;

export default class Header extends Component {
  render() {
    return (
      <header
        style={{
          top: "0",
          overflow: "hidden",
          background: `#ffffff`,
          position: "sticky",
          width: "100%",
          zIndex: "900"
        }}
      >
        <div
          style={{
            margin: `0px auto`
          }}
        >
          <div className="container-body">
            <Grid relaxed stackable columns={2}>
              <Grid.Row>
                <Grid.Column width={5} computer={5}>
                  <Link
                    to="/"
                    style={{
                      color: `#104b87`,
                      textDecoration: `none`,
                      marginBottom: "0",
                      paddingBottom: "0"
                    }}
                  >
                    <LogoBig />
                  </Link>
                </Grid.Column>
                <Grid.Column width={6} computer={4}>
                  <div>
                    <h3
                      style={{
                        color: "#104b87",
                        textAlign: "center",
                        paddingLeft: "20px",
                        verticalAlign: "middle",
                        paddingTop: "20px"
                      }}
                    >
                      for Nurse Anesthesia
                    </h3>
                  </div>
                </Grid.Column>
              </Grid.Row>
            </Grid>
          </div>
        </div>
        <div className="container-header">
          <Default>
            <nav>
              <Link
                to="/features"
                className="items"
                activeStyle={{ color: "#e75328" }}
              >
                Features
              </Link>
              <Link
                className="items"
                to="/crna"
                activeStyle={{ color: "#e75328" }}
              >
                CRNA
              </Link>
              <Link
                to="/srna"
                className="items"
                activeStyle={{ color: "#e75328" }}
              >
                SRNA
              </Link>
              <Link
                to="/anpd"
                className="items"
                activeStyle={{ color: "#e75328" }}
              >
                Program Directors
              </Link>
            </nav>
          </Default>
        </div>
        <div className="blue-header-line" />
      </header>
    );
  }
}

// Header.propTypes = {
//   siteTitle: PropTypes.string
// };

// Header.defaultProps = {
//   siteTitle: ``
// };
