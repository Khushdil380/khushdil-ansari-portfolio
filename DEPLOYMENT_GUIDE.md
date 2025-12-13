# Deployment Guide - Deploy Both Frontend & Backend on Vercel

## 📦 What's Been Prepared

Your project is now ready for deployment with:

- ✅ Dynamic API endpoints (dev/production)
- ✅ CORS configured for multiple origins
- ✅ Environment variables properly set up
- ✅ Vercel configuration file included
- ✅ Monorepo structure for single platform deployment

---

## 🚀 Complete Deployment Steps (Both on Vercel)

### Prerequisites

1. **GitHub Account** - Create one at https://github.com
2. **Vercel Account** - Sign up at https://vercel.com (can use GitHub to sign in)
3. **Gmail App Password** - Already configured in your .env file

---

### Step 1: Prepare Your Project

1. **Create `.gitignore` in project root** (if not exists):

   ```bash
   # Create in: c:\Users\admin\Desktop\portfolio\.gitignore
   node_modules/
   .env
   .DS_Store
   build/
   dist/
   ```

2. **Create `client/.env`** for local development:
   ```bash
   # File: client/.env
   REACT_APP_API_URL=http://localhost:5000
   ```

---

### Step 2: Push to GitHub

1. **Open terminal in project root** (`c:\Users\admin\Desktop\portfolio`)

2. **Initialize Git and commit**:

   ```bash
   git init
   git add .
   git commit -m "Initial portfolio commit"
   ```

3. **Create repository on GitHub**:

   - Go to https://github.com/new
   - Repository name: `portfolio` (or any name you prefer)
   - Keep it Public or Private
   - **Don't** initialize with README
   - Click "Create repository"

4. **Push to GitHub**:
   ```bash
   git remote add origin https://github.com/YOUR_USERNAME/portfolio.git
   git branch -M main
   git push -u origin main
   ```
   Replace `YOUR_USERNAME` with your GitHub username

---

### Step 3: Deploy Backend to Vercel

1. **Go to Vercel Dashboard**:

   - Visit https://vercel.com
   - Click "Add New" → "Project"

2. **Import Repository**:

   - Click "Import" next to your `portfolio` repository
   - If not visible, click "Import Git Repository" and paste your repo URL

3. **Configure Backend Project**:

   - **Project Name**: `portfolio-backend` (or any name)
   - **Framework Preset**: Other
   - **Root Directory**: Click "Edit" → Select `server`
   - **Build Settings**: Leave as default
   - Click "Deploy"

4. **Wait for Deployment** (1-2 minutes)

5. **Add Environment Variables**:

   - After deployment, go to: Project → Settings → Environment Variables
   - Add these **4 variables**:

   | Name                 | Value                                           |
   | -------------------- | ----------------------------------------------- |
   | `EMAIL_USER`         | `your-email@gmail.com`                          |
   | `EMAIL_APP_PASSWORD` | `your-app-password`                             |
   | `CLIENT_URL`         | `https://will-update-after-frontend.vercel.app` |
   | `NODE_ENV`           | `production`                                    |

6. **Copy Backend URL**:
   - Go to project overview
   - Copy the domain (e.g., `https://portfolio-backend.vercel.app`)
   - **Save this URL** - you'll need it for frontend
https://khushdil-ansari-portfolio-backend-noq12sm4t.vercel.app
---

### Step 4: Deploy Frontend to Vercel

1. **Go to Vercel Dashboard**:

   - Click "Add New" → "Project"

