const mongoose = require("mongoose");
const { Schema } = mongoose;

const SurveyRecipientSchema = new Schema({
  email: String,
  responded: { type: Boolean, default: false }
});

module.exports = SurveyRecipientSchema;