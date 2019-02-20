import React from "react";
import PropTypes from "prop-types";
import { StaticQuery, graphql } from "gatsby";

import Header from "./header";
import "./layout.css";
import "./styles/styles.css";
import "semantic-ui-css/semantic.min.css";

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <>
        <Header siteTitle={data.site.siteMetadata.title} />

        {/* <div
          style={{
            margin: `0 auto`,
            maxWidth: 960,
            padding: `0px 1.0875rem 1.45rem`,
            paddingTop: 0,
          }}
        > */}
        <main>{children}</main>
        <footer>
          <div className="container-bottom">
            <div className="container-body centered">
              <p style={{ fontSize: "14px" }}>
                {" "}
                OpenAnesthesia™ content is intended for educational purposes
                only and not intended as medical advice. Reuse of
                OpenAnesthesia™ content for commercial purposes of any kind is
                prohibited.
              </p>{" "}
              <p style={{ fontSize: "14px" }}>
                {" "}
                Copyright © {new Date().getFullYear()}{" "}
              </p>
            </div>
          </div>
        </footer>
        {/* </div> */}
      </>
    )}
  />
);

Layout.propTypes = {
  children: PropTypes.node.isRequired
};

export default Layout;
