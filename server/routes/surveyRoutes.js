const requireLogin = require("../middlewares/requireLogin.js");
const checkCredits = require("../middlewares/checkCredits");

module.exports = app => {
  app.get("/api/surveys", requireLogin, checkCredits, (req, res) => {});

  app.post("/api/surveys", requireLogin, checkCredits, (req, res) => {
    //get 4 pieces of data: Title, subject, body, recipients
  });

  app.post("/api/surveys/email-webhook", (req, res) => {
    //record feedback from respondent's action in the email
  });
};
