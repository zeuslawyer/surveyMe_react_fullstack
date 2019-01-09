const express = require("express");
const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const CONFIG = require("./secret.js");

const app = express();
const PORT = process.env.PORT || 5000;

passport.use(
  new GoogleStrategy(
    {
      clientID: CONFIG.googleClientID,
      clientSecret: CONFIG.googleClientSecret,
      callbackURL: "/auth/google/callback"
    },
    accessToken => {
      console.log(accessToken);
    }
  )
);

app.get(
  "/auth/google",
  passport.authenticate("google", {
    scope: ["profile", "email"]
  })
);

app.get("/", (req, res) => {
  console.log("\nroot endpoint hit...\n");
  res.send({ body: "Hi, there!" });
});

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}!`);
});
