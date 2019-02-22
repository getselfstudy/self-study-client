import { Link } from "gatsby";
import { FaBars } from "react-icons/fa";
import React, { Component } from "react";
import Responsive from "react-responsive";
import { Grid, Dropdown, Menu } from "semantic-ui-react";
import LogoBigHeader from "./images/LogoBigHeader.js";
import Card from "./Card.js";

const Small = props => <Responsive {...props} maxWidth={991} />;
const Mobile = props => <Responsive {...props} maxWidth={767} />;
const Default = props => <Responsive {...props} minWidth={992} />;

export default class Header extends Component {
  render() {
    return (
      <header
        style={{
          top: "0",

          background: `#ffffff`,

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
                <Grid.Column width={5} computer={5} tablet={16}>
                  <Link
                    to="/"
                    style={{
                      color: `#104b87`,
                      textDecoration: `none`,
                      marginBottom: "0",
                      paddingBottom: "0",
                      display: "block"
                    }}
                  >
                    <LogoBigHeader />
                  </Link>
                </Grid.Column>
                <Grid.Column width={4} computer={4} tablet={16}>
                  <div>
                    <Default>
                      <h3
                        style={{
                          color: "#104b87",

                          verticalAlign: "middle",
                          paddingTop: "20px",
                          paddingRight: "0",
                          display: "block"
                        }}
                      >
                        for Nurse Anesthesia
                      </h3>
                    </Default>
                    <Small>
                      <h3
                        style={{
                          color: "#104b87",
                          textAlign: "center",

                          paddingRight: "0"
                        }}
                      >
                        for Nurse Anesthesia
                      </h3>
                    </Small>
                    <br />
                    <Small>
                      <div style={{ textAlign: "center" }}>
                        <Card />
                      </div>
                    </Small>
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
