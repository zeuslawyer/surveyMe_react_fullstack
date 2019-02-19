import React from "react";
import {connect} from 'react-redux'
import { reduxForm, Field } from "redux-form";
import {FIELD_OBJECTS} from './formFields'

function SurveyFormReview({onCancelPressed, formValues}) {
  return (
    <div>
      <h5> PLEASE CONFIRM YOUR ENTRIES</h5> 
      <div>
        {renderReviewFields(formValues)}
      </div>
      <button className="yellow darken-3 btn-flat" onClick={onCancelPressed}>
        CANCEL
      </button>
    </div>
  );
}

function mapStateToProps(state) {
    // console.log('REDUX STORE:  ',  state)
    return {
        formValues: state.form.surveyForm.values
    }
}

function renderReviewFields(formValues) {
    return FIELD_OBJECTS.map(field => {
    //   return <Field key={field.name} {...field} />;
        return (
            <div key={field.name}>
                <label>{field.label}</label>
                <div>{formValues[field.name]}</div>
            </div>
        )
    });
  }
export default connect(mapStateToProps, null)(SurveyFormReview);
