import React from "react";

function SurveyInput(props) {
  // console.log('redux\'s helper functions passed as props  are: ', props.input)
  return (
    <div>
      <label>{props.label}</label>
      <div style={{ color: "red", fontWeight: "bold" }}>
        <small>
          {/* in-line conditional - <if><boolean> && <return><something> */}
          {props.meta.touched && props.meta.error}
        </small>
      </div>
      <input {...props.input} placeholder={props.placeholder} />
    </div>
  );
}

export default SurveyInput;
