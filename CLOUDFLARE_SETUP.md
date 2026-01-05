# Cloudflare Pages - GitHub Integration Guide

## 🚀 Connect GitHub to Cloudflare Pages

Follow these steps to set up automatic deployments from GitHub to Cloudflare Pages:

### Step 1: Access Cloudflare Dashboard

1. Go to: https://dash.cloudflare.com/
2. Log in with your Cloudflare account

### Step 2: Create a Pages Project

1. In the left sidebar, click **Workers & Pages**
2. Click **Create application**
3. Select the **Pages** tab
4. Click **Connect to Git**

### Step 3: Authorize GitHub

1. Click **Connect GitHub**
2. Authorize Cloudflare to access your GitHub account
3. You may need to:
   - Select which repositories Cloudflare can access
   - Choose "All repositories" OR "Only select repositories"
   - If selecting specific repos, choose: `Annanerdstation/game-claude`

### Step 4: Select Your Repository

1. Find and select: **Annanerdstation/game-claude**
2. Click **Begin setup**

### Step 5: Configure Build Settings

⚠️ **CRITICAL:** Use these exact settings to avoid deployment errors:

**Project name:** `game-claude-confetti` (or your preferred name)

**Production branch:** `claude/add-button-confetti-1sCPz`

**Build settings:**
- **Framework preset:** `None` (do not select any framework)
- **Build command:** **LEAVE COMPLETELY EMPTY**
  - ❌ Do NOT type `wrangler deploy`
  - ❌ Do NOT type `npx wrangler versions upload`
  - ❌ Do NOT type anything at all - leave it blank!
- **Build output directory:** `/` (root directory)
  - ⚠️ Do NOT use `.` - use `/` instead

**Root directory (optional):** Leave empty

**Environment variables:** (none needed)

> 💡 **Tip:** This is a static site with no build process. Cloudflare should serve the HTML/CSS/JS files directly without running any build commands.

> ⚠️ **Common Mistake:** Cloudflare might auto-fill a build command. Make sure to DELETE it completely!

### Step 6: Deploy!

1. Click **Save and Deploy**
2. Cloudflare will:
   - Build your site (takes ~1 minute)
   - Deploy it to a public URL
   - Give you a URL like: `https://game-claude-confetti.pages.dev`

### Step 7: Testing & Preview URLs

Every time you push to your branch, Cloudflare will:
- ✅ Automatically build and deploy
- ✅ Create preview URLs for each commit
- ✅ Show you deployment status

## 📍 Your Cloudflare URLs

After setup, you'll have:

**Production URL:**
- `https://game-claude-confetti.pages.dev` (or your chosen project name)

**Preview URLs:**
- Each commit gets a unique preview URL
- Format: `https://<commit-hash>.game-claude-confetti.pages.dev`

## 🔄 How It Works

1. You push code to GitHub → `claude/add-button-confetti-1sCPz`
2. Cloudflare detects the change automatically
3. Cloudflare builds and deploys your site
4. Your site is live at the Cloudflare Pages URL

## ⚙️ Additional Configuration (Optional)

### Custom Domain

If you want to use a custom domain:
1. Go to your Pages project
2. Click **Custom domains**
3. Add your domain (e.g., `confetti.yourdomain.com`)
4. Follow the DNS setup instructions

### Branch Deployments

You can set up different branches for:
- **Production:** `main` or `claude/add-button-confetti-1sCPz`
- **Preview:** All other branches get preview URLs automatically

### Environment Variables

For this project, no environment variables are needed since it's a static site.

## 🎉 Benefits of Cloudflare Pages

- ✅ Free for unlimited sites
- ✅ Global CDN (fast worldwide)
- ✅ Automatic HTTPS
- ✅ Unlimited bandwidth
- ✅ Preview deployments for every commit
- ✅ Rollback to any previous deployment
- ✅ Built-in analytics

## 📊 Monitoring Deployments

View your deployments:
1. Go to: https://dash.cloudflare.com/
2. Navigate to **Workers & Pages**
3. Click your project name
4. See all deployments, logs, and analytics

## 🔗 Quick Links

- **Cloudflare Dashboard:** https://dash.cloudflare.com/
- **Pages Documentation:** https://developers.cloudflare.com/pages/
- **GitHub Repository:** https://github.com/Annanerdstation/game-claude

---

## Troubleshooting

**Issue:** `[ERROR] The entry-point file at "workers-site/index.js" was not found` OR `Executing user deploy command: npx wrangler versions upload`
- **Cause:** Cloudflare has a build/deploy command configured when it should be empty
- **Fix:**
  1. Go to your Cloudflare dashboard: https://dash.cloudflare.com/
  2. Navigate to **Workers & Pages** → Your project
  3. Click **Settings** → **Builds & deployments**
  4. Click **Edit configuration**
  5. Find **Build command** field and DELETE everything - make it completely empty
  6. Set **Build output directory** to `/` (just a forward slash)
  7. Click **Save**
  8. Go to **Deployments** tab and click **Retry deployment**

**Issue:** `[ERROR] Missing entry-point to Worker script or to assets directory`
- **Solution:** This means Cloudflare is treating your project as a Worker instead of a static Pages site.
- **Fix:**
  1. Go to your Cloudflare dashboard
  2. Delete the current deployment (if created as Worker)
  3. Create a NEW project selecting **Pages** (not Workers)
  4. Make sure you select **Connect to Git** under the Pages tab
  5. Ensure build command is **completely empty** (not even `wrangler deploy`)
  6. Set build output directory to `/`

**Issue:** GitHub authorization fails
- **Solution:** Check that you've granted Cloudflare access to your repository

**Issue:** Build fails with npm/build commands
- **Solution:** Make sure build command is **completely empty** - leave it blank, don't add any commands
- For static sites like this, Cloudflare should just serve the files directly

**Issue:** 404 errors
- **Solution:** Verify that `index.html` is in the root directory

**Issue:** Changes not deploying
- **Solution:** Check that you selected the correct production branch

**Issue:** Build output directory error
- **Solution:** Try setting it to `.` (current directory) instead of `/`

Need help? Check the Cloudflare Pages documentation or contact support!
