const express = require("express");
const router = express.Router();
const {
  loginAuthCustomer,
  registerCustomer,
  forgetAuthPassword,
  resetPassword,
} = require("../controller/customerAuthController");
// customer register page

router.post("/register", registerCustomer);
router.post("/login", loginAuthCustomer);
router.post("/forget-password", forgetAuthPassword);
router.post("/reset-password", resetPassword);

module.exports = router;
