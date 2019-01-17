import axios from "axios";
import { FETCH_USER } from "./actions.types";

const fetchUser = () => {
  return function(dispatch) {
    axios
      .get("/api/current_user")
    //   .then(data=>console.log('axios response:  ', data) )
      .then(resp => dispatch({ type: FETCH_USER, payload: resp }));
  };
};

export default fetchUser;
