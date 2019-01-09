const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const CONFIG = require("../secret.js");

passport.use(
  new GoogleStrategy(
    {
      clientID: CONFIG.googleClientID,
      clientSecret: CONFIG.googleClientSecret,
      callbackURL: "/auth/google/callback" //this must match with the google console setup for oauth URL redirect
    },
    (accessToken, refreshToken, profile, done) => {
      console.log("accessToken : ", accessToken);
      console.log("refreshToken : ", refreshToken);
      console.log("profile : ", profile);
      console.log("done : ", done);
      console.log("\nLOG statements are AT : ", __dirname);
    }
  )
);
