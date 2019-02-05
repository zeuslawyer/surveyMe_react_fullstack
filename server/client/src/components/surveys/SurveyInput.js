import React from "react";

function SurveyInput(props) {
  // console.log('redux\'s helper functions passed as props  are: ', props.input)
  return (
    <div >
      <label style={{fontSize:"16px"}}>{props.label}</label>
      <div style={{ color: "red", fontWeight: "bold" }}>
        <small>
          {/* in-line conditionals:    - <if><boolean> && <return><something> */}
          {props.meta.touched && props.meta.error}
        </small>
      </div>
      <input style={{marginBottom: "10px", height:"2em", fontSize:"14px"}} {...props.input} placeholder={props.placeholder} />
    </div>
  );
}

export default SurveyInput;
