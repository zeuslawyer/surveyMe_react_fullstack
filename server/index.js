const express = require("express");
const CONFIG = require("./secret.js");
const mongoose = require("mongoose");
const cookieSession = require("cookie-session");
const passport = require("passport");

//WIRE UP MONGOOSE
require("./models/User.js");
mongoose.connect(CONFIG.mongoURI);

//load the passport config
require("./services/passportConfig.js");

//SET UP SERVER
const app = express();
const PORT = process.env.PORT || 5000;

// configure express app to use cookies with passport..
cookieConfig = {
  maxAge: 30 * 24 * 60 * 60 * 1000, // 30 days in ms
  keys: [CONFIG.cookieKey]
};
app.use(cookieSession(cookieConfig));
app.use(passport.initialize());
app.use(passport.session());

//Mount the routes    - by loading the exported routing middleware functions AND immediately invoking them
require("./routes/index.js")(app);
require("./routes/authRoutes.js")(app);

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}!`);
});
