const requireLogin = require("../middlewares/requireLogin.js");
const checkCredits = require("../middlewares/checkCredits");

//retrieve the Survey Class/ Model from mongoose, so we can read/write to DB
const mongoose = require("mongoose");
const Survey = mongoose.model("surveys");

module.exports = app => {
  app.get("/api/surveys", requireLogin, checkCredits, (req, res) => {
    res.send("you GOT the /api/surveys route");
  });

  app.post("/api/surveys", requireLogin, checkCredits, (req, res) => {
    /*
      1) get 4 pieces of data: Title, subject, body, recipients
      2) construct Survey Mongoose object 
      3) send email to list of recipients
      4) if survey succesfully emailed, then save Survey to db
    */
    const { title, body, subject, recipients } = req.body;
    const survey = new Survey({
      title,
      subject,
      body,
      recipients: recipients.split(",").map(email => ({ email: email.trim() })),
      _user: req.user.id,
      dateSent: Date.now()
    });
  });

  app.post("/api/surveys/email-webhook", (req, res) => {
    //record feedback from respondent's action in the email
  });
};
