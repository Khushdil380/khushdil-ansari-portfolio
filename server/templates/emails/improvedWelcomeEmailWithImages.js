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
  <meta name="color-scheme" content="light only">
  <meta name="supported-color-schemes" content="light">
  <title>Thank You - ${personal.name}</title>
  <style>
    body, table, td, a { -webkit-text-size-adjust: 100%; -ms-text-size-adjust: 100%; }
    table, td { mso-table-lspace: 0pt; mso-table-rspace: 0pt; }
    img { 
      -ms-interpolation-mode: bicubic; 
      border: 0; 
      display: block; 
      height: auto; 
      line-height: 100%; 
      outline: none; 
      text-decoration: none; 
      max-width: 100%; 
    }
    body { margin: 0 !important; padding: 0 !important; width: 100% !important; }
    
    /* Prevent dark mode inversion */
    [data-ogsc] img,
    [data-ogsb] img {
      filter: none !important;
    }
    
    @media (prefers-color-scheme: dark) {
      img {
        filter: none !important;
        opacity: 1 !important;
      }
    }
    
    @media only screen and (max-width: 600px) {
      .container { width: 100% !important; }
      .content-block { padding: 10px !important; }
      .two-column { width: 100% !important; display: block !important; }
    }
  </style>
</head>
<body style="margin:0; padding:0; background-color:#f0f1f5; font-family:Arial,Helvetica,sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" border="0" style="background-color:#f0f1f5;">
    <tr>
      <td align="center" style="padding:10px;">
        
        <!-- Main Container -->
        <table class="container" width="600" cellpadding="0" cellspacing="0" border="0" style="max-width:600px; background-color:#2b373f; margin:0 auto;">
          
          <!-- Hero Section -->
          <tr>
            <td style="background-color:#000a1b; padding:20px; text-align:center;">
              <img src="cid:heart" alt="Heart" width="220" style="width:220px; margin:0 auto;" />
              <p style="margin:10px 0 0 0; color:#ffffff; font-size:13px; line-height:1.5;">
                Hooray! You have noticed my portfolio 🤗
              </p>
            </td>
          </tr>

          <!-- Thank You Section -->
          <tr>
            <td style="background-color:#c9d9f0; padding:0;">
              <table width="100%" cellpadding="0" cellspacing="0" border="0">
                <tr>
                  <td width="27%" style="padding:10px; vertical-align:middle;">
                    <img src="cid:message" alt="Message" width="114" style="width:100%; max-width:114px; margin:0 auto;" />
                  </td>
                  <td width="73%" style="padding:10px; vertical-align:middle; text-align:center;">
                    <h1 style="margin:0 0 8px 0; color:#ff0000; font-size:36px; font-weight:700; line-height:1;">Thank You</h1>
                    <p style="margin:0; color:#000000; font-size:12px;">Your Message has been reached to me</p>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- Profile Section -->
          <tr>
            <td style="background-color:#000a1b; padding:20px; text-align:center;">
              <img src="cid:profile" alt="Profile" width="209" style="width:209px; max-width:100%; margin:0 auto 15px; border-radius:50%;" />
              <h2 style="margin:0 0 8px 0; color:#bed600; font-size:26px; font-weight:700; letter-spacing:1px;">${
                personal.name
              }</h2>
              <p style="margin:0; color:#ffffff; font-size:13px;">${
                personal.title
              }</p>
            </td>
          </tr>

          <!-- Quote Section -->
          <tr>
            <td style="padding:0 20px;">
              <table width="100%" cellpadding="0" cellspacing="0" border="0" style="background-color:#e0efff; border-radius:10px;">
                <tr>
                  <td width="10%" style="padding:8px; vertical-align:top;">
                    <img src="cid:quotestart" alt="" width="28" style="width:100%; max-width:28px;" />
                  </td>
                  <td width="80%" style="padding:10px 0; vertical-align:middle; text-align:center;">
                    <p style="margin:0; color:#1854d7; font-size:13px; font-weight:700; line-height:1.5;">
                      ${personal.quote}
                    </p>
                  </td>
                  <td width="10%" style="padding:8px; vertical-align:bottom; text-align:right;">
                    <img src="cid:quoteend" alt="" width="28" style="width:100%; max-width:28px;" />
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- Divider -->
          <tr>
            <td style="padding:15px 20px;">
              <div style="height:1px; background-color:#bfc3c8;"></div>
            </td>
          </tr>

          <!-- Message Section -->
          <tr>
            <td style="padding:0 20px 10px;">
              <h3 style="margin:0; color:#ffffff; font-size:20px; font-weight:700;">💬 My Message</h3>
            </td>
          </tr>

          <tr>
            <td style="background-color:#e0efff; padding:20px; margin:0;">
              <img src="cid:hello" alt="Hello" width="212" style="width:212px; max-width:100%; margin:0 auto 15px;" />
              <h4 style="margin:0 0 12px 0; color:#000000; font-size:18px; font-weight:700;">Hello ${userName} 👋</h4>
              <p style="margin:0 0 12px 0; color:#000000; font-size:16px; font-weight:700; line-height:1.6;">
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
            <td style="padding:15px 20px;">
              <div style="height:1px; background-color:#bfc3c8;"></div>
            </td>
          </tr>

          <!-- What I Offer Section -->
          <tr>
            <td style="padding:0 20px 10px;">
              <h3 style="margin:0; color:#ffffff; font-size:22px; font-weight:700;">👜 What I Offer</h3>
            </td>
          </tr>

          <!-- Service: Full Stack Development -->
          <tr>
            <td style="background-color:#000a1b; padding:12px 20px;">
              <table width="100%" cellpadding="0" cellspacing="0" border="0">
                <tr>
                  <td width="23%" style="vertical-align:top; padding-right:10px;">
                    <img src="cid:service5" alt="Teaching" width="104" style="width:100%; max-width:104px; color-scheme: light only; filter: none !important;" />
                  </td>
                  <td width="77%" style="vertical-align:top;">
                    <h4 style="margin:0 0 8px 0; color:#bed600; font-size:16px; font-weight:700;">${
                      services[0].name
                    }</h4>
                    <p style="margin:0; color:#ffffff; font-size:13px; line-height:1.5;">${
                      services[0].description
                    }</p>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- Service: Android Development -->
          <tr>
            <td style="background-color:#000a1b; padding:12px 20px;">
              <table width="100%" cellpadding="0" cellspacing="0" border="0">
                <tr>
                  <td width="23%" style="vertical-align:top; padding-right:10px;">
                    <img src="cid:service4" alt="ML" width="104" style="width:100%; max-width:104px; color-scheme: light only; filter: none !important;" />
                  </td>
                  <td width="77%" style="vertical-align:top;">
                    <h4 style="margin:0 0 8px 0; color:#bed600; font-size:16px; font-weight:700;">${
                      services[1].name
                    }</h4>
                    <p style="margin:0; color:#ffffff; font-size:13px; line-height:1.5;">${
                      services[1].description
                    }</p>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- Service: UI/UX Development -->
          <tr>
            <td style="background-color:#000a1b; padding:12px 20px;">
              <table width="100%" cellpadding="0" cellspacing="0" border="0">
                <tr>
                  <td width="23%" style="vertical-align:top; padding-right:10px;">
                    <img src="cid:service3" alt="UI/UX" width="104" style="width:100%; max-width:104px; color-scheme: light only; filter: none !important;" />
                  </td>
                  <td width="77%" style="vertical-align:top;">
                    <h4 style="margin:0 0 8px 0; color:#bed600; font-size:16px; font-weight:700;">${
                      services[2].name
                    }</h4>
                    <p style="margin:0; color:#ffffff; font-size:13px; line-height:1.5;">${
                      services[2].description
                    }</p>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- Service: Machine Learning -->
          <tr>
            <td style="background-color:#000a1b; padding:12px 20px;">
              <table width="100%" cellpadding="0" cellspacing="0" border="0">
                <tr>
                  <td width="23%" style="vertical-align:top; padding-right:10px;">
                    <img src="cid:service2" alt="Web" width="104" style="width:100%; max-width:104px; color-scheme: light only; filter: none !important;" />
                  </td>
                  <td width="77%" style="vertical-align:top;">
                    <h4 style="margin:0 0 8px 0; color:#bed600; font-size:16px; font-weight:700;">${
                      services[3].name
                    }</h4>
                    <p style="margin:0; color:#ffffff; font-size:13px; line-height:1.5;">${
                      services[3].description
                    }</p>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- Service: Teaching -->
          <tr>
            <td style="background-color:#000a1b; padding:12px 20px;">
              <table width="100%" cellpadding="0" cellspacing="0" border="0">
                <tr>
                  <td width="23%" style="vertical-align:top; padding-right:10px;">
                    <img src="cid:service1" alt="Coding" width="104" style="width:100%; max-width:104px; color-scheme: light only; filter: none !important;" />
                  </td>
                  <td width="77%" style="vertical-align:top;">
                    <h4 style="margin:0 0 8px 0; color:#bed600; font-size:16px; font-weight:700;">${
                      services[4].name
                    }</h4>
                    <p style="margin:0; color:#ffffff; font-size:13px; line-height:1.5;">${
                      services[4].description
                    }</p>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- Stats Section -->
          <tr>
            <td style="padding:15px 20px;">
              <table width="100%" cellpadding="0" cellspacing="0" border="0">
                <tr>
                  <td width="50%" style="padding:3px;">
                    <table width="100%" cellpadding="0" cellspacing="0" border="0" style="background-color:#e0efff; border:2px solid #dbdbdb; padding:15px; text-align:center;">
                      <tr>
                        <td>
                          <h2 style="margin:0 0 8px 0; color:#ff0000; font-size:28px; font-weight:700;">50+</h2>
                          <p style="margin:0; color:#000000; font-size:13px;">Project Completed</p>
                        </td>
                      </tr>
                    </table>
                  </td>
                  <td width="50%" style="padding:3px;">
                    <table width="100%" cellpadding="0" cellspacing="0" border="0" style="background-color:#e0efff; border:2px solid #dbdbdb; padding:15px; text-align:center;">
                      <tr>
                        <td>
                          <h2 style="margin:0 0 8px 0; color:#ff0000; font-size:28px; font-weight:700;">3+</h2>
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
            <td style="padding:15px 20px;">
              <div style="height:1px; background-color:#bfc3c8;"></div>
            </td>
          </tr>

          <!-- Explore My Work Section -->
          <tr>
            <td style="padding:0 20px 10px;">
              <h3 style="margin:0; color:#ffffff; font-size:20px; font-weight:700;">🔎 Explore My Work</h3>
            </td>
          </tr>

          ${navigation
            .map(
              (item, idx) => `
          <tr>
            <td style="background-color:#000a1b; padding:12px 20px;">
              <table width="100%" cellpadding="0" cellspacing="0" border="0">
                <tr>
                  <td width="11%" style="vertical-align:middle; text-align:center;">
                    <img src="cid:nav${idx + 1}" alt="${
                item.label
              }" width="35" style="width:100%; max-width:40px; color-scheme: light only; filter: none !important;" />
                  </td>
                  <td width="16%" style="vertical-align:middle; padding:0 10px;">
                    <a href="${
                      item.url
                    }" style="display:inline-block; background-color:#ff0000; color:#ffffff; padding:8px 15px; text-decoration:none; border-radius:25px; font-size:12px; font-weight:700;">${
                item.label
              }</a>
                  </td>
                  <td width="73%" style="vertical-align:middle; padding-left:10px;">
                    <p style="margin:0; color:#ffffff; font-size:13px;">${
                      item.description
                    }</p>
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
            <td style="background-color:#000a1b; padding:15px 20px; text-align:center;">
              <a href="${
                personal.portfolioUrl
              }" target="_blank" style="display:inline-block; text-decoration:none;">
                <img src="cid:portfolio" alt="Portfolio" width="213" style="width:213px; max-width:100%; margin:0 auto;" />
              </a>
            </td>
          </tr>

          <!-- Divider -->
          <tr>
            <td style="padding:15px 20px;">
              <div style="height:1px; background-color:#bfc3c8;"></div>
            </td>
          </tr>

          <!-- Connect Section -->
          <tr>
            <td style="padding:0 20px 10px;">
              <h3 style="margin:0; color:#ffffff; font-size:20px; font-weight:700;">📢 Connect with me</h3>
            </td>
          </tr>

          <tr>
            <td style="background-color:#ff0000; padding:20px; text-align:center;">
              <h3 style="margin:0 0 8px 0; color:#ffffff; font-size:22px; font-weight:700;">Let's Connect</h3>
              <p style="margin:0 0 15px 0; color:#ffffff; font-size:13px;">Follow me for updates and insights</p>
              
              <table width="100%" cellpadding="0" cellspacing="0" border="0">
                <tr>
                  <td align="center">
                    <a href="${
                      social[0].url
                    }" target="_blank" style="display:inline-block; text-decoration:none;">
                      <img src="cid:social1" alt="${
                        social[0].name
                      }" width="40" style="width:40px; margin:0 5px; display:inline-block; color-scheme: light only; filter: none !important;" />
                    </a>
                    <a href="${
                      social[1].url
                    }" target="_blank" style="display:inline-block; text-decoration:none;">
                      <img src="cid:social2" alt="${
                        social[1].name
                      }" width="40" style="width:40px; margin:0 5px; display:inline-block; color-scheme: light only; filter: none !important;" />
                    </a>
                    <a href="${
                      social[2].url
                    }" target="_blank" style="display:inline-block; text-decoration:none;">
                      <img src="cid:social3" alt="${
                        social[2].name
                      }" width="45" style="width:45px; margin:0 5px; display:inline-block; color-scheme: light only; filter: none !important;" />
                    </a>
                    <a href="${
                      social[3].url
                    }" target="_blank" style="display:inline-block; text-decoration:none;">
                      <img src="cid:social4" alt="${
                        social[3].name
                      }" width="41" style="width:41px; margin:0 5px; display:inline-block; color-scheme: light only; filter: none !important;" />
                    </a>
                    <a href="${
                      social[4].url
                    }" target="_blank" style="display:inline-block; text-decoration:none;">
                      <img src="cid:social5" alt="${
                        social[4].name
                      }" width="36" style="width:36px; margin:0 5px; display:inline-block; color-scheme: light only; filter: none !important;" />
                    </a>
                    <a href="${
                      social[5].url
                    }" target="_blank" style="display:inline-block; text-decoration:none;">
                      <img src="cid:social6" alt="${
                        social[5].name
                      }" width="39" style="width:39px; margin:0 5px; display:inline-block; color-scheme: light only; filter: none !important;" />
                    </a>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="background-color:#000000; padding:20px; text-align:center;">
              <h4 style="margin:0 0 5px 0; color:#ffffff; font-size:14px; font-weight:700;">Khushdil Ansari</h4>
              <p style="margin:0 0 12px 0; color:#ffffff; font-size:13px;">Developer | Software Engineer</p>
              <p style="margin:0 0 12px 0; color:#ffffff; font-size:12px; line-height:1.6;">This is an automated response. I will review your message and respond shortly. Please do not reply directly to this email.</p>
              <p style="margin:0; color:#ffffff; font-size:12px;">© 2026 Khushdil Ansari. All rights reserved.</p>
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

// Get image attachments for email
const getEmailAttachments = () => {
  const path = require("path");
  const imagePath = path.join(__dirname, "../canvaEmail/images");

  return [
    {
      filename: "heart.gif",
      path: path.join(imagePath, "ec1409d80c7349900de1dfb96ebe5e4b.gif"),
      cid: "heart",
    },
    {
      filename: "message.gif",
      path: path.join(imagePath, "6337b1d0f56e5eb8d13efdf06f665035.gif"),
      cid: "message",
    },
    {
      filename: "profile.png",
      path: path.join(imagePath, "c1848f2be7c1799d62d4b420c024585b.png"),
      cid: "profile",
    },
    {
      filename: "quotestart.png",
      path: path.join(imagePath, "dc6ac49c54333fa3c754fb06046d532d.png"),
      cid: "quotestart",
    },
    {
      filename: "quoteend.png",
      path: path.join(imagePath, "4f2de3bca386385f7d95f4b537a845f6.png"),
      cid: "quoteend",
    },
    {
      filename: "hello.gif",
      path: path.join(imagePath, "e1dc61dd14f2f0c9f88e58bf86cbaf33.gif"),
      cid: "hello",
    },
    {
      filename: "service1.gif",
      path: path.join(imagePath, "fa0625e95f7a49b7034dc75325fe7eb9.gif"),
      cid: "service1",
    },
    {
      filename: "service2.gif",
      path: path.join(imagePath, "ffa6c68481464160bb3ccf6611184c51.gif"),
      cid: "service2",
    },
    {
      filename: "service3.gif",
      path: path.join(imagePath, "ac5101d16c1ca853cf247d984f48c071.gif"),
      cid: "service3",
    },
    {
      filename: "service4.gif",
      path: path.join(imagePath, "d988aee4db82bd99b23021bc769c612a.gif"),
      cid: "service4",
    },
    {
      filename: "service5.gif",
      path: path.join(imagePath, "bf4c6c37664edffc19023ec7e34603dd.gif"),
      cid: "service5",
    },
    {
      filename: "nav1.png",
      path: path.join(imagePath, "6cb41ec791175c9f62ecd2b3627dd46f.png"),
      cid: "nav1",
    },
    {
      filename: "nav2.png",
      path: path.join(imagePath, "e26cdda5e4d260766bbdce56a0962113.png"),
      cid: "nav2",
    },
    {
      filename: "nav3.png",
      path: path.join(imagePath, "4bc4acaceb4ad780880c2cb90e2baf07.png"),
      cid: "nav3",
    },
    {
      filename: "nav4.png",
      path: path.join(imagePath, "00146d1d9af1cc6d0062e1f43a34e764.png"),
      cid: "nav4",
    },
    {
      filename: "nav5.png",
      path: path.join(imagePath, "dfbb3db0c3721e8c0d73c58a46826894.png"),
      cid: "nav5",
    },
    {
      filename: "portfolio.gif",
      path: path.join(imagePath, "59c41010af02d72c7aa2a165e37743ac.gif"),
      cid: "portfolio",
    },
    {
      filename: "social1.png",
      path: path.join(imagePath, "2c45081483693189d62146f5803f4f25.png"),
      cid: "social1",
    },
    {
      filename: "social2.png",
      path: path.join(imagePath, "a2778106916571fe07caf50a441ba87b.png"),
      cid: "social2",
    },
    {
      filename: "social3.png",
      path: path.join(imagePath, "0ffa7f86add5a444d078f5c269ca6a7c.png"),
      cid: "social3",
    },
    {
      filename: "social4.png",
      path: path.join(imagePath, "a78bf31ac103bff7812c1eab6c06f597.png"),
      cid: "social4",
    },
    {
      filename: "social5.png",
      path: path.join(imagePath, "ec3779f775af452464be4acc86f1106c.png"),
      cid: "social5",
    },
    {
      filename: "social6.png",
      path: path.join(imagePath, "74e1bc3220bda162410d71c8c1d76f9b.png"),
      cid: "social6",
    },
  ];
};

module.exports = { getImprovedWelcomeEmailTemplate, getEmailAttachments };
