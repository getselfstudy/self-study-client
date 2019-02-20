import { Link } from "gatsby";
import PropTypes from "prop-types";
import React, { Component } from "react";
import Logo_Image from "./Logo_Image.js";
import { Menu, Grid } from "semantic-ui-react";

export default class Header extends Component {
  state = {};

  handleItemClick = (e, { name }) => this.setState({ activeItem: name });
  render() {
    const { activeItem } = this.state;
    return (
      <header
        style={{
          overflow: "hidden",
          background: `#ffffff`,
          marginBottom: `1.45rem`,
          position: "fixed",
          width: "100%",
          zIndex: "900"
        }}
      >
        <div
          style={{
            margin: `0 auto`,
            maxWidth: 960,
            padding: `1.45rem 1.0875rem`
          }}
        >
          <div
            style={{
              display: "grid",
              gridTemplateColumns: " 30% 15%",
              gridGap: "20px"
            }}
          >
            <div>
              <Link
                to="/"
                style={{
                  color: `#104b87`,
                  textDecoration: `none`
                }}
              >
                <Logo_Image />
              </Link>
            </div>
            <div>
              {" "}
              <h3
                style={{
                  color: "#104b87",
                  float: "left",
                  paddingLeft: "20px",
                  verticalAlign: "middle"
                }}
              >
                {" "}
                for Nurse Anesthesia
              </h3>
            </div>
          </div>
        </div>
        <div className="container-body">
          <Menu style={{ justifyContent: "center" }}>
            {" "}
            <Link to="/features">
              <Menu.Item
                name="features"
                active={activeItem === "features"}
                onClick={this.handleItemClick}
              >
                Features
              </Menu.Item>
            </Link>
            <Link to="/crna">
              <Menu.Item
                name="crna"
                active={activeItem === "crna"}
                onClick={this.handleItemClick}
              >
                CRNA
              </Menu.Item>
            </Link>
            <Link to="/srna">
              <Menu.Item
                name="srna"
                active={activeItem === "srna"}
                onClick={this.handleItemClick}
              >
                SRNA
              </Menu.Item>
            </Link>
            <Link to="/anpd">
              <Menu.Item
                name="anpd"
                active={activeItem === "anpd"}
                onClick={this.handleItemClick}
              >
                Program Directors
              </Menu.Item>
            </Link>
          </Menu>
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
