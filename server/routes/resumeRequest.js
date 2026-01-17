const express = require("express");
const { body, validationResult } = require("express-validator");
const resumeEmailService = require("../services/resumeEmailService");

const router = express.Router();

// Validation rules for resume request
const resumeRequestValidation = [
  body("companyName")
    .trim()
    .notEmpty()
    .withMessage("Company name is required")
    .isLength({ min: 2, max: 100 })
    .withMessage("Company name must be between 2 and 100 characters"),
  body("receiverEmail")
    .trim()
    .notEmpty()
    .withMessage("Receiver email is required")
    .isEmail()
    .withMessage("Please provide a valid email address")
    .normalizeEmail(),
  body("requirement")
    .trim()
    .notEmpty()
    .withMessage("Position/Role requirement is required")
    .isLength({ min: 3, max: 200 })
    .withMessage("Requirement must be between 3 and 200 characters"),
  body("description")
    .optional()
    .trim()
    .isLength({ max: 1000 })
    .withMessage("Description must not exceed 1000 characters"),
];

// POST /api/resume-request
router.post("/", resumeRequestValidation, async (req, res) => {
  // Check for validation errors
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({
      success: false,
      message: "Validation failed",
      errors: errors.array(),
    });
  }

  const { companyName, receiverEmail, requirement, description } = req.body;

  // Send success response immediately (no try-catch to block response)
  res.status(200).json({
    success: true,
    message: "Resume request submitted successfully!",
  });

  // Send email in background using setImmediate (true fire and forget)
  setImmediate(() => {
    resumeEmailService
      .sendResumeRequestNotification({
        companyName,
        receiverEmail,
        requirement,
        description,
      })
      .then(() => {
        console.log(`Resume request email sent successfully for ${companyName}`);
      })
      .catch((error) => {
        console.error("Failed to send resume request email:", error);
      });
  });
});

module.exports = router;
