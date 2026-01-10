const { emailData } = require("./emailData");

const getImprovedWelcomeEmailTemplate = (userName) => {
  const { personal, services, stats, navigation, social, footer } = emailData;

  return `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <title>Thank You - ${personal.name}</title>
  <style>
    body, table, td, a { -webkit-text-size-adjust: 100%; -ms-text-size-adjust: 100%; }
    table, td { mso-table-lspace: 0pt; mso-table-rspace: 0pt; }
    img { -ms-interpolation-mode: bicubic; border: 0; height: auto; line-height: 100%; outline: none; text-decoration: none; }
    body { margin: 0 !important; padding: 0 !important; width: 100% !important; }
    
    @media only screen and (max-width: 600px) {
      .container { width: 100% !important; }
      .content-block { padding: 15px !important; }
      .heading { font-size: 20px !important; }
      .text { font-size: 14px !important; }
      .button { padding: 10px 20px !important; font-size: 12px !important; }
      .two-column { width: 100% !important; display: block !important; }
      .service-item { padding: 10px !important; }
    }
  </style>
</head>
<body style="margin:0; padding:0; background-color:#f0f1f5; font-family:Arial,Helvetica,sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" border="0" style="background-color:#f0f1f5;">
    <tr>
      <td align="center" style="padding:20px 10px;">
        
        <!-- Main Container -->
        <table class="container" width="600" cellpadding="0" cellspacing="0" border="0" style="max-width:600px; background-color:#2b373f; margin:0 auto;">
          
          <!-- Hero Section -->
          <tr>
            <td style="background-color:#000a1b; padding:30px 20px; text-align:center;">
              <div style="font-size:60px; line-height:1; margin-bottom:15px;">❤️</div>
              <p style="margin:0; color:#ffffff; font-size:14px; line-height:1.5;">
                Hooray! You have noticed my portfolio 🤗
              </p>
            </td>
          </tr>

          <!-- Thank You Section -->
          <tr>
            <td style="background-color:#c9d9f0; padding:25px 20px;">
              <table width="100%" cellpadding="0" cellspacing="0" border="0">
                <tr>
                  <td align="center">
                    <h1 style="margin:0 0 10px 0; color:#ff0000; font-size:36px; font-weight:700;">Thank You</h1>
                    <p style="margin:0; color:#000000; font-size:13px;">Your Message has been reached to me</p>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- Profile Section -->
          <tr>
            <td style="background-color:#000a1b; padding:30px 20px; text-align:center;">
              <div style="width:150px; height:150px; margin:0 auto 15px; background:linear-gradient(135deg, #ff0000, #E32227); border-radius:50%; display:flex; align-items:center; justify-content:center; color:#ffffff; font-size:48px; font-weight:700;">KA</div>
              <h2 style="margin:0 0 10px 0; color:#bed600; font-size:24px; font-weight:700; letter-spacing:1px;">${
                personal.name
              }</h2>
              <p style="margin:0; color:#ffffff; font-size:14px;">${
                personal.title
              }</p>
            </td>
          </tr>

          <!-- Quote Section -->
          <tr>
            <td style="background-color:#e0efff; padding:20px; text-align:center; border-radius:10px; margin:0;">
              <p style="margin:0; color:#1854d7; font-size:14px; font-weight:700; font-style:italic; line-height:1.6;">
                "${personal.quote}"
              </p>
            </td>
          </tr>

          <!-- Divider -->
          <tr>
            <td style="padding:20px; background-color:#2b373f;">
              <div style="height:1px; background-color:#bfc3c8; margin:0;"></div>
            </td>
          </tr>

          <!-- Message Section -->
          <tr>
            <td style="background-color:#2b373f; padding:0 20px;">
              <h3 style="margin:0 0 15px 0; color:#ffffff; font-size:20px; font-weight:700;">💬 My Message</h3>
            </td>
          </tr>

          <tr>
            <td style="background-color:#e0efff; padding:25px 20px; margin:0;">
              <h4 style="margin:0 0 15px 0; color:#000000; font-size:18px; font-weight:700;">Hello ${userName} 👋</h4>
              <p style="margin:0 0 15px 0; color:#000000; font-size:16px; font-weight:700; line-height:1.6;">
                Thank you for reaching out through my portfolio. I truly appreciate your interest! Your message has been received, and I will get back to you within <span style="color:#ff0000;">${
                  personal.responseTime
                }</span>.
              </p>
              <p style="margin:0; color:#000000; font-size:16px; font-weight:700; line-height:1.6;">
                Feel free to explore my work and connect with me. I'm always excited to discuss new opportunities and collaborations!
              </p>
            </td>
          </tr>

          <!-- Divider -->
          <tr>
            <td style="padding:20px; background-color:#2b373f;">
              <div style="height:1px; background-color:#bfc3c8; margin:0;"></div>
            </td>
          </tr>

          <!-- What I Offer Section -->
          <tr>
            <td style="background-color:#2b373f; padding:0 20px 15px;">
              <h3 style="margin:0; color:#ffffff; font-size:22px; font-weight:700;">👜 What I Offer</h3>
            </td>
          </tr>

          ${services
            .map(
              (service, index) => `
          <tr>
            <td style="background-color:#000a1b; padding:15px 20px; ${
              index === services.length - 1 ? "border-bottom:none;" : ""
            }">
              <table width="100%" cellpadding="0" cellspacing="0" border="0">
                <tr>
                  <td width="60" style="vertical-align:top; padding-right:15px;">
                    <div style="font-size:40px; line-height:1;">${
                      service.icon
                    }</div>
                  </td>
                  <td style="vertical-align:top;">
                    <h4 style="margin:0 0 8px 0; color:#bed600; font-size:16px; font-weight:700;">${
                      service.name
                    }</h4>
                    <p style="margin:0; color:#ffffff; font-size:13px; line-height:1.5;">${
                      service.description
                    }</p>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
          `
            )
            .join("")}

          <!-- Stats Section -->
          <tr>
            <td style="padding:20px; background-color:#2b373f;">
              <table width="100%" cellpadding="0" cellspacing="0" border="0">
                <tr>
                  <td width="50%" style="padding:5px;">
                    <table width="100%" cellpadding="0" cellspacing="0" border="0" style="background-color:#e0efff; border:2px solid #dbdbdb; border-radius:5px; padding:20px; text-align:center;">
                      <tr>
                        <td>
                          <h2 style="margin:0 0 10px 0; color:#ff0000; font-size:28px; font-weight:700;">${
                            stats.projectsCompleted
                          }</h2>
                          <p style="margin:0; color:#000000; font-size:13px;">Project Completed</p>
                        </td>
                      </tr>
                    </table>
                  </td>
                  <td width="50%" style="padding:5px;">
                    <table width="100%" cellpadding="0" cellspacing="0" border="0" style="background-color:#e0efff; border:2px solid #dbdbdb; border-radius:5px; padding:20px; text-align:center;">
                      <tr>
                        <td>
                          <h2 style="margin:0 0 10px 0; color:#ff0000; font-size:28px; font-weight:700;">${
                            stats.yearsExperience
                          }</h2>
                          <p style="margin:0; color:#000000; font-size:13px;">Years Experience</p>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- Divider -->
          <tr>
            <td style="padding:20px; background-color:#2b373f;">
              <div style="height:1px; background-color:#bfc3c8; margin:0;"></div>
            </td>
          </tr>

          <!-- Explore My Work Section -->
          <tr>
            <td style="background-color:#2b373f; padding:0 20px 15px;">
              <h3 style="margin:0; color:#ffffff; font-size:20px; font-weight:700;">🔎 Explore My Work</h3>
            </td>
          </tr>

          ${navigation
            .map(
              (item, index) => `
          <tr>
            <td style="background-color:#000a1b; padding:15px 20px;">
              <table width="100%" cellpadding="0" cellspacing="0" border="0">
                <tr>
                  <td width="80" style="vertical-align:middle;">
                    <a href="${item.url}" style="display:inline-block; background-color:#ff0000; color:#ffffff; padding:10px 20px; text-decoration:none; border-radius:25px; font-size:12px; font-weight:700;">${item.label}</a>
                  </td>
                  <td style="vertical-align:middle; padding-left:15px;">
                    <p style="margin:0; color:#ffffff; font-size:13px;">${item.description}</p>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
          `
            )
            .join("")}

          <!-- Portfolio Button -->
          <tr>
            <td style="background-color:#000a1b; padding:20px; text-align:center;">
              <a href="${
                personal.portfolioUrl
              }" style="display:inline-block; background-color:#ff0000; color:#ffffff; padding:15px 40px; text-decoration:none; border-radius:5px; font-size:16px; font-weight:700;">Visit Portfolio</a>
            </td>
          </tr>

          <!-- Divider -->
          <tr>
            <td style="padding:20px; background-color:#2b373f;">
              <div style="height:1px; background-color:#bfc3c8; margin:0;"></div>
            </td>
          </tr>

          <!-- Connect Section -->
          <tr>
            <td style="background-color:#2b373f; padding:0 20px 15px;">
              <h3 style="margin:0; color:#ffffff; font-size:20px; font-weight:700;">📢 Connect with me</h3>
            </td>
          </tr>

          <tr>
            <td style="background-color:#ff0000; padding:25px 20px; text-align:center;">
              <h3 style="margin:0 0 10px 0; color:#ffffff; font-size:22px; font-weight:700;">Let's Connect</h3>
              <p style="margin:0 0 20px 0; color:#ffffff; font-size:13px;">Follow me for updates and insights</p>
              
              <table width="100%" cellpadding="0" cellspacing="0" border="0">
                <tr>
                  <td align="center">
                    ${social
                      .map(
                        (item) =>
                          `<span style="display:inline-block; font-size:32px; margin:0 10px;">${item.icon}</span>`
                      )
                      .join("")}
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="background-color:#000000; padding:25px 20px; text-align:center;">
              <h4 style="margin:0 0 5px 0; color:#ffffff; font-size:14px; font-weight:700;">${
                footer.title
              }</h4>
              <p style="margin:0 0 15px 0; color:#ffffff; font-size:13px;">${
                footer.subtitle
              }</p>
              <p style="margin:0 0 15px 0; color:#ffffff; font-size:12px; line-height:1.6;">${
                footer.disclaimer
              }</p>
              <p style="margin:0; color:#ffffff; font-size:12px;">${
                footer.copyright
              }</p>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>
</body>
</html>
  `;
};

module.exports = { getImprovedWelcomeEmailTemplate };