2. **Import Same Repository Again**:

   - Click "Import" next to your `portfolio` repository
   - (Yes, same repo - we're deploying a different folder)

3. **Configure Frontend Project**:

   - **Project Name**: `portfolio-frontend` (or any name)
   - **Framework Preset**: Create React App
   - **Root Directory**: Click "Edit" → Select `client`
   - **Build Command**: `npm run build` (auto-filled)
   - **Output Directory**: `build` (auto-filled)

4. **Add Environment Variable**:

   - Before deploying, expand "Environment Variables" section
   - Add:

   | Name                | Value                                |
   | ------------------- | ------------------------------------ |
   | `REACT_APP_API_URL` | Paste your backend URL from Step 3.6 |

   Example: `REACT_APP_API_URL` = `https://portfolio-backend.vercel.app`

5. **Click "Deploy"** and wait (2-3 minutes)

6. **Copy Frontend URL**:
   - After deployment completes
   - Copy the domain (e.g., `https://portfolio-frontend.vercel.app`)

---
https://khushdil-ansari-portfolio-frontend.vercel.app/

### Step 5: Update Backend CORS

1. **Go to Backend Project**:

   - Vercel Dashboard → `portfolio-backend` project
   - Go to Settings → Environment Variables

2. **Update CLIENT_URL**:

   - Find `CLIENT_URL` variable
   - Click "Edit"
   - Replace value with your frontend URL from Step 4.6
   - Example: `https://portfolio-frontend.vercel.app`
   - Click "Save"

3. **Redeploy Backend**:
   - Go to "Deployments" tab
   - Find latest deployment
   - Click ⋮ (three dots) → "Redeploy"
   - Click "Redeploy" to confirm

---

### Step 6: Test Your Live Portfolio

1. **Visit Your Frontend URL** (from Step 4.6)

2. **Test All Pages**:

   - ✅ Home page loads
   - ✅ About section works
   - ✅ Projects section displays
   - ✅ Education section shows
   - ✅ Contact page loads

3. **Test Contact Form**:
   - Fill out the contact form
   - Click Submit
   - Should see "Message sent successfully!"
   - Check your email for:
     - Thank you email (to the sender)
     - Notification email (to your EMAIL_USER)

---

## 📋 Quick Reference

### Your Deployment URLs

After deployment, you'll have:

- **Frontend**: `https://your-portfolio-frontend.vercel.app`
- **Backend**: `https://your-portfolio-backend.vercel.app`
- **Backend API**: `https://your-portfolio-backend.vercel.app/api/contact/send`

### Environment Variables Summary

**Backend (`portfolio-backend`)**:

```
EMAIL_USER=your-email@gmail.com
EMAIL_APP_PASSWORD=your-gmail-app-password
CLIENT_URL=https://your-portfolio-frontend.vercel.app
NODE_ENV=production
```

**Frontend (`portfolio-frontend`)**:

```
REACT_APP_API_URL=https://your-portfolio-backend.vercel.app
```

---

## 🔄 Making Updates After Deployment

### To Update Your Code:

1. **Make changes locally**
2. **Commit and push to GitHub**:
   ```bash
   git add .
   git commit -m "Update description"
   git push
   ```
3. **Vercel auto-deploys** - Both projects rebuild automatically!

### To Update Environment Variables:

1. Go to Vercel project → Settings → Environment Variables
2. Edit the variable
3. Go to Deployments → Redeploy latest

---

## 🐛 Troubleshooting

### Issue: Contact Form Shows CORS Error

**Solution**:

- Verify `CLIENT_URL` in backend matches your frontend URL exactly
- Must include `https://` and no trailing slash
- Redeploy backend after changing

### Issue: "Network Error" on Contact Form

**Solution**:

- Check `REACT_APP_API_URL` in frontend environment variables
- Should match backend URL exactly
- Redeploy frontend after changing

### Issue: Emails Not Sending

**Solution**:

- Verify `EMAIL_USER` and `EMAIL_APP_PASSWORD` in backend
- Check backend deployment logs: Project → Deployments → Click deployment → "View Function Logs"
- Confirm Gmail app password is correct

### Issue: Build Failed

**Solution**:

- Check build logs in deployment details
- Common fixes:
  - Make sure `package.json` has all dependencies
  - Verify no console.errors in code
  - Check that .env variables are set before building

### Issue: Page Not Found (404)

**Solution**:

- For frontend: Check root directory is set to `client`
- For backend: Check root directory is set to `server`
- Verify framework preset is correct

---

## 🎯 Custom Domain (Optional)

### Add Your Own Domain:

1. **Buy a domain** (from Namecheap, GoDaddy, etc.)

2. **In Vercel Frontend Project**:

   - Go to Settings → Domains
   - Add your domain (e.g., `yourname.com`)
   - Follow DNS configuration instructions

3. **Update Backend CORS**:

   - Add your custom domain to `CLIENT_URL`
   - Or update server.js allowedOrigins array

4. **For Backend API** (optional):
   - Add subdomain in backend project: `api.yourname.com`
   - Update frontend `REACT_APP_API_URL` to use subdomain

---

## ✅ Deployment Checklist

Before going live, verify:

- [ ] Both projects deployed successfully on Vercel
- [ ] Backend environment variables set (4 variables)
- [ ] Frontend environment variable set (REACT_APP_API_URL)
- [ ] CLIENT_URL updated with actual frontend URL
- [ ] Backend redeployed after CLIENT_URL update
- [ ] All pages load without errors
- [ ] Contact form submits successfully
- [ ] Thank you email received
- [ ] Admin notification email received
- [ ] Tested on mobile device
- [ ] No console errors in browser

---

## 🎉 You're Live!

Your portfolio is now deployed on Vercel with:

- ✅ Professional frontend hosting
- ✅ Serverless backend API
- ✅ Working contact form with email
- ✅ Automatic deployments on git push
- ✅ Free SSL certificates
- ✅ Global CDN for fast loading

**Share your portfolio**: `https://your-portfolio-frontend.vercel.app`

---

## 💡 Tips

- **Custom Names**: Use Vercel's project settings to set custom names
- **Analytics**: Enable Vercel Analytics for visitor tracking
- **Performance**: Vercel automatically optimizes images and code
- **Monitoring**: Check deployment logs regularly
- **Security**: Never commit .env files to GitHub

---

Need help? Check Vercel docs: https://vercel.com/docs

### Option 1: Deploy to Vercel (Recommended)

#### **Backend Deployment (Express API)**

1. **Install Vercel CLI** (optional):

   ```bash
   npm install -g vercel
   ```

2. **Push your code to GitHub** (if not already):

   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin https://github.com/yourusername/portfolio.git
   git push -u origin main
   ```

3. **Deploy Backend to Vercel**:

   - Go to https://vercel.com
   - Click "Import Project"
   - Select your GitHub repository
   - **Root Directory**: Select `server`
   - **Framework Preset**: Other
   - Click "Deploy"

4. **Add Environment Variables in Vercel Dashboard**:

   - Go to your project → Settings → Environment Variables
   - Add these variables:
     ```
     EMAIL_USER=your-email@gmail.com
     EMAIL_APP_PASSWORD=your-app-password
     CLIENT_URL=https://your-frontend.vercel.app
     NODE_ENV=production
     ```
   - **Important**: Update `CLIENT_URL` after deploying frontend

5. **Copy your backend URL** (e.g., `https://portfolio-backend.vercel.app`)

#### **Frontend Deployment (React App)**

1. **Create `.env` file** in `client` folder:

   ```bash
   cd client
   ```

   Create `.env` with:

   ```
   REACT_APP_API_URL=https://your-backend-url.vercel.app
   ```

   Replace with your actual backend URL from step 5 above

2. **Deploy Frontend to Vercel**:

   - Go to https://vercel.com
   - Click "Import Project"
   - Select your GitHub repository (or import again)
   - **Root Directory**: Select `client`
   - **Framework Preset**: Create React App
   - **Environment Variables**: Add `REACT_APP_API_URL`
   - Click "Deploy"

3. **Update Backend CORS**:

   - Go to your backend Vercel project
   - Settings → Environment Variables
   - Update `CLIENT_URL` to your frontend URL: `https://your-portfolio.vercel.app`
   - Redeploy backend (Deployments tab → click ⋮ → Redeploy)

4. **Test your deployed site!**

---

### Option 2: Deploy to Netlify

#### **Backend Deployment**

**Note**: Netlify doesn't support Express servers directly. You have two options:

**Option A: Use Vercel for Backend** (Recommended)

- Follow the Vercel backend steps above
- Deploy only the frontend to Netlify

**Option B: Use Netlify Functions**

- Convert Express routes to Netlify serverless functions
- This requires restructuring the backend (more complex)

#### **Frontend Deployment to Netlify**

1. **Create `.env` file** in `client`:

   ```
   REACT_APP_API_URL=https://your-backend-url.vercel.app
   ```

2. **Create `netlify.toml`** in the root of `client` folder:

   ```toml
   [build]
     base = "client"
     command = "npm run build"
     publish = "build"

   [[redirects]]
     from = "/*"
     to = "/index.html"
     status = 200
   ```

3. **Deploy to Netlify**:
   - Go to https://netlify.com
   - Click "Add new site" → "Import an existing project"
   - Connect your GitHub repository
   - **Base directory**: `client`
   - **Build command**: `npm run build`
   - **Publish directory**: `client/build`
   - **Environment variables**: Add `REACT_APP_API_URL`
   - Click "Deploy site"

---

## 🔧 Post-Deployment Configuration

### Update Your Backend CORS

After deploying, update `server/server.js`:

```javascript
const allowedOrigins = [
  process.env.CLIENT_URL || "http://localhost:3000",
  "http://localhost:3000",
  "https://your-portfolio.vercel.app", // Add your frontend URL
  "https://your-portfolio.netlify.app", // If using Netlify
];
```

Push changes and redeploy backend.

### Update Frontend API URL

If your backend URL changes, update the environment variable:

- **Vercel**: Project Settings → Environment Variables → Update `REACT_APP_API_URL`
- **Netlify**: Site Settings → Environment variables → Update `REACT_APP_API_URL`

Then trigger a redeploy.

---

## ✅ Testing Checklist

After deployment, test:

- [ ] Frontend loads without errors
- [ ] All pages work (Home, About, Projects, Education, Contact)
- [ ] Contact form displays correctly
- [ ] Submit contact form with valid data
- [ ] Check for success message
- [ ] Verify thank you email received
- [ ] Verify admin notification email received
- [ ] Test on mobile device
- [ ] Check browser console for errors

---

## 🐛 Common Deployment Issues

### Issue: CORS Error in Production

**Solution**:

- Make sure `CLIENT_URL` in backend env matches your frontend URL exactly
- Add frontend URL to `allowedOrigins` array in server.js
- Redeploy backend after changes

### Issue: API Requests Failing (404)

**Solution**:

- Verify `REACT_APP_API_URL` is set correctly in frontend env
- Check backend deployment logs in Vercel dashboard
- Make sure backend is deployed and running

### Issue: Environment Variables Not Working

**Solution**:

- Environment variables require redeploy to take effect
- For React: Must start with `REACT_APP_`
- Restart build after adding variables

### Issue: Emails Not Sending in Production

**Solution**:

- Verify `EMAIL_USER` and `EMAIL_APP_PASSWORD` are set in backend env
- Check backend logs for email errors
- Confirm Gmail app password is correct
- Gmail might block requests from new servers - check Gmail security settings

### Issue: Build Fails

**Solution**:

- Check build logs in Vercel/Netlify dashboard
- Ensure all dependencies are in `package.json`
- Verify Node.js version compatibility

---

## 📝 Environment Variables Summary

### Backend (Vercel)

```
EMAIL_USER=your-email@gmail.com
EMAIL_APP_PASSWORD=your-app-password
CLIENT_URL=https://your-frontend.vercel.app
NODE_ENV=production
```

### Frontend (Vercel/Netlify)

```
REACT_APP_API_URL=https://your-backend.vercel.app
```

---

## 🔒 Security Reminders

- ✅ Never commit `.env` files to Git
- ✅ Use environment variables for all secrets
- ✅ Keep Gmail app password secure
- ✅ Regularly rotate app passwords
- ✅ Monitor for suspicious email activity

---

## 🎯 Recommended Setup

**Best Practice**:

- **Backend**: Deploy to Vercel (better Node.js support)
- **Frontend**: Deploy to Vercel or Netlify (both work great)
- **Database** (if adding later): Use MongoDB Atlas or Vercel Postgres

---

## 📞 Need Help?

If deployment fails:

1. Check deployment logs in Vercel/Netlify dashboard
2. Verify all environment variables are set correctly
3. Test locally first: `npm run build` should work without errors
4. Check that all dependencies are in `package.json`
5. Ensure Node.js version is compatible (14.x or higher)

---

**Your portfolio is production-ready!** 🎉

The code will work seamlessly in both development (localhost) and production (Vercel/Netlify).
