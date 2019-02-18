import { Link } from "gatsby";
import PropTypes from "prop-types";
import React from "react";
import Logo_Image from "./Logo_Image.js";

const Header = ({ siteTitle }) => (
  <header
    style={{
      background: `#ffffff`,
      marginBottom: `1.45rem`
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
          gridTemplateColumns: " repeat(2, 1fr)",
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
            {" "}
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
  </header>
);

Header.propTypes = {
  siteTitle: PropTypes.string
};

Header.defaultProps = {
  siteTitle: ``
};

export default Header;
