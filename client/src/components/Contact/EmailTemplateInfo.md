# Email Template System - Frontend Documentation

## Preview Component

This folder contains the email template preview system that allows you to see how the automatic reply emails will look before they are sent to users.

## Integration with Backend

The email templates are stored in:

```
server/templates/emails/
  - welcomeEmail.js (Main template)
  - README.md (Documentation)
```

## How It Works

1. **User submits contact form**
2. **Backend processes the request**
3. **Two emails are sent:**
   - Welcome/Thank you email to the user (using welcomeEmail.js template)
   - Notification email to you (admin)

## Email Template Features

### Professional Design

- ✅ Gradient headers with brand colors
- ✅ Profile section with your information
- ✅ Personalized greeting using submitter's name
- ✅ Service offerings showcase
- ✅ Portfolio statistics (50+ projects, 3+ years)
- ✅ All social media links (GitHub, LinkedIn, Medium, Quora, X, WhatsApp)
- ✅ Call-to-action buttons
- ✅ Professional footer with contact details

### Responsive Design

- Works perfectly on desktop and mobile
- Email client compatible (Gmail, Outlook, etc.)
- Inline CSS for maximum compatibility

## Customization

To update the email template, edit:
\`\`\`
server/templates/emails/welcomeEmail.js
\`\`\`

### Common Updates:

1. **Portfolio URL:**
   Search for: \`href="https://your-portfolio-url.com"\`
   Replace with your actual portfolio URL

2. **Social Links:**
   Already updated with your actual profiles:

   - GitHub: https://github.com/Khushdil380
   - LinkedIn: https://www.linkedin.com/in/khushdil-ansari/
   - etc.

3. **Services:**
   Update the service items in the template

4. **Statistics:**
   Update project count and experience years

## Testing

To test the email:

1. Fill out the contact form on your website
2. Check your email inbox for the automatic reply
3. Verify all links work correctly
4. Test on different devices and email clients

## Email Content Includes

- 🎉 Welcome message
- 👤 Your professional profile
- 💼 Services you offer
- 📊 Your statistics
- 🌐 Portfolio overview
- 🤝 All social media links
- 📧 Contact information
- ⏰ Response time expectation (24-48 hours)

## Benefits

✅ Professional first impression
✅ Provides all necessary information
✅ Encourages further engagement
✅ Showcases your expertise
✅ Multiple touchpoints for connection
✅ Builds trust with automated response
✅ Saves time with comprehensive information

## Maintenance

The email template is maintained separately from the frontend, allowing easy updates without affecting the React application. Simply update the welcomeEmail.js file in the server folder.
