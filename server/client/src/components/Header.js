import React, { Component } from "react";
import { connect } from "react-redux";
import logo from "../assets/matchfitLogo.png";

class Header extends Component {
  logoStyle = {
    width: "68px"
    // height: "68px"
  };

  renderContent() {
    let buttonText = "Login With Google";
    switch (this.props.auth) {
      case null:
        return "still authing";

      default:
        // if (this.props.auth.isLoggedIn) return 'LOGGED IN'
        // if (!this.props.auth.isLoggedIn) return this.jsxContent;
        console.log(this.props.auth);
        buttonText = this.props.auth.isLoggedIn ? "Logout" : buttonText
        return this.renderJSX(buttonText)
    }
  }

  renderJSX(buttonText) {
    return (
      <nav>
        <div className="nav-wrapper">
          <a className="left brand-logo" href="/">
            <img src={logo} style={this.logoStyle} alt="" />
          </a>
          <ul className="right ">
            <li>
              <a>{buttonText}</a>
            </li>
          </ul>
        </div>
      </nav>
    );
  }

  render() {
    return this.renderContent();
  }

  // render() {
  //   return (
  //     <nav>
  //       <div className="nav-wrapper">
  //         <a className="left brand-logo" href="/">
  //           <img src={logo} style={this.logoStyle} alt=""/>
  //         </a>
  //         <ul className="right ">
  //           <li>
  //             <a>Login with Google</a>
  //           </li>
  //         </ul>
  //       </div>
  //     </nav>
  //   );
  // }
}

const mapStateToProps = state => {
  /* take the redux store argument, and create object becomes this component's props*/
  return { auth: state.auth };
};

export default connect(
  mapStateToProps,
  null
)(Header);
