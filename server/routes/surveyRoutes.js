const requireLogin = require("../middlewares/requireLogin.js");
const checkCredits = require("../middlewares/checkCredits");
const Mailer = require("../services/Mailer");
const generateSurveyTemplate = require("../services/emailTemplates/surveyTemplate");

//retrieve the Survey Class/ Model from mongoose, so we can read/write to DB
const mongoose = require("mongoose");
const Survey = mongoose.model("surveys");

module.exports = app => {
  app.get("/api/surveys/thanks", requireLogin, checkCredits, (req, res) => {
    console.log(" *** THANKS endpoint hit.... ***");
    res.send("Thanks for voting!");
  });

  app.post("/api/surveys", requireLogin, checkCredits, async (req, res) => {
    /*
      1) get 4 pieces of data: Title, subject, body, recipients
      2) construct Survey Mongoose object 
      3) send email to list of recipients using the Mailer class that extends sendgrid
      4) if survey succesfully emailed, then save Survey to db
    */
    const { title, body, subject, recipients } = req.body;
    console.log("\n*** /api/surveys route hit!! ***\n");
    const survey = new Survey({
      title,
      subject,
      body,
      recipients: recipients.split(",").map(email => ({ email: email.trim() })),
      // _user: req.user.id,
      dateSent: Date.now()
    });
    // console.log("**SURVEY*** Endpoint Hit   ", survey);

    //SAVE mailer
    const mailer = new Mailer(survey, generateSurveyTemplate(survey));

    // SEND mailer
    try {
      const response = await mailer.send();
      // console.log("MAILER RESPONSE:  ", response)

      // SAVE survey, and deduct user credit
      await survey.save();
      req.user.credits -= 1;
      const updatedUser = await req.user.save();
      res.send(updatedUser) 
      // res.redirect("/surveys");
    } catch (err) { 
      res.status(422).send(err);
    }
  });

  app.post("/api/surveys/email-webhook", (req, res) => {
    //record feedback from respondent's action i the email
  });
};
