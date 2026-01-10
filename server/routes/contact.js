const express = require("express");
const { body, validationResult } = require("express-validator");
const emailService = require("../services/emailService");

const router = express.Router();

// Validation rules
const contactValidation = [
  body("fullName")
    .trim()
    .notEmpty()
    .withMessage("Full name is required")
    .isLength({ min: 2, max: 100 })
    .withMessage("Name must be between 2 and 100 characters"),
  body("email")
    .trim()
    .notEmpty()
    .withMessage("Email is required")
    .isEmail()
    .withMessage("Please provide a valid email address")
    .normalizeEmail(),
  body("title")
    .trim()
    .notEmpty()
    .withMessage("Title is required")
    .isLength({ min: 3, max: 200 })
    .withMessage("Title must be between 3 and 200 characters"),
  body("message")
    .trim()
    .notEmpty()
    .withMessage("Message is required")
    .isLength({ min: 10, max: 1000 })
    .withMessage("Message must be between 10 and 1000 characters"),
];

// POST /api/contact/send
router.post("/send", contactValidation, async (req, res) => {
  try {
    // Check for validation errors
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({
        success: false,
        message: "Validation failed",
        errors: errors.array(),
      });
    }

    const { fullName, email, title, message } = req.body;

    // Send response immediately for better UX
    res.status(200).json({
      success: true,
      message:
        "Your message has been successfully submitted! If you entered a correct email address, you will receive a confirmation email shortly. Check your email now.",
    });

    // Send emails asynchronously in the background
    Promise.all([
      emailService.sendThankYouEmail(email, fullName),
      emailService.sendNotificationEmail({ fullName, email, title, message }),
    ]).catch((error) => {
      console.error("Email sending error:", error);
      // Emails failed but user already got success response
    });
  } catch (error) {
    console.error("Contact form error:", error);
    res.status(500).json({
      success: false,
      message: "Failed to submit message. Please try again later.",
    });
  }
});

module.exports = router;
