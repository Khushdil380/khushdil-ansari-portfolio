const nodemailer = require("nodemailer");

// Create transporter
const createTransporter = () => {
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
  const transporter = createTransporter();

  const mailOptions = {
    from: {
      name: "Portfolio",
      address: process.env.EMAIL_USER,
    },
    to: userEmail,
    subject: "Thank You for Contacting Us!",
    html: `
      <!DOCTYPE html>
      <html>
      <head>
        <style>
          body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
          .container { max-width: 600px; margin: 0 auto; padding: 20px; }
          .header { background: linear-gradient(135deg, #E32227 0%, #ff4444 100%); color: white; padding: 30px; text-align: center; border-radius: 10px 10px 0 0; }
          .content { background: #f9f9f9; padding: 30px; border-radius: 0 0 10px 10px; }
          .footer { text-align: center; margin-top: 20px; font-size: 12px; color: #666; }
          h1 { margin: 0; font-size: 24px; }
          p { margin: 15px 0; }
          .highlight { color: #E32227; font-weight: bold; }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h1>Thank You for Reaching Out!</h1>
          </div>
          <div class="content">
            <p>Dear <span class="highlight">${userName}</span>,</p>
            <p>Thank you for contacting us! We have received your message and appreciate you taking the time to reach out.</p>
            <p>We will review your inquiry and get back to you as soon as possible, typically within 24-48 hours.</p>
            <p>If your matter is urgent, please feel free to reach out to us directly.</p>
            <p>Best regards,<br><strong>Portfolio Team</strong></p>
          </div>
          <div class="footer">
            <p>This is an automated message. Please do not reply to this email.</p>
          </div>
        </div>
      </body>
      </html>
    `,
  };

  await transporter.sendMail(mailOptions);
};

// Send notification email to admin
const sendNotificationEmail = async ({ fullName, email, title, message }) => {
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
};

module.exports = {
  sendThankYouEmail,
  sendNotificationEmail,
};
