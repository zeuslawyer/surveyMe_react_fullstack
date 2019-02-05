import React, { Component } from "react";
import { reduxForm, Field } from "redux-form";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import SurveyInput from "./SurveyInput";

/*
 * prepare attributes for each field as an object of attributes to be mapped over at runtime...
 * each Field takes a prop of 'component' which refers to the custom SurveyInput component that renders an input
 */

const FIELD_OBJECTS = [
  {
    label: "Survey Title",
    name: "title",
    type: "text",
    component: SurveyInput
  },
  {
    label: "Subject Line",
    name: "subject",
    type: "text",
    component: SurveyInput
  },
  { label: "Email Body", name: "body", type: "text", component: SurveyInput },
  {
    label: "Recipients",
    name: "recipients",
    type: "text",
    component: SurveyInput,
    placeholder: "Separate emails with commas"
  }
];

class SurveyForm extends Component {
  renderFields() {
    return FIELD_OBJECTS.map(field => {
      return <Field key={field.name} {...field} />;
    });
  }
  render() {
    console.log("FORM STATE: ", this.state);
    return (
      <div>
        <form onSubmit={this.props.handleSubmit(values => console.log(values))}>
          {/* <Field type="text" name="surveyTitle" component="input" />
           */}
          {this.renderFields()}
          <div>
            <Link to="/surveys">
              <button className="red btn-flat white-text">CANCEL</button>
            </Link>
            <button type="submit" className="teal btn-flat right white-text">
              NEXT
              {/* <i className="materials-icon right">done</i> */}
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default reduxForm({ form: "surveyForm" })(SurveyForm);
