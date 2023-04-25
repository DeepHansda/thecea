const tokenHandler = async (res, statusCode, user) => {
  const token = await user.getToken();
  const options = {
    expires: new Date(Date.now() + 48 * 60 * 60 * 1000),
    // httpOnly: true,
    // secure: true,
    // sameSite: "none",
  };

  res.cookie("token", token, options).status(statusCode).json({
    success: 1,
    message: "success",
    token,
    user,
  });
};
module.exports = { tokenHandler };
