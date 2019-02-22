import React, { Component } from "react";
import { Link } from "gatsby";
import Button from "semantic-ui-react";
import { FaBars } from "react-icons/fa";
class Card extends Component {
  constructor() {
    super();

    this.state = {
      showMenu: false
    };

    this.showMenu = this.showMenu.bind(this);
    this.closeMenu = this.closeMenu.bind(this);
  }

  showMenu(event) {
    event.preventDefault();

    this.setState({ showMenu: true }, () => {
      document.addEventListener("click", this.closeMenu);
    });
  }

  closeMenu(event) {
    if (!this.dropdownMenu.contains(event.target)) {
      this.setState({ showMenu: false }, () => {
        document.removeEventListener("click", this.closeMenu);
      });
    }
  }

  render() {
    return (
      <div>
        <FaBars onClick={this.showMenu} />
        {this.state.showMenu ? (
          <div
            className="menu"
            ref={element => {
              this.dropdownMenu = element;
            }}
          >
            <br />
            <Link to="/features" activeStyle={{ color: "#e75328" }}>
              <h1>Features</h1>
            </Link>
            <Link to="/crna" activeStyle={{ color: "#e75328" }}>
              <h1>CRNA</h1>
            </Link>
            <Link to="/srna" activeStyle={{ color: "#e75328" }}>
              <h1>SRNA</h1>
            </Link>
            <Link to="/anpd" activeStyle={{ color: "#e75328" }}>
              <h1>Program Directors</h1>
            </Link>
          </div>
        ) : null}
      </div>
    );
  }
}
export default Card;
