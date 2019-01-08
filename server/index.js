const express = require("express");

const app = express();
const PORT = process.env.port || 5000

app.get("/", (req, res) => {
  res.send({ body: "Hi, there!" });
});

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}!`);
});
