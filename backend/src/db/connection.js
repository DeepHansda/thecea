const mongoose = require("mongoose");
const connection = () => {
  const mongoURI = "mongodb://localhost:27017/thecea";
  const options = {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    // useCreateIndex: true,
  };
  mongoose
    .connect(mongoURI, options)
    .then((res) => console.log("database connected!"))
    .catch((err) => {
      console.log(err);
    });
};

module.exports = { connection };
