const passport = require("passport");
const { stripeSecretKey } = require("../config/secrets.js");
const stripe = require("stripe")(stripeSecretKey);
const mongoose = require("mongoose");

//retrieve the User Class/ Model from mongoose, so the GoogleStrategy can read/write to the User collection
const User = mongoose.model("users");

module.exports = app => {
  //handle stripe payment
  app.post("/api/stripe", async (req, res) => {
    console.log(" *** stripe transaction endpoint hit *** ", stripeSecretKey);
    let charge = await stripe.charges.create({
      amount: 500, //in cents, re specified confirms front end
      currency: 'usd',
      description: '$5 for 5 survey credits',
      source: req.body.id
    })

    console.log(charge);

    // let updatedUser = { ...req.user };
    // updatedUser["body"] = req.body;
    // console.log(updatedUser);
    // res.sendb(req.updatedUser);
  });
};
