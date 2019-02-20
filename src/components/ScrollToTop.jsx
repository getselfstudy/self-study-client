import React, { Component } from "react";

class ScrollToTop extends Component {
  componentDidUpdate(prevProps) {
    if (this.props.location !== prevProps.location) {
      window.scrollTo(0, 0);
    }
  }

  render() {
    return this.props.children;
  }
}

export default ScrollToTop;

// Copy this into the components folder, then
// import this into the app.js or entry point file. Sandwhich around the <Route> </Route>
// items. Otherwise this will not work!
