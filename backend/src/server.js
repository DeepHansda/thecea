const express = require("express");
const cors = require("cors");
const { connection } = require("./db/connection");
const app = express();
const PORT = process.env.PORT || 3400;
const bookRouter = require("../src/routes/book.routes");
const uesrRouter = require("../src/routes/user.routes");
const cookieParser = require("cookie-parser");
require("dotenv").config();

// initializing database
connection();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(
  cors({
    credentials: true,
    "Access-Control-Allow-Headers":
      "Origin X-Requested-With, X-HTTP-Method-Override, Content-Type, Accept",
    "Access-Control-Allow-Credentials": true,
  })
);
app.use("/api", bookRouter, uesrRouter);

app.get("/", (req, res) => {
  res.status(200).json({
    message: `Server Running on This Port ${PORT}.`,
  });
});

app.listen(PORT, () => console.log(`Server Running on This Port ${PORT}.`));
