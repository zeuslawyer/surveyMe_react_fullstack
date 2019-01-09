const express = require("express");

//load the passport config
require("./services/passportConfig.js");

const app = express();
const PORT = process.env.PORT || 5000;

//load the exported routing middleware AND immediately invoke
require('./routes/index.js')(app)
require('./routes/authRoutes.js')(app)


app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}!`);
});
