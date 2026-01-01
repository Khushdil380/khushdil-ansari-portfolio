const getWelcomeEmailTemplate = (userName) => {
  return `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Thank You - Khushdil Ansari</title>
</head>
<body style="margin:0;padding:0;font-family:Arial,Helvetica,sans-serif;background-color:#f5f5f5;">
  <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%" style="background-color:#f5f5f5;">
    <tr>
      <td align="center" style="padding:20px 10px;">
        
        <!-- Main Container -->
        <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%" style="max-width:600px;background-color:#ffffff;box-shadow:0 2px 10px rgba(0,0,0,0.1);">
          
          <!-- Header -->
          <tr>
            <td style="background:linear-gradient(135deg,#E32227 0%,#ff5555 100%);padding:40px 20px;text-align:center;">
              <h1 style="margin:0;color:#ffffff;font-size:28px;font-weight:700;">🎉 Thank You!</h1>
              <p style="margin:10px 0 0 0;color:#ffffff;font-size:15px;opacity:0.95;">Your message has been received</p>
            </td>
          </tr>

          <!-- Profile Section -->
          <tr>
            <td style="background-color:#fafafa;padding:30px 20px;text-align:center;">
              <div style="width:90px;height:90px;background:linear-gradient(135deg,#E32227,#ff6666);border-radius:50%;display:inline-block;line-height:90px;font-size:36px;color:#ffffff;font-weight:bold;box-shadow:0 4px 12px rgba(227,34,39,0.25);">KA</div>
              <h2 style="margin:15px 0 5px 0;color:#1a1a1a;font-size:22px;font-weight:700;">KHUSHDIL ANSARI</h2>
              <p style="margin:0;color:#666;font-size:15px;">Full Stack Developer | Software Engineer</p>
            </td>
          </tr>

          <!-- Main Content -->
          <tr>
            <td style="padding:30px 25px;">
              
              <!-- Greeting -->
              <p style="margin:0 0 15px 0;color:#1a1a1a;font-size:18px;font-weight:600;">Hello ${userName}! 👋</p>
              
              <p style="margin:0 0 15px 0;color:#444;font-size:15px;line-height:1.7;">Thank you for reaching out through my portfolio. I truly appreciate your interest! Your message has been received and I will get back to you within <strong style="color:#E32227;">24-48 hours</strong>.</p>

              <p style="margin:0 0 20px 0;color:#444;font-size:15px;line-height:1.7;">Feel free to explore my work and connect with me. I'm always excited to discuss new opportunities and collaborations!</p>

              <!-- Divider -->
              <div style="height:1px;background:linear-gradient(90deg,transparent,#E32227,transparent);margin:25px 0;"></div>

              <!-- Services -->
              <h3 style="margin:0 0 15px 0;color:#E32227;font-size:20px;font-weight:700;border-bottom:2px solid #E32227;padding-bottom:8px;">💼 What I Offer</h3>
              
              <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%">
                <tr>
                  <td style="padding:12px;background-color:#fafafa;border-left:3px solid #E32227;margin-bottom:10px;">
                    <p style="margin:0 0 5px 0;color:#E32227;font-size:16px;font-weight:600;">🚀 Full Stack Development</p>
                    <p style="margin:0;color:#666;font-size:14px;line-height:1.5;">Scalable web applications using React, Node.js, MongoDB & modern tech</p>
                  </td>
                </tr>
                <tr><td style="height:10px;"></td></tr>
                <tr>
                  <td style="padding:12px;background-color:#fafafa;border-left:3px solid #E32227;">
                    <p style="margin:0 0 5px 0;color:#E32227;font-size:16px;font-weight:600;">💡 Technical Consulting</p>
                    <p style="margin:0;color:#666;font-size:14px;line-height:1.5;">Expert guidance on architecture & best practices</p>
                  </td>
                </tr>
                <tr><td style="height:10px;"></td></tr>
                <tr>
                  <td style="padding:12px;background-color:#fafafa;border-left:3px solid #E32227;">
                    <p style="margin:0 0 5px 0;color:#E32227;font-size:16px;font-weight:600;">🎨 UI/UX Development</p>
                    <p style="margin:0;color:#666;font-size:14px;line-height:1.5;">Responsive, user-friendly interfaces with accessibility</p>
                  </td>
                </tr>
                <tr><td style="height:10px;"></td></tr>
                <tr>
                  <td style="padding:12px;background-color:#fafafa;border-left:3px solid #E32227;">
                    <p style="margin:0 0 5px 0;color:#E32227;font-size:16px;font-weight:600;">🔧 API Development</p>
                    <p style="margin:0;color:#666;font-size:14px;line-height:1.5;">RESTful APIs & third-party service integrations</p>
                  </td>
                </tr>
              </table>

              <!-- Stats -->
              <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%" style="margin:25px 0;">
                <tr>
                  <td width="48%" align="center" style="padding:15px;background-color:#fafafa;border-radius:8px;vertical-align:top;">
                    <p style="margin:0;color:#E32227;font-size:32px;font-weight:700;line-height:1;">50+</p>
                    <p style="margin:5px 0 0 0;color:#666;font-size:14px;">Projects Completed</p>
                  </td>
                  <td width="4%"></td>
                  <td width="48%" align="center" style="padding:15px;background-color:#fafafa;border-radius:8px;vertical-align:top;">
                    <p style="margin:0;color:#E32227;font-size:32px;font-weight:700;line-height:1;">3+</p>
                    <p style="margin:5px 0 0 0;color:#666;font-size:14px;">Years Experience</p>
                  </td>
                </tr>
              </table>

              <!-- Divider -->
              <div style="height:1px;background:linear-gradient(90deg,transparent,#E32227,transparent);margin:25px 0;"></div>

              <!-- Portfolio Overview -->
              <h3 style="margin:0 0 15px 0;color:#E32227;font-size:20px;font-weight:700;border-bottom:2px solid #E32227;padding-bottom:8px;">🌐 Explore My Work</h3>
              
              <p style="margin:0 0 15px 0;color:#444;font-size:15px;line-height:1.7;">
                <strong>My portfolio</strong> showcases:<br>
                ✅ <strong>Projects:</strong> Real-world applications<br>
                ✅ <strong>Skills:</strong> Technical expertise<br>
                ✅ <strong>Education:</strong> Background & certifications<br>
                ✅ <strong>Blog:</strong> Technical insights<br>
                ✅ <strong>Contact:</strong> Multiple connection options
              </p>

              <!-- CTA Buttons -->
              <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%" style="margin:20px 0;">
                <tr>
                  <td align="center">
                    <a href="https://khushdil-ansari-portfolio-frontend.vercel.app/" style="display:inline-block;padding:14px 35px;background:linear-gradient(135deg,#E32227,#ff5555);color:#ffffff;text-decoration:none;border-radius:25px;font-weight:600;font-size:15px;margin:5px;">Visit Portfolio</a>
                    <a href="https://khushdil-ansari-portfolio-frontend.vercel.app/projects" style="display:inline-block;padding:14px 35px;background:#1a2332;color:#ffffff;text-decoration:none;border-radius:25px;font-weight:600;font-size:15px;margin:5px;">View Projects</a>
                  </td>
                </tr>
              </table>

            </td>
          </tr>

          <!-- Social Media Section -->
          <tr>
            <td style="background-color:#1a2332;padding:30px 20px;text-align:center;">
              <h3 style="margin:0 0 10px 0;color:#ffffff;font-size:18px;font-weight:600;">🤝 Let's Connect</h3>
              <p style="margin:0 0 20px 0;color:rgba(255,255,255,0.8);font-size:14px;">Follow me for updates & insights!</p>
              
              <!-- Social Icons -->
              <table role="presentation" cellpadding="0" cellspacing="0" border="0" align="center">
                <tr>
                  <td style="padding:5px;">
                    <a href="https://github.com/Khushdil380" style="display:inline-block;width:40px;height:40px;background-color:rgba(255,255,255,0.1);border:2px solid rgba(255,255,255,0.3);border-radius:50%;color:#ffffff;text-decoration:none;font-weight:bold;font-size:13px;line-height:36px;text-align:center;" title="GitHub">GH</a>
                  </td>
                  <td style="padding:5px;">
                    <a href="https://www.linkedin.com/in/khushdil-ansari/" style="display:inline-block;width:40px;height:40px;background-color:rgba(255,255,255,0.1);border:2px solid rgba(255,255,255,0.3);border-radius:50%;color:#ffffff;text-decoration:none;font-weight:bold;font-size:13px;line-height:36px;text-align:center;" title="LinkedIn">IN</a>
                  </td>
                  <td style="padding:5px;">
                    <a href="https://medium.com/@khushdilansari345" style="display:inline-block;width:40px;height:40px;background-color:rgba(255,255,255,0.1);border:2px solid rgba(255,255,255,0.3);border-radius:50%;color:#ffffff;text-decoration:none;font-weight:bold;font-size:13px;line-height:36px;text-align:center;" title="Medium">M</a>
                  </td>
                  <td style="padding:5px;">
                    <a href="https://www.quora.com/profile/Khushdil-Ansari-7" style="display:inline-block;width:40px;height:40px;background-color:rgba(255,255,255,0.1);border:2px solid rgba(255,255,255,0.3);border-radius:50%;color:#ffffff;text-decoration:none;font-weight:bold;font-size:13px;line-height:36px;text-align:center;" title="Quora">Q</a>
                  </td>
                  <td style="padding:5px;">
                    <a href="https://x.com/Khushdil_380" style="display:inline-block;width:40px;height:40px;background-color:rgba(255,255,255,0.1);border:2px solid rgba(255,255,255,0.3);border-radius:50%;color:#ffffff;text-decoration:none;font-weight:bold;font-size:13px;line-height:36px;text-align:center;" title="X">X</a>
                  </td>
                  <td style="padding:5px;">
                    <a href="https://wa.me/918809059380" style="display:inline-block;width:40px;height:40px;background-color:rgba(255,255,255,0.1);border:2px solid rgba(255,255,255,0.3);border-radius:50%;color:#ffffff;text-decoration:none;font-weight:bold;font-size:13px;line-height:36px;text-align:center;" title="WhatsApp">WA</a>
                  </td>
                </tr>
              </table>

              <p style="margin:20px 0 0 0;color:rgba(255,255,255,0.7);font-size:14px;">
                📧 <a href="mailto:khushdilansari345@gmail.com" style="color:#E32227;text-decoration:none;font-weight:600;">khushdilansari345@gmail.com</a><br>
                📱 <a href="tel:+918809059380" style="color:#E32227;text-decoration:none;font-weight:600;">+91 8809059380</a>
              </p>
            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="background-color:#0f1419;color:rgba(255,255,255,0.8);text-align:center;padding:25px 20px;">
              <p style="margin:0 0 5px 0;font-size:15px;font-weight:600;color:#ffffff;">Khushdil Ansari</p>
              <p style="margin:0 0 15px 0;font-size:13px;">Full Stack Developer | Software Engineer</p>
              <p style="margin:0;font-size:12px;opacity:0.7;line-height:1.6;">
                This is an automated response. I will review your message and respond shortly.<br>
                Please do not reply directly to this email.
              </p>
              <p style="margin:15px 0 0 0;font-size:11px;opacity:0.6;">
                © ${new Date().getFullYear()} Khushdil Ansari. All rights reserved.
              </p>
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

module.exports = { getWelcomeEmailTemplate };
