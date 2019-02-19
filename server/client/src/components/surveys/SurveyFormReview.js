import React from "react";

function SurveyFormReview({ onCancelPressed }) {
  return (
    <div>
      <h5> PLEASE CONFIRM YOUR ENTRIES</h5>
      <button className="yellow darken-3 btn-flat" onClick={onCancelPressed}>
        CANCEL
      </button>
    </div>
  );
}

export default SurveyFormReview;
