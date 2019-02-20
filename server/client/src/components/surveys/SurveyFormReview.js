import React from "react";
import { connect } from "react-redux";
import { FIELD_OBJECTS } from "./formFields";
import * as actions from "../../actions/index";

function SurveyFormReview({ onCancelPressed, formValues, sendSurvey }) {
  return (
    <div>
      <h5> PLEASE CONFIRM YOUR ENTRIES</h5>
      <div>{renderReviewFields(formValues)}</div>
      <button
        className="yellow darken-3 btn-flat white-text"
        onClick={onCancelPressed}
      >
        BACK
      </button>
      <button
        className="teal btn-flat right white-text"
        onClick={() => sendSurvey(formValues)}
      >
        SEND SURVEY
      </button>
    </div>
  );
}

function mapStateToProps(state) {
  // console.log('REDUX STORE:  ',  state)
  return {
    formValues: state.form.surveyForm.values
  };
}

function renderReviewFields(formValues) {
  return FIELD_OBJECTS.map(field => {
    //   return <Field key={field.name} {...field} />;
    return (
      <div key={field.name}>
        <label>{field.label}</label>
        <div>{formValues[field.name]}</div>
      </div>
    );
  });
}
export default connect(
  mapStateToProps,
  actions
)(SurveyFormReview);
