import axios from "axios";
import { FETCH_USER } from "./actions.types";

export const fetchUser = () => {
  //redux-thunk requires that actions return functions that take the dispatch() function as an arg
  return function(dispatch) {
    axios
      .get("/api/current_user") //   .then(data=>console.log('axios response:  ', data) )
      .then(resp => dispatch({ type: FETCH_USER, payload: resp.data }));
    //only id field is extracted for security reasons, as will be in state in browser
  };
};
