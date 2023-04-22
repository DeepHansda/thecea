const express = require("express");
const { connection } = require("./db/connection");
const app = express();
const PORT = process.env.PORT || 3400;

// initializing database
connection();

app.get("/", (req, res) => {
  res.status(200).json({
    message: `Server Running on This Port ${PORT}.`,
  });
});


app.listen(PORT, () => console.log(`Server Running on This Port ${PORT}.`));
