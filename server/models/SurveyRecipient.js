const mongoose = require("mongoose");
const { Schema } = mongoose;


//this schema operates more to validate the kind of data we get from the "user" in respect
//of the target survey recipients.  It will not be used as a separate collection, but is
//purely a sub collection which belongs to the Survey Collection's documents

const SurveyRecipientSchema = new Schema({
  email: String,
  responded: { type: Boolean, default: false }
});

module.exports = SurveyRecipientSchema;