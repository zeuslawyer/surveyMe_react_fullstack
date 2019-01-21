import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import Payments from "./Payments";
import logo from "../assets/matchfitLogo.png";

class Header extends Component {
  logoStyle = {
    width: "60px"
    // height: "68px"
  };

  renderContent() {
    switch (this.props.auth) {
      case null:
        return "loading auth status";

      default:
        // console.log(this.props.auth);
        let buttonText = this.props.auth.isLoggedIn
          ? "Logout"
          : "Login With Google";
        let href = this.props.auth.isLoggedIn ? "/api/logout" : "auth/google";

        if (this.props.auth.isLoggedIn) {
          return [
            <li key="1">
              <Payments />
            </li>,
            <li key="2">
              Credits: 0
            </li>,
            <li key="3">
            <a href={href}>{buttonText}</a>
          </li>
          ];
        } else {
          return (
            <li>
              <a href={href}>{buttonText}</a>
            </li>
          );
        }
    }
  }

  render() {
    return (
      <nav>
        <div className="nav-wrapper">
          <div>
            <Link
              className="left brand-logo"
              to={
                this.props.auth && this.props.auth.isLoggedIn ? "/surveys" : "/"
              }
            >
              SurveyMe!
              {/* <img src={logo} style={this.logoStyle} alt="" /> */}
            </Link>
          </div>
          <ul className="right">{this.renderContent()}</ul>
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
