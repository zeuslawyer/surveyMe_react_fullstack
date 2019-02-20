import React, { Component } from "react";
import { reduxForm, Field } from "redux-form";
import { Link } from "react-router-dom";
import getInvalidEmails from "../../utils/validateEmails";
import { FIELD_OBJECTS } from "./formFields";

/*
 * prepare attributes for each field as an object of attributes to be mapped over at runtime...
 * each Field takes a prop of 'component' which refers to the custom SurveyInput component that renders an input
 */

class SurveyForm extends Component {
  renderFields() {
    return FIELD_OBJECTS.map(field => {
      return <Field key={field.name} {...field} />;
    });
  }
  render() {
    // console.log("FORM STATE: ", this.state);
    return (
      <div>
        <form
          onSubmit={this.props.handleSubmit(values => {
            // console.log(values);
            this.props.onSurveySubmit();
          })}
        >
          {this.renderFields()}
          <div>
            <Link to="/surveys">
              <button className="red btn-flat white-text">CANCEL</button>
            </Link>
            <button type="submit" className="teal btn-flat right white-text">
              NEXT
            </button>
          </div>
        </form>
      </div>
    );
  }
}

/*
 * @params takes the form's values
 * performs validation logic and then constructs an errors object with the incorrect form key + error message
 * @returns errors object containing incorrect key + error message. Each property in errors object is
 * matched to the Field with the same name as the property, and passed to that Field in props.meta.error
 */
function validateForm(formValues) {
  const errors = {};

  //check each input field for invalid entries
  FIELD_OBJECTS.forEach(field => {
    if (!formValues[field.name]) {
      errors[field.name] = field.emptyFieldError;
    }
  });

  //check email input for invalid emails
  let invalidEmails = getInvalidEmails(formValues.recipients || "");
  invalidEmails.forEach(email => {
    if (email.length === 0) {
      errors.recipients = `One or more of the emails has an error or an extra comma`;
    } else if (invalidEmails.length > 0) {
      errors.recipients = `These emails are invalid: ${invalidEmails}`;
    }
  });

  // regex to check if emails have more than 1 comma
  let tooManyCommas = /,,/.test(formValues.recipients);
  if (tooManyCommas) {
    errors.recipients = `Too many commas`;
  }

  //return errors object to redux form
  return errors;
}

export default reduxForm({
  form: "surveyForm", //form name in redux store
  validate: validateForm,
  destroyOnUnmount: false
})(SurveyForm);
