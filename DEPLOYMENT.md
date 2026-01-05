# Deployment Guide

## Deploy to Cloudflare Pages

Since we can't deploy directly from this environment due to proxy restrictions, here's how you can deploy manually:

### Option 1: Deploy via Cloudflare Dashboard (Easiest)

1. Go to https://dash.cloudflare.com/
2. Navigate to **Workers & Pages** > **Create application** > **Pages** > **Connect to Git**
3. Connect your GitHub account and select the `Annanerdstation/game-claude` repository
4. Configure build settings:
   - **Production branch**: `claude/add-button-confetti-1sCPz` (or main after merging)
   - **Build command**: (leave empty - no build needed)
   - **Build output directory**: `/` (root directory)
5. Click **Save and Deploy**

Your site will be live at: `https://game-claude-confetti.pages.dev` (or similar)

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
