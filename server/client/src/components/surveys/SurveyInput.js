import React from "react";

function SurveyInput(props) {
  // console.log('redux\'s helper functions passed as props  are: ', props.input)
  return (
    <div>
      <label>{props.label}</label>
      <input {...props.input} placeholder={props.placeholder}/>
    </div>
  );
}

export default SurveyInput;
