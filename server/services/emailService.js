const nodemailer = require("nodemailer");
const {
  getWelcomeEmailTemplate,
} = require("../templates/emails/welcomeEmailTemplate");
const { getEmailAttachments } = require("../templates/emails/emailAttachments");

// Create transporter
const createTransporter = () => {
  if (!process.env.EMAIL_USER || !process.env.EMAIL_APP_PASSWORD) {
    console.error("Missing email credentials in environment variables");
    throw new Error("Email configuration is missing");
  }

  console.log(`Creating transporter with user: ${process.env.EMAIL_USER}`);

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
    console.log(`Attempting to send thank you email to: ${userEmail}`);
    
    const transporter = createTransporter();
    const attachments = getEmailAttachments();
    
    console.log(`Number of attachments: ${attachments.length}`);

    const mailOptions = {
      from: {
        name: "Khushdil Ansari - Portfolio",
        address: process.env.EMAIL_USER,
      },
      to: userEmail,
      subject: "Thank You for Reaching Out! - Khushdil Ansari",
      html: getWelcomeEmailTemplate(userName),
      attachments: attachments,
    };

    const info = await transporter.sendMail(mailOptions);
    console.log(`Thank you email sent successfully to: ${userEmail}`, info.messageId);
    return info;
  } catch (error) {
    console.error("Error sending thank you email:", error.message || error);
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
    console.log(
      `Notification email sent successfully for submission from: ${email}`
    );
  } catch (error) {
    console.error("Error sending notification email:", error);
    throw error;
  }
};

module.exports = {
  sendThankYouEmail,
  sendNotificationEmail,
};
