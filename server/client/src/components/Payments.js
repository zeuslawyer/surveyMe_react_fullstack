import React, { Component } from "react";
import StripeCheckout from "react-stripe-checkout";
import { connect } from 'react-redux';
import * as actions from '../actions/index'

class Payments extends Component {
  render() {
    // debugger;
    return (
      <StripeCheckout
        name="SurveyMe"
        description="$5 for 5 survey credits"
        amount={500}
        token={token => this.props.handleStripeToken(token)}
        stripeKey={process.env.REACT_APP_STRIPE_PUBLISHABLE_KEY}
        // label="ADD CREDITS"
      >
      <button className="btn" style={{color: "#ee6e73", background: "#fff"}}>ADD CREDITS</button>
      </ StripeCheckout>
    );
  }
}

export default connect(null, actions)(Payments);
