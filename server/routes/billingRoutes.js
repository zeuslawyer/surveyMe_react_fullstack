const passport = require("passport");
const { stripeSecretKey } = require("../config/secrets.js");
const stripe = require("stripe")(stripeSecretKey);
const mongoose = require("mongoose");

//retrieve the User Class/ Model from mongoose, so the GoogleStrategy can read/write to the User collection
const User = mongoose.model("users");

module.exports = app => {
  //handle stripe payment
  app.post("/api/stripe", async (req, res) => {
    // console.log(req.body)
    console.log(" *** stripe transaction endpoint hit *** ");
    if (!req.user) return res.status(401).send({error: 'User not logged in.'});

    //else
    let charge = await stripe.charges.create({
      amount: 500, //in cents, re specified confirms front end
      currency: "usd",
      description: "$5 for 5 survey credits",
      source: req.body.id
    });

    // console.log(charge);
    req.user.credits += 5;
    console.log(req.user);
    const updatedUser = await req.user.save();
    res.send(updatedUser);

    // let updatedUser = { ...req.user };
    // updatedUser["body"] = req.body;
    // console.log(updatedUser);
    // res.sendb(req.updatedUser);
  });
};
