import { Link } from "gatsby";
import { FaBars } from "react-icons/fa";
import React, { Component } from "react";
import Responsive from "react-responsive";
import { Grid, Dropdown, Menu } from "semantic-ui-react";
import LogoBig from "./images/LogoBig.js";
import Card from "./Card.js";
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
                        paddingTop: "20px",
                        display: "inline",
                        paddingRight: "0"
                      }}
                    >
                      for Nurse Anesthesia
                    </h3>
                    <Mobile>
                      <Card />
                    </Mobile>
                    {/* <Mobile>
                      <Dropdown
                        text="File"
                        style={{ zIndex: "1000", float: "right" }}
                      >
                        <Dropdown.Menu>
                          <Dropdown.Item text="New" />
                          <Dropdown.Item
                            text="Open..."
                            description="ctrl + o"
                          />
                          <Dropdown.Item
                            text="Save as..."
                            description="ctrl + s"
                          />
                          <Dropdown.Item text="Rename" description="ctrl + r" />
                          <Dropdown.Item text="Make a copy" />
                          <Dropdown.Item icon="folder" text="Move to folder" />
                          <Dropdown.Item icon="trash" text="Move to trash" />
                          <Dropdown.Divider />
                          <Dropdown.Item text="Download As..." />
                          <Dropdown.Item text="Publish To Web" />
                          <Dropdown.Item text="E-mail Collaborators" />
                        </Dropdown.Menu>
                      </Dropdown> */}
                    {/* <FaBars
                        style={{
                          display: "inline",
                          float: "right",
                          paddingLeft: 0,
                          position: "relative"
                        }}
                      />
                    </Mobile> */}
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
