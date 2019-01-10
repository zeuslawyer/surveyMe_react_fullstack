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

function successCallback(accessToken, refreshToken, profile, done) {
  //check db for user and save if not previously registered
  User.findOne({ googleID: profile.id })
  .then(existingUser => {
    //if null , i.e. no such user in db...
    if (!existingUser) {
      new User({
        googleID: profile.id,
        name: profile.displayName,
        email: profile.emails[0].value
      })
        .save()
        .then(user => {
          console.log("New user. Saved to DB.... at... ", __dirname);
          done(null, user);
        });
    } else {
      //if not null i.e. user already exists in db...
      console.log("User already exists: ", profile.id, " at... ", __dirname);
      done(null, existingUser);
    }
  })
  .catch(err => {
    console.log(
      "promise-related error when checking if user exists" +
        " ...at.... " +
        __dirname
    );
    done(err, null);
  })

  // console.log("accessToken : ", accessToken);
  // console.log("refreshToken : ", refreshToken);
  // console.log("Google profile ID: ", profile.id);
  // // console.log("done : ", done);
  // console.log("\nLOG statements are AT : ", __dirname);
}
