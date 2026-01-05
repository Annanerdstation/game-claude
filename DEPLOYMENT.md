# Deployment Guide

## 🚀 Deploy to Cloudflare Pages (RECOMMENDED)

**Full Setup Guide:** See [CLOUDFLARE_SETUP.md](./CLOUDFLARE_SETUP.md) for complete step-by-step instructions.

### Quick Start - Connect GitHub to Cloudflare

1. Go to https://dash.cloudflare.com/
2. Navigate to **Workers & Pages** → **Create application** → **Pages** → **Connect to Git**
3. Authorize GitHub and select the `Annanerdstation/game-claude` repository
4. Configure build settings:
   - **Project name**: `game-claude-confetti`
   - **Production branch**: `claude/add-button-confetti-1sCPz`
   - **Build command**: (leave empty - no build needed)
   - **Build output directory**: `/` (root directory)
5. Click **Save and Deploy**

Your site will be live at: `https://game-claude-confetti.pages.dev`

**Benefits:**
- ✅ Automatic deployments on every push
- ✅ Preview URLs for every commit
- ✅ Global CDN with free HTTPS
- ✅ Unlimited bandwidth

### Option 2: Deploy via Wrangler CLI (From your local machine)

1. Install Wrangler if you haven't:
   ```bash
   npm install -g wrangler
   ```

2. Set your API token:
   ```bash
   export CLOUDFLARE_API_TOKEN=oRZvhuAotm3zAjvYjCFpwibSvq5nzhZtxFbjhZxp
   ```

3. Deploy:
   ```bash
   wrangler pages deploy . --project-name=game-claude-confetti
   ```

### Option 3: Use GitHub Pages

1. Go to your repository settings: https://github.com/Annanerdstation/game-claude/settings/pages
2. Under "Source", select the branch: `claude/add-button-confetti-1sCPz`
3. Click Save

Your site will be live at: `https://annanerdstation.github.io/game-claude/`

## Files Included

- `index.html` - Main HTML page with the celebration button
- `confetti.js` - JavaScript confetti animation using Canvas API
- `style.css` - Styling with gradient background and button effects

All files are static and ready to deploy - no build process required!
