const express = require("express");

const { signUp, signIn, getUser } = require("../controllers/user.controller");
const router = new express.Router();

router.post("/signUp", signUp);
router.post("/signIn", signIn);
router.get("/getUser/:id", getUser);

module.exports = router;
