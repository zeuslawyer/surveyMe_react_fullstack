import React, { Component } from "react";
import { connect } from "react-redux";
import logo from "../assets/matchfitLogo.png";

class Header extends Component {
  logoStyle = {
    width: "68px"
    // height: "68px"
  };

  renderContent() {
    switch (this.props.auth) {
      case null:
        return "loading auth status";

      default:
        console.log(this.props.auth);
        let buttonText = this.props.auth.isLoggedIn
          ? "Logout"
          : "Login With Google";
        let href = this.props.auth.isLoggedIn ? "/api/logout" : "auth/google";
        return (
          <li>
            <a href={href}>{buttonText}</a>
          </li>
        );
    }
  }

  render() {
    return (
      <nav>
        <div className="nav-wrapper">
          <a className="left brand-logo" href="/">
            <img src={logo} style={this.logoStyle} alt=""/>
          </a>
          <ul className="right ">
            {this.renderContent()}
          </ul>
        </div>
      </nav>
    );
  }
}

const mapStateToProps = state => {
  /* take the redux store argument, and create object becomes this component's props*/
  return { auth: state.auth };
};

export default connect(
  mapStateToProps,
  null
)(Header);
