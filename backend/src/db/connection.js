const mongoose = require("mongoose");
const connection = () => {
  const mongoURI = "mongodb://localhost:27017/thecea";
  const options = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    // useFindAndModify: false
  };
  mongoose
    .connect(mongoURI, options)
    .then((res) => console.log("database connected!"))
    .catch((err) => {
      console.log(err);
    });
};

module.exports = { connection };
