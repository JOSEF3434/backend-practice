const express = require("express");
const { userCteate, login } = require("../controllers/userController");
const { body } = require("express-validator");

const router = express.Router();

router.post(
  "/register",
  body("email").isEmail().withMessage("Valid email is required"),
  body("password")
    .isString()
    .isLength({ min: 6 })
    .withMessage("Password must be at least 6 characters"),
  userCteate
);

router.post(
  "/login",
  body("email").isEmail().withMessage("Valid email is required"),
  body("password").isString().withMessage("Password is required"),
  login
);

module.exports = router;
