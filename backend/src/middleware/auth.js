const jwt = require('jsonwebtoken');
const UserModel = require('../db/models/user.model');

const auth = async (req, res, next) => {
  try {
    const token = req.cookies.token;
    console.log(token)

    if (typeof token == undefined) {
      res.status(404).json({
        status: 0,
        message: "token not found.",
      });
      return
    }

    const decodedId = await jwt.verify(token, process.env.JWT_KEY);

    req.user = await UserModel.findById({ _id: decodedId.id });
    next();
  } catch (error) {
    console.log(error);
    res.status(404).json({
      status: 0,
      message: "something went wrong while login or try again",
      error: error.message,
    });
  }
};

module.exports = { auth };
