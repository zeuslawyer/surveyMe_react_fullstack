import React, { Component } from 'react'
import SurveyForm from './SurveyForm';
import SurveySummary from './SurveySummary'

class SurveyContainer extends Component {
  render() {
    return (
      <div>
        <SurveyForm />
        <SurveySummary />
      </div>
    )
  }
}

export default SurveyContainer
