import React, { Component } from "react";
import { BrowserRouter, Route, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import Header from "./Header";
import Landing from "./Landing";
import Dashboard from "./Dashboard";
import * as actions from "../actions/index.js";
import SurveyContainer from "../components/surveys/SurveyContainer";

//DUMMY COMPONENTS

class App extends Component {
  componentDidMount() {
    this.props.fetchUser();
  }

  render() {
    return (
      <BrowserRouter>
        <div className="container">
          <Header />
          <Route exact={true} path="/" component={Landing} />
          <Route exact path="/surveys" component={Dashboard} />
          <Route path="/surveys/new" component={withRouter(SurveyContainer)} />
        </div>
      </BrowserRouter>
    );
  }
}

export default connect(
  null,
  // { fetchUser }
  actions
)(App);
