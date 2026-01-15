// @ts-nocheck
const nodemailer = require("nodemailer");
const {
  getWelcomeEmailTemplate,
} = require("../templates/emails/welcomeEmailTemplate");

// Create transporter
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

module.exports = {
  sendThankYouEmail,
  sendNotificationEmail,
};
