import React, { Component } from "react";
import SurveyForm from "./SurveyForm";
import { reduxForm } from "redux-form";
import SurveyFormReview from "./SurveyFormReview";

class SurveyContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showFormReviewComponent: false
    };
  }

  renderContent = () => {
    if (this.state.showFormReviewComponent) {
      return (
        <SurveyFormReview
          onCancelPressed={() =>
            this.setState({ showFormReviewComponent: false })
          }
        />
      );
    }

    //else
    return (
      <SurveyForm
        onSurveySubmit={() => this.setState({ showFormReviewComponent: true })}
      />
    );
  };

  render() {
    return <div>{this.renderContent()}</div>;
  }
}

export default reduxForm({
  form: "surveyForm"
})(SurveyContainer);

// export default SurveyContainer
