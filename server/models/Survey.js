const mongoose = require("mongoose");
const SurveyRecipientSchema = require("./SurveyRecipient");
const { Schema } = mongoose;

const surveySchema = new Schema({
  title: String,
  body: String,
  subject: String,
  recipients: [SurveyRecipientSchema],
  yes: { type: Number, default: 0 },
  no: { type: Number, default: 0 },
  // _user: { type: Schema.Types.ObjectId, ref: "user" },
  // dateSent: Date,
});

mongoose.model("surveys", surveySchema);
