const express = require("express");
const CONFIG = require('./secret.js')
const mongoose = require('mongoose')

//WIRE UP MONGOOSE
require('./models/User.js')
mongoose.connect(CONFIG.mongoURI);

//load the passport config
require("./services/passportConfig.js");


//SET UP SERVER
const app = express();
const PORT = process.env.PORT || 5000;

//load the exported routing middleware functions AND immediately invoke
require('./routes/index.js')(app)
require('./routes/authRoutes.js')(app)


app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}!`);
});
