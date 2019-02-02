const helper = require("@sendgrid/helpers").classes;
const helper2 = require("sendgrid");
const { sendGridKey } = require("../config/secrets");

// designed to work for things other than just surveys
class Mailer extends helper.Mail {
  /*
    to instantiate an object of this class Mailer, the constructor must receive
    two arguments:  1) an object with props of 'subject' and 'recipients', and
    2) a string of HTML that will be rendered as the email body
*/
  constructor({ subject, recipients }, content) {
    super();

    const htmlContent = new helper.Content("text/html", content);

    this.subject = subject;
    this.recipients = this.formatAddresses(recipients); //recipients are the array from Survey data model
    this.body = this.addContent(htmlContent)
    this.from_email = new helper.Email("no-reply@surveyme.com");

    //add sendgrid click tracking on links inside email...as per sendgrid docs
    this.addClickTracking();
    this.addRecipients();

    //end constructor
  }

  //ES6 fat arrow not allowed natively by ES Lint without configuration of babelrc...
  formatAddresses(recipients) {
    return recipients.map(recip => {
      return new helper.Email(recip.email);
    });
  }

  addClickTracking(){
    const trackingSettings = new helper.TrackingSettings();
    const clickTracking = new helper.ClickTracking(true, true);

    trackingSettings.setClickTracking(clickTracking);
    this.addTrackingSettings(trackingSettings)
  }

  addRecipients(){
     const personalize = new helper.Personalization();
     
     this.recipients.forEach(recip => personalize.addTo(recip));

     this.addPersonalization(personalize)
      
  }
}

module.exports = Mailer;
