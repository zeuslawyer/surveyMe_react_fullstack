import React, { Component } from "react";
import logo from "../assets/matchfitLogo.png";

class Header extends Component {
  logoStyle = {
    width: "68px",
    // height: "68px"
  };
  render() {
    return (
      <nav>
        <div className="nav-wrapper">
          <a className="left brand-logo" href="/">
            <img src={logo} style={this.logoStyle} alt=""/>
          </a>
          <ul className="right ">
            <li>
              <a>Login with Google</a>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default Header;
