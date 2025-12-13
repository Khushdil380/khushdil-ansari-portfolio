# Contact Form Backend Setup

## Gmail App Password Setup

To enable email sending functionality, you need to create a Gmail App Password:

### Steps:

1. Go to your Google Account: https://myaccount.google.com/
2. Select **Security** from the left menu
3. Under "How you sign in to Google," select **2-Step Verification** (you must enable this first)
4. At the bottom, select **App passwords**
5. Select app: **Mail**
6. Select device: **Other (Custom name)** - enter "Portfolio Contact Form"
7. Click **Generate**
8. Copy the 16-character password (spaces will be removed automatically)

### Configure .env File

Edit `server/.env` and replace the placeholders:

```env
EMAIL_USER=your.actual.email@gmail.com
EMAIL_APP_PASSWORD=abcd efgh ijkl mnop
```

**Important:**

- Use your actual Gmail address for `EMAIL_USER`
- Use the generated app password (NOT your regular Gmail password) for `EMAIL_APP_PASSWORD`
- The app password will look like: `abcd efgh ijkl mnop` (16 characters with spaces)

## Running the Backend Server

```bash
cd server
npm start
```

The server will run on http://localhost:5000

## Testing the Contact Form

1. Start the backend server (port 5000)
2. Start the React app (port 3000)
3. Navigate to the Contact page
4. Fill out the form and submit
5. Check your email for the confirmation message
6. The admin email (EMAIL_USER) will receive a notification

## Email Features

When a user submits the contact form:

- ✅ User receives a "Thank You" email with a professional design
- ✅ Admin receives a notification email with the user's message
- ✅ Form validation on both frontend and backend
- ✅ Error handling with user-friendly messages

## Troubleshooting

**"Invalid login"** error:

- Make sure you're using an App Password, not your regular Gmail password
- Verify 2-Step Verification is enabled on your Google Account

**"Network error"** in frontend:

- Make sure the backend server is running on port 5000
- Check CORS configuration in server.js

**Emails not sending:**

- Verify EMAIL_USER and EMAIL_APP_PASSWORD in .env
- Check server console for error messages
- Make sure Gmail isn't blocking the app
