const helper = require("@sendgrid/helpers").classes;
const sendgrid = require("sendgrid");
const helper2 = sendgrid.mail;
const { sendGridKey } = require("../config/secrets");

// designed to work for things other than just surveys

const SELECTED_HELPER = helper2;

class Mailer extends SELECTED_HELPER.Mail {
  /*
    to instantiate an object of this class Mailer, the constructor must receive
    two arguments:  1) an object with props of 'subject' and 'recipients', and
    2) a string of HTML that will be rendered as the email body
*/
  constructor({ subject, recipients }, content) {
    super();

    this.sgApi = sendgrid(sendGridKey);
    this.subject = subject;
    this.recipients = this.formatAddresses(recipients); //recipients are the array from Survey data model
    this.body = new SELECTED_HELPER.Content("text/html", content);
    this.from_email = new SELECTED_HELPER.Email("no-reply@surveyme.com");

    //add sendgrid click tracking on links inside email...as per sendgrid docs
    this.addContent(this.body);
    this.addClickTracking();
    this.addRecipients();

    //end constructor
  }

  //ES6 fat arrow not allowed natively by ES Lint without configuration of babelrc...
  formatAddresses(recipients) {
    return recipients.map(recip => {
      return new SELECTED_HELPER.Email(recip.email);
    });
  }

  addClickTracking() {
    const trackingSettings = new SELECTED_HELPER.TrackingSettings();
    const clickTracking = new SELECTED_HELPER.ClickTracking(true, true);

    trackingSettings.setClickTracking(clickTracking);
    this.addTrackingSettings(trackingSettings);
  }

  addRecipients() {
    const personalize = new helper.Personalization();
    this.recipients.forEach(recipient => {
      personalize.addTo(recipient);
    });
    this.addPersonalization(personalize);
  }

  async send() {
    //configure
    const request = this.sgApi.emptyRequest({
      method: "POST",
      path: "v3/mail/send",
      body: this.toJSON()
    });
    //send to sendgrid
    const response = this.sgApi.API(request);
    //return response as promise
    return response;
  }
}

module.exports = Mailer;
