import React, { Component } from "react";
import { reduxForm, Field } from "redux-form";
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
    return (
      <div>
        <form onSubmit={this.props.handleSubmit(values => console.log(values))}>
          {/* <Field type="text" name="surveyTitle" component="input" />
           */}
          {this.renderFields()}
          <button type="submit">SUBMIT</button>
        </form>
      </div>
    );
  }
}

export default reduxForm({
  form: "surveyForm"
})(SurveyForm);
