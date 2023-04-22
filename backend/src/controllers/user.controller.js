const UserModel = require("../db/models/user.model");
const { tokenHandler } = require("../utils/tokenHandler");

module.exports = {
  signUp: async (req, res) => {
    try {
      const { fullName, email, password } = req.body;
      if (!email || !password) {
        res.status(404).json({
          status: 0,
          message: "Please Enter Email and Password Both.",
        });
      }

      const _user = new UserModel({
        fullName,
        email,
        password,
      });

      await _user.save((error, user) => {
        if (error) {
          console.log(error);
          res.status(404).json({
            status: 0,
            message: error.message,
          });
        }
        tokenHandler(res, 200, user);
      });
    } catch (error) {
      console.log(error);
      res.status(404).json({
        status: 0,
        message: error.message,
      });
    }
  },
  signIn: async (req, res) => {
    try {
      const { email, password } = req.body;
      if (!email || !password) {
        res.status(404).json({
          status: 0,
          message: "Please Enter Email and Password Both.",
        });
      }

      await UserModel.findOne({ email }).exec((err, user) => {
        if (err) {
          res.status(404).json({
            status: 0,
            message: err.message,
          });
        }
        if (!user) {
          res.status(404).json({
            status: 0,
            message: "User Doesn't Exist, Please SignUp.",
          });
        }
        tokenHandler(res, 200, user);
      });
    } catch (error) {
      console.log(error);
      res.status(404).json({
        status: 0,
        message: error.message,
      });
    }
  },

  getUser: async (req, res) => {
    try {
      const { id } = req.params;
      await UserModel.findById({ _id: id }).exec((err, result) => {
        if (err) {
          console.log(err);
          res.status(404).json({
            status: 0,
            message: err.message,
          });
        }
        res.status(200).json({
          status: 1,
          result,
        });
      });
    } catch (error) {
      console.log(error);
    }
  },
  updateUser: async (req, res) => {
    try {
    } catch (error) {
      console.log(error);
    }
  },
};
