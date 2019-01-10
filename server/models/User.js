const mongoose = require("mongoose");
const { Schema } = mongoose;

const userSchemaConfig = { strict: false };

const userSchema = new Schema(
  {
    googleID: String
  },
  userSchemaConfig
);

mongoose.model("users", userSchema);
