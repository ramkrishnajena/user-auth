const {
  SignupController,
  loginController,
} = require("../controller/UserController");

const express = require("express");
const router = express.Router();

router.post("/signup", SignupController);
router.post("/login", loginController);

module.exports = router;
