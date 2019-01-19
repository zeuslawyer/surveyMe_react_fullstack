import { FETCH_USER } from "../actions/actions.types";

// const initialAuthState = {
//   userID: null,
//   isLoggedIn: false
// };
const initialAuthState = null;

const authReducer = (state = initialAuthState, action) => {
  switch (action.type) {
    case FETCH_USER:
      // console.log("FETCH_USER Action: ", action);
      const newState = {
        ...state,
        isLoggedIn: !!action.payload, //if !loggedin, payload is empty string => falsey
        userID: action.payload.id || null
      };
      return newState;
    default:
      // console.log("Default reducer- no matching action: ", action);
      return state;
  }
};

export default authReducer;
