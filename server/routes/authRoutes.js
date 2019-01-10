const passport = require("passport");

// export the route handler middlerwares AS A FUNCTION, that gets mounted when invoked in /index.js
module.exports = app => {
  app.get(
    "/auth/google",
    passport.authenticate("google", {
      scope: ["profile", "email"]
    })
  );

  app.get("/auth/google/callback", passport.authenticate("google"));

  app.get("/testauth", (req, res) => {
    res.send(req.user);
  });
};
