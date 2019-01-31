const mongoose = require("mongoose");
const { SurveyRecipientSchema}  = require  ('./SurveyRecipientSchema')
const { Schema } = mongoose;

const surveySchema = new Schema({
  title: String,
  body: String,
  subject: String,
  recipients: [SurveyRecipientSchema],
  yes: { type: Number, default: 0 },
  no: { type: Number, default: 0 }
});

mongoose.model("Surveys", surveySchema);
