const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const CONFIG = require("../secret.js");
const mongoose = require("mongoose");

//retrieve the User Class/ Model from mongoose
const User = mongoose.model("users");

passport.use(
  new GoogleStrategy(
    {
      clientID: CONFIG.googleClientID,
      clientSecret: CONFIG.googleClientSecret,
      callbackURL: "/auth/google/callback" //this must match with the google console setup for oauth URL redirect
    },
    successCallback
  )
);

function successCallback(accessToken, refreshToken, profile, done)  {
  // console.log("accessToken : ", accessToken);
  // console.log("refreshToken : ", refreshToken);
  // console.log("Google profile ID: ", profile.id);
  // // console.log("done : ", done);
  // console.log("\nLOG statements are AT : ", __dirname);
  new User({
    googleID: profile.id ,
    // name: profile.displayName,
    // email: profile.emails[0].value 
  }).save();
}