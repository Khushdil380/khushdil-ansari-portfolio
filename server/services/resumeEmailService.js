const nodemailer = require("nodemailer");

// Create transporter
const createTransporter = () => {
  if (!process.env.EMAIL_USER || !process.env.EMAIL_APP_PASSWORD) {
    console.error("Email configuration is missing - EMAIL_USER or EMAIL_APP_PASSWORD not set");
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

// Send resume request notification to admin
const sendResumeRequestNotification = async ({
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
          body { 
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; 
            line-height: 1.6; 
            color: #333; 
            margin: 0;
            padding: 0;
            background-color: #f4f4f4;
          }
          .container { 
            max-width: 600px; 
            margin: 20px auto; 
            background: white;
            border-radius: 12px;
            overflow: hidden;
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
          }
          .header { 
            background: linear-gradient(135deg, #0E1524 0%, #1a2332 100%);
            color: #BED600; 
            padding: 30px; 
            text-align: center;
          }
          .header h2 {
            margin: 0;
            font-size: 24px;
            font-weight: 600;
          }
          .content { 
            padding: 30px;
          }
          .field { 
            margin: 20px 0; 
            padding: 15px; 
            background: #f9f9f9; 
            border-left: 4px solid #E32227;
            border-radius: 4px;
          }
          .label { 
            font-weight: 600; 
            color: #E32227;
            display: block;
            margin-bottom: 8px;
            font-size: 14px;
            text-transform: uppercase;
            letter-spacing: 0.5px;
          }
          .value {
            color: #333;
            font-size: 16px;
            word-wrap: break-word;
          }
          .highlight { 
            background: #BED600; 
            color: #0E1524; 
            padding: 4px 12px; 
            border-radius: 6px; 
            font-weight: 600;
            display: inline-block;
          }
          .action-box {
            margin-top: 30px;
            padding: 20px;
            background: linear-gradient(135deg, #E3F2FD 0%, #BBDEFB 100%);
            border-radius: 8px;
            border: 2px solid #2196F3;
          }
          .action-box strong {
            color: #1565C0;
            font-size: 16px;
          }
          .email-link {
            color: #E32227;
            text-decoration: none;
            font-weight: 600;
          }
          .footer {
            padding: 20px;
            text-align: center;
            background: #f9f9f9;
            color: #666;
            font-size: 12px;
          }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h2>🎯 New Resume Request</h2>
          </div>
          <div class="content">
            <div class="field">
              <span class="label">Company Name</span>
              <span class="highlight">${companyName}</span>
            </div>
            
            <div class="field">
              <span class="label">Receiver Email</span>
              <div class="value">
                <a href="mailto:${receiverEmail}" class="email-link">${receiverEmail}</a>
              </div>
            </div>
            
            <div class="field">
              <span class="label">Position/Role Required</span>
              <div class="value">${requirement}</div>
            </div>
            
            ${
              description
                ? `
            <div class="field">
              <span class="label">Additional Details</span>
              <div class="value">${description.replace(/\n/g, "<br>")}</div>
            </div>
            `
                : ""
            }
            
            <div class="action-box">
              <strong>📧 Action Required:</strong><br>
              <p style="margin: 10px 0 0 0;">
                Please send your resume to 
                <a href="mailto:${receiverEmail}" class="email-link">${receiverEmail}</a>
              </p>
            </div>
          </div>
          
          <div class="footer">
            <p>This email was sent from your portfolio resume request system.</p>
            <p>Received on ${new Date().toLocaleString("en-US", {
              dateStyle: "full",
              timeStyle: "short",
            })}</p>
          </div>
        </div>
      </body>
      </html>
    `,
      replyTo: receiverEmail,
    };

    await transporter.sendMail(mailOptions);
    console.log(`Resume request email sent successfully for ${companyName}`);
  } catch (error) {
    console.error("Error sending resume request email:", error);
    throw error;
  }
};

module.exports = {
  sendResumeRequestNotification,
};
