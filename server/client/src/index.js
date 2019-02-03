import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import reduxThunk from "redux-thunk";
import materializeCSS from "materialize-css/dist/css/materialize.min.css";
import axios from 'axios'

import App from "./components/App";
import reducers from "./reducers/index";

if(process.env.REACT_APP_IN_DEV){
  window.axios = axios;
}

// const dummyReducer = () => [];
const initialState = {};

const store = createStore(reducers, initialState, applyMiddleware(reduxThunk));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.querySelector("#root")
);
