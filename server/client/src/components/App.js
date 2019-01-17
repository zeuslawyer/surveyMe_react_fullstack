import React, { Component } from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";

//DUMMY COMPONENTS
const Header = () => <h2>Header</h2>;
const Dashboard = () => <h2>Dashboard</h2>;
const SurveyNew = () => <h2>SurveyNew</h2>;
const Landing = props => (
  <div>
    <h2>Landing</h2>
    <p>Hello, World!</p>
  </div>
);

class App extends Component {
  render() {
    return (
      <div>
        <BrowserRouter >
          <div>
            <Header />
            <Route exact={true} path="/" component={Landing}  />
            <Route exact path="/surveys" component={Dashboard} />
            <Route path="/surveys/new" component={SurveyNew} />
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
