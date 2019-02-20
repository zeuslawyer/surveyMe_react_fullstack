import axios from "axios";
import { FETCH_USER } from "./actions.types";

//USING PROMISES (.then() chains)
export const fetchUser = () => {
  //redux-thunk requires that actions return functions that take the dispatch() function as an arg
  return function(dispatch) {
    axios
      .get("/api/current_user") //   .then(data=>console.log('axios response:  ', data) )
      .then(resp => dispatch({ type: FETCH_USER, payload: resp.data }));
    //only id field is extracted for security reasons, as will be in state in browser
  };
};

//USING ASYNC AWAIT SYNTAX
export const handleStripeToken = token => {
  // console.log("handle stripe token action triggered");
  return async function(dispatch) {
    let resp = await axios.post("/api/stripe", token);
    dispatch({ type: FETCH_USER, payload: resp.data });
  };
};

// REDUX THUNK -> action returns a function (async)
//redux-thunk requires that actions return functions that take the dispatch() function as an arg
//passing in the HISTORY object (obtained by using withRouter() makes navigation from this action possible)
export const sendSurvey = (formValues, history) => {
  // console.log('received form values: ', formValues);
  //redux-thunk requires that actions return functions that take the dispatch() function as an arg
  return async function(dispatch) {
    const resp = await axios.post("/api/surveys", formValues)//.then(data=>console.log(dispatch) )
    history.push('/surveys')
    dispatch({ type: FETCH_USER, payload: resp.data }); 
  };
};