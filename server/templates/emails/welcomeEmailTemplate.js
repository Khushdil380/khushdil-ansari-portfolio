const { emailData } = require("./emailData");

// Common styles
const commonImgStyle =
  "color-scheme: light only !important; filter: none !important; -webkit-filter: none !important; background-color: transparent !important;";
const iconWrapper = (imageName, alt, width) =>
  `<div class="icon-fix" style="background-color: transparent; padding: 3px; display: inline-block;"><img src="${emailData.baseImageUrl}/${imageName}" alt="${alt}" width="${width}" style="width:100%; max-width:${width}px; ${commonImgStyle}" /></div>`;

const getWelcomeEmailTemplate = (userName) => {
  const {
    baseImageUrl,
    personal,
    services,
    stats,
    navigation,
    social,
    footer,
  } = emailData;

  const serviceRow = (idx) => {
    const serviceImages = [
      "fullstack-dev.gif",
      "android-dev.gif",
      "uiux-dev.gif",
      "machine-learning.gif",
      "teaching.gif",
    ];
    return `
    <tr>
      <td style="background-color:#000a1b; padding:12px 20px;">
        <table width="100%" cellpadding="0" cellspacing="0" border="0">
          <tr>
            <td width="23%" style="vertical-align:top; padding-right:10px;">
              ${iconWrapper(serviceImages[idx], services[idx].name, 104)}
            </td>
            <td width="77%" style="vertical-align:top;">
              <h4 style="margin:0 0 8px 0; color:#bed600; font-size:16px; font-weight:700;">${
                services[idx].name
              }</h4>
              <p style="margin:0; color:#ffffff; font-size:13px; line-height:1.5;">${
                services[idx].description
              }</p>
            </td>
          </tr>
        </table>
      </td>
    </tr>`;
  };

  const navRow = (item, idx) => {
    const navImages = [
      "nav-projects.png",
      "nav-skills.png",
      "nav-education.png",
      "nav-services.png",
      "nav-blog.png",
    ];
    return `
    <tr>
      <td style="background-color:#000a1b; padding:15px 20px;">
        <table width="100%" cellpadding="0" cellspacing="0" border="0">
          <tr>
            <td width="50" style="vertical-align:middle; text-align:center; padding-right:12px;">
              ${iconWrapper(navImages[idx], item.label, 40)}
            </td>
            <td width="100" style="vertical-align:middle; padding-right:15px;">
              <a href="${
                item.url
              }" style="display:inline-block; background-color:#ff0000; color:#ffffff; padding:10px 18px; text-decoration:none; border-radius:25px; font-size:12px; font-weight:700; text-align:center; min-width:80px;">${
      item.label
    }</a>
            </td>
            <td style="vertical-align:middle; padding-left:5px;">
              <p style="margin:0; color:#ffffff; font-size:13px; line-height:1.4;">${
                item.description
              }</p>
            </td>
          </tr>
        </table>
      </td>
    </tr>`;
  };

  const socialIcon = (idx, width) => {
    const socialImages = [
      "social-github.png",
      "social-linkedin.png",
      "social-medium.png",
      "social-quora.png",
      "social-x.png",
      "social-whatsapp.png",
    ];
    return `<a href="${
      social[idx].url
    }" target="_blank" style="display:inline-block; text-decoration:none; margin:0 8px;">${iconWrapper(
      socialImages[idx],
      social[idx].name,
      width
    )}</a>`;
  };

  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta name="color-scheme" content="light only">
  <meta name="supported-color-schemes" content="light">
  <title>Thank You - ${personal.name}</title>
  <style>
    body,table,td,a{-webkit-text-size-adjust:100%;-ms-text-size-adjust:100%}
    table,td{mso-table-lspace:0pt;mso-table-rspace:0pt}
    img{-ms-interpolation-mode:bicubic;border:0;display:block;height:auto;line-height:100%;outline:none;text-decoration:none;max-width:100%}
    body{margin:0!important;padding:0!important;width:100%!important}
    [data-ogsc] img,[data-ogsb] img,[data-outlook-cycle] img{filter:none!important;opacity:1!important}
    .icon-fix{background-color:transparent!important;display:inline-block!important}
    @media (prefers-color-scheme:dark){
      img{filter:none!important;opacity:1!important;-webkit-filter:none!important}
      .icon-fix{background-color:#000a1b!important}
    }
    @media only screen and (max-width:600px){
      .container{width:100%!important}
      .content-block{padding:10px!important}
    }
  </style>
</head>
<body style="margin:0;padding:0;background-color:#f0f1f5;font-family:Arial,Helvetica,sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" border="0" style="background-color:#f0f1f5;">
    <tr>
      <td align="center" style="padding:10px;">
        <table class="container" width="600" cellpadding="0" cellspacing="0" border="0" style="max-width:600px;background-color:#2b373f;margin:0 auto;">
          
          <!-- Hero -->
          <tr>
            <td style="background-color:#000a1b;padding:20px;text-align:center;">
              <img src="${baseImageUrl}/heart.gif" alt="Heart" width="220" style="width:220px;margin:0 auto;" />
              <p style="margin:10px 0 0;color:#fff;font-size:13px;">Hooray! You have noticed my portfolio 🤗</p>
            </td>
          </tr>

          <!-- Thank You -->
          <tr>
            <td style="background-color:#c9d9f0;padding:0;">
              <table width="100%" cellpadding="0" cellspacing="0" border="0">
                <tr>
                  <td width="27%" style="padding:10px;vertical-align:middle;">
                    <img src="${baseImageUrl}/messaging.gif" alt="Message" width="114" style="width:100%;max-width:114px;margin:0 auto;" />
                  </td>
                  <td width="73%" style="padding:10px;vertical-align:middle;text-align:center;">
                    <h1 style="margin:0 0 8px;color:#ff0000;font-size:36px;font-weight:700;">Thank You</h1>
                    <p style="margin:0;color:#000;font-size:12px;">Your Message has been reached to me</p>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- Profile -->
          <tr>
            <td style="background-color:#000a1b;padding:20px;text-align:center;">
              <img src="${baseImageUrl}/profile.png" alt="Profile" width="209" style="width:209px;margin:0 auto 15px;border-radius:50%;" />
              <h2 style="margin:0 0 8px;color:#bed600;font-size:26px;font-weight:700;">${
                personal.name
              }</h2>
              <p style="margin:0;color:#fff;font-size:13px;">${
                personal.title
              }</p>
            </td>
          </tr>

          <!-- Quote -->
          <tr>
            <td style="padding:0 20px;">
              <table width="100%" cellpadding="0" cellspacing="0" border="0" style="background-color:#e0efff;border-radius:10px;">
                <tr>
                  <td width="10%" style="padding:8px;vertical-align:top;">
                    <img src="${baseImageUrl}/quote-start.png" alt="" width="28" style="width:100%;max-width:28px;" />
                  </td>
                  <td width="80%" style="padding:10px 0;text-align:center;">
                    <p style="margin:0;color:#1854d7;font-size:13px;font-weight:700;">${
                      personal.quote
                    }</p>
                  </td>
                  <td width="10%" style="padding:8px;vertical-align:bottom;text-align:right;">
                    <img src="${baseImageUrl}/quote-end.png" alt="" width="28" style="width:100%;max-width:28px;" />
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <tr><td style="padding:15px 20px;"><div style="height:1px;background-color:#bfc3c8;"></div></td></tr>

          <!-- Message -->
          <tr><td style="padding:0 20px 10px;"><h3 style="margin:0;color:#fff;font-size:20px;">💬 My Message</h3></td></tr>
          <tr>
            <td style="background-color:#e0efff;padding:20px;">
              <img src="${baseImageUrl}/hello.gif" alt="Hello" width="212" style="width:212px;max-width:100%;margin:0 auto 15px;" />
              <h4 style="margin:0 0 12px;color:#000;font-size:18px;">Hello ${userName} 👋</h4>
              <p style="margin:0 0 12px;color:#000;font-size:16px;font-weight:700;">Thank you for reaching out through my portfolio. I truly appreciate your interest! Your message has been received, and I will get back to you within <span style="color:#ff0000;">${
                personal.responseTime
              }</span>.</p>
              <p style="margin:0;color:#000;font-size:16px;font-weight:700;">Feel free to explore my work and connect with me. I'm always excited to discuss new opportunities and collaborations!</p>
            </td>
          </tr>

          <tr><td style="padding:15px 20px;"><div style="height:1px;background-color:#bfc3c8;"></div></td></tr>

          <!-- Services -->
          <tr><td style="padding:0 20px 10px;"><h3 style="margin:0;color:#fff;font-size:22px;">👜 What I Offer</h3></td></tr>
          ${services.map((_, idx) => serviceRow(idx)).join("")}

          <!-- Stats -->
          <tr>
            <td style="padding:15px 20px;">
              <table width="100%" cellpadding="0" cellspacing="0" border="0">
                <tr>
                  <td width="50%" style="padding:3px;">
                    <table width="100%" cellpadding="0" cellspacing="0" border="0" style="background-color:#e0efff;border:2px solid #dbdbdb;padding:15px;text-align:center;">
                      <tr><td><h2 style="margin:0 0 8px;color:#ff0000;font-size:28px;">${
                        stats.projectsCompleted
                      }</h2><p style="margin:0;color:#000;font-size:13px;">Completed Projects</p></td></tr>
                    </table>
                  </td>
                  <td width="50%" style="padding:3px;">
                    <table width="100%" cellpadding="0" cellspacing="0" border="0" style="background-color:#e0efff;border:2px solid #dbdbdb;padding:15px;text-align:center;">
                      <tr><td><h2 style="margin:0 0 8px;color:#ff0000;font-size:28px;">${
                        stats.yearsExperience
                      }</h2><p style="margin:0;color:#000;font-size:13px;">Years Experience</p></td></tr>
                    </table>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <tr><td style="padding:15px 20px;"><div style="height:1px;background-color:#bfc3c8;"></div></td></tr>

          <!-- Navigation -->
          <tr><td style="padding:0 20px 10px;"><h3 style="margin:0;color:#fff;font-size:20px;">🔎 Explore My Work</h3></td></tr>
          ${navigation.map((item, idx) => navRow(item, idx)).join("")}

          <!-- Portfolio Button -->
          <tr>
            <td style="background-color:#000a1b;padding:15px 20px;text-align:center;">
              <a href="${
                personal.portfolioUrl
              }" target="_blank" style="display:inline-block;text-decoration:none;">
                <img src="${baseImageUrl}/portfolio-button.gif" alt="Portfolio" width="213" style="width:213px;max-width:100%;margin:0 auto;" />
              </a>
            </td>
          </tr>

          <tr><td style="padding:15px 20px;"><div style="height:1px;background-color:#bfc3c8;"></div></td></tr>

          <!-- Social -->
          <tr><td style="padding:0 20px 10px;"><h3 style="margin:0;color:#fff;font-size:20px;">📢 Connect with me</h3></td></tr>
          <tr>
            <td style="background-color:#ff0000;padding:20px;text-align:center;">
              <h3 style="margin:0 0 8px;color:#fff;font-size:22px;">Let's Connect</h3>
              <p style="margin:0 0 15px;color:#fff;font-size:13px;">Follow me for updates and insights</p>
              <div style="text-align:center; max-width:500px; margin:0 auto;">
                ${socialIcon(0, 32)}
                ${socialIcon(1, 32)}
                ${socialIcon(2, 32)}
                ${socialIcon(3, 32)}
                ${socialIcon(4, 32)}
                ${socialIcon(5, 32)}
              </div>
            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="background-color:#000;padding:20px;text-align:center;">
              <h4 style="margin:0 0 5px;color:#fff;font-size:14px;">${
                footer.title
              }</h4>
              <p style="margin:0 0 12px;color:#fff;font-size:13px;">${
                footer.subtitle
              }</p>
              <p style="margin:0 0 12px;color:#fff;font-size:12px;">${
                footer.disclaimer
              }</p>
              <p style="margin:0;color:#fff;font-size:12px;">${
                footer.copyright
              }</p>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>
</body>
</html>`;
};

module.exports = { getWelcomeEmailTemplate };
