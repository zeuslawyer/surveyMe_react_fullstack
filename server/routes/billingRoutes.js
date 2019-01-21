const passport = require("passport");

module.exports = app => {
  //handle stripe payment
  app.post("/api/stripe", (req, res) => {
    console.log("stripe transaction endpoint... ");
    // res.send(Object.keys(req));
    res.send(req.url);
  });
};
