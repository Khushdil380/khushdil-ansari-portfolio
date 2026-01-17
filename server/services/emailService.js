// @ts-nocheck

/**
 * EMAIL SERVICE - Centralized email handling for portfolio
 *
 * This service manages all email functionality using Nodemailer with Gmail SMTP.
 * Environment variables required: EMAIL_USER, EMAIL_APP_PASSWORD
 *
 * Functions:
 * 1. createTransporter() - Creates Gmail SMTP transporter
 * 2. sendThankYouEmail() - Sends confirmation to contact form users
 * 3. sendNotificationEmail() - Sends contact form data to admin
 * 4. sendResumeRequestEmail() - Sends resume request details to admin
 */

const nodemailer = require("nodemailer");
const {
  getWelcomeEmailTemplate,
} = require("../templates/emails/welcomeEmailTemplate");

// Create transporter
// Creates and configures Nodemailer transporter for Gmail SMTP
// Validates EMAIL_USER and EMAIL_APP_PASSWORD environment variables
// Returns: Configured transporter instance
const createTransporter = () => {
  if (!process.env.EMAIL_USER || !process.env.EMAIL_APP_PASSWORD) {
    throw new Error("Email configuration is missing");
  }

  return nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_APP_PASSWORD,
    },
  });
};

// Send thank you email to user
// CONTACT FORM: Sends confirmation email to user who submitted contact form
// Parameters: userEmail (string), userName (string)
// Sends to: User's email address
// Template: Uses welcomeEmailTemplate.js with portfolio branding
// Called from: /api/contact route
const sendThankYouEmail = async (userEmail, userName) => {
  try {
    const transporter = createTransporter();

    const mailOptions = {
      from: {
        name: "Khushdil Ansari - Portfolio",
        address: process.env.EMAIL_USER,
      },
      to: userEmail,
      subject: "Thank You for Reaching Out! - Khushdil Ansari",
      html: getWelcomeEmailTemplate(userName),
    };

    await transporter.sendMail(mailOptions);
  } catch (error) {
    throw error;
  }
};

// Send notification email to admin
// CONTACT FORM: Notifies admin of new contact form submission
// Parameters: { fullName, email, title, message }
// Sends to: EMAIL_USER (admin's email)
// Format: HTML email with styled template (colors: #0E1524, #BED600, #E32227)
// Reply-To: User's email (allows direct reply from admin's email client)
// Called from: /api/contact route
const sendNotificationEmail = async ({ fullName, email, title, message }) => {
  try {
    const transporter = createTransporter();

    const mailOptions = {
      from: {
        name: "Portfolio Contact Form",
        address: process.env.EMAIL_USER,
      },
      to: process.env.EMAIL_USER,
      subject: `New Contact Form Submission: ${title}`,
      html: `
      <!DOCTYPE html>
      <html>
      <head>
        <style>
          body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
          .container { max-width: 600px; margin: 0 auto; padding: 20px; }
          .header { background: #0E1524; color: #BED600; padding: 20px; border-radius: 10px 10px 0 0; }
          .content { background: #f9f9f9; padding: 30px; border-radius: 0 0 10px 10px; }
          .field { margin: 15px 0; padding: 10px; background: white; border-left: 4px solid #E32227; }
          .label { font-weight: bold; color: #E32227; }
          h2 { margin: 0; }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h2>New Contact Form Submission</h2>
          </div>
          <div class="content">
            <div class="field">
              <span class="label">From:</span> ${fullName}
            </div>
            <div class="field">
              <span class="label">Email:</span> ${email}
            </div>
            <div class="field">
              <span class="label">Title:</span> ${title}
            </div>
            <div class="field">
              <span class="label">Message:</span><br>
              ${message.replace(/\n/g, "<br>")}
            </div>
          </div>
        </div>
      </body>
      </html>
    `,
      replyTo: email,
    };

    await transporter.sendMail(mailOptions);
  } catch (error) {
    throw error;
  }
};

// ===== RESUME REQUEST EMAIL =====
// Send resume request notification to admin
// RESUME REQUEST: Notifies admin when recruiter/company requests resume
// Parameters: { companyName, receiverEmail, requirement, description }
// Sends to: EMAIL_USER (admin's email)
// Format: HTML email with company highlight and action reminder
// Reply-To: receiverEmail (company's email)
// IMPORTANT: Called WITHOUT await in /api/resume-request (fire-and-forget pattern)
// This allows instant user response while email sends in background
const sendResumeRequestEmail = async ({
  companyName,
  receiverEmail,
  requirement,
  description,
}) => {
  try {
    const transporter = createTransporter();

    const mailOptions = {
      from: {
        name: "Portfolio Resume Request",
        address: process.env.EMAIL_USER,
      },
      to: process.env.EMAIL_USER,
      subject: `🎯 Resume Request from ${companyName}`,
      html: `
      <!DOCTYPE html>
      <html>
      <head>
        <style>
          body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
          .container { max-width: 600px; margin: 0 auto; padding: 20px; }
          .header { background: #0E1524; color: #BED600; padding: 20px; border-radius: 10px 10px 0 0; }
          .content { background: #f9f9f9; padding: 30px; border-radius: 0 0 10px 10px; }
          .field { margin: 15px 0; padding: 10px; background: white; border-left: 4px solid #E32227; }
          .label { font-weight: bold; color: #E32227; }
          .highlight { background: #BED600; color: #0E1524; padding: 4px 8px; border-radius: 4px; }
          h2 { margin: 0; }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h2>🎯 New Resume Request</h2>
          </div>
          <div class="content">
            <div class="field">
              <span class="label">Company Name:</span> <span class="highlight">${companyName}</span>
            </div>
            <div class="field">
              <span class="label">Receiver Email:</span> ${receiverEmail}
            </div>
            <div class="field">
              <span class="label">Position/Role:</span> ${requirement}
            </div>
            ${
              description
                ? `<div class="field"><span class="label">Details:</span><br>${description.replace(/\n/g, "<br>")}</div>`
                : ""
            }
            <div class="field" style="background: #E3F2FD; border-left-color: #2196F3;">
              <strong>📧 Action Required:</strong> Send your resume to ${receiverEmail}
            </div>
          </div>
        </div>
      </body>
      </html>
    `,
      replyTo: receiverEmail,
    };

    await transporter.sendMail(mailOptions);
  } catch (error) {
    throw error;
  }
};

// Export all email service functions
// Usage: const emailService = require('../services/emailService');
// Contact form: await emailService.sendThankYouEmail() and await emailService.sendNotificationEmail()
// Resume request: emailService.sendResumeRequestEmail().catch() - fire-and-forget pattern
module.exports = {
  sendThankYouEmail,
  sendNotificationEmail,
  sendResumeRequestEmail,
};
