import React, { Component } from "react";
import { reduxForm, Field } from "redux-form";
import SurveyInput from "./SurveyInput";

class SurveyForm extends Component {
  renderInputs() {
    return (
      <div>
        <Field type="text" name="title" component={SurveyInput} />
      </div>
    );
  }
  render() {
    return (
      <div>
        <form onSubmit={this.props.handleSubmit(values => console.log(values))}>
          {/* <Field type="text" name="surveyTitle" component="input" />
           */}
          {this.renderInputs()}
          <button type="submit">SUBMIT</button>
        </form>
      </div>
    );
  }
}

export default reduxForm({
  form: "surveyForm"
})(SurveyForm);
