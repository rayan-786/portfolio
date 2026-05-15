const express = require("express");

const router = express.Router();

const rateLimit = require("express-rate-limit");

const {
  submitContact,
} = require("../controllers/contactController");


// RATE LIMITER

const contactLimiter = rateLimit({

  windowMs: 15 * 60 * 1000,

  max: 5,
message:{
  message:
    "Too many contact requests, try again later",
    

  standardHeaders: true,
  legacyHeaders: false,
}
});


// ROUTE

router.post(
  "/contact",
  contactLimiter,
  submitContact
);

module.exports = router;