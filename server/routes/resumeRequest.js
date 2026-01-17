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

// OPTIONS handler for CORS preflight
router.options("/", (req, res) => {
  res.status(200).end();
});

// POST /api/resume-request
router.post("/", resumeRequestValidation, async (req, res) => {
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

    const { companyName, receiverEmail, requirement, description } = req.body;

    // Send success response immediately
    res.status(200).json({
      success: true,
      message: "Resume request submitted successfully!",
    });

    // Send email in background (no await, fire and forget)
    resumeEmailService
      .sendResumeRequestNotification({
        companyName,
        receiverEmail,
        requirement,
        description,
      })
      .catch((error) => {
        console.error("Failed to send resume request email:", error);
      });
  } catch (error) {
    console.error("Resume request error:", error);
    res.status(500).json({
      success: false,
      message: "Failed to submit resume request. Please try again later.",
    });
  }
});

module.exports = router;
