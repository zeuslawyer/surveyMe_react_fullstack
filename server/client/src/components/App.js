import React, { Component } from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";
import { connect } from "react-redux";
import Header from "./Header";
import fetchUser from "../actions/index.js";

//DUMMY COMPONENTS
const Dashboard = () => <h2>Dashboard</h2>;
const SurveyNew = () => <h2>SurveyNew</h2>;
const Landing = props => (
  <div>
    <h2>Landing</h2>
    <p>Hello, World!</p>
  </div>
);

class App extends Component {
  
  componentDidMount() {
    this.props.fetchUser();
  }

  render() {
    return (
      <div className="container">
        <BrowserRouter>
          <div>
            <Header />
            <Route exact={true} path="/" component={Landing} />
            <Route exact path="/surveys" component={Dashboard} />
            <Route path="/surveys/new" component={SurveyNew} />
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default connect(
  null,
  {fetchUser}
)(App);
