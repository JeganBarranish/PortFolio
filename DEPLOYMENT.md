# Deployment Guide - Portfolio Website

## Option 1: Deploy to Vercel (Recommended - Easiest)

### Steps:
1. Go to [vercel.com](https://vercel.com) and sign up/login with your GitHub account
2. Click "Add New Project"
3. Import your GitHub repository: `JeganBarranish/PortFolio`
4. Vercel will auto-detect Vite settings:
   - Framework Preset: Vite
   - Build Command: `npm run build`
   - Output Directory: `dist`
   - Install Command: `npm install`
5. Click "Deploy"
6. Your site will be live in 1-2 minutes at: `https://your-project-name.vercel.app`

### Custom Domain (Optional):
- After deployment, go to Project Settings > Domains
- Add your custom domain (e.g., jeganbarranish.com)

---

## Option 2: Deploy to Netlify

### Steps:
1. Go to [netlify.com](https://netlify.com) and sign up/login with GitHub
2. Click "Add new site" > "Import an existing project"
3. Select your GitHub repository: `JeganBarranish/PortFolio`
4. Configure build settings:
   - Build command: `npm run build`
   - Publish directory: `dist`
5. Click "Deploy site"
6. Your site will be live at: `https://random-name.netlify.app`

---

## Option 3: Deploy to GitHub Pages

### Steps:
1. Install gh-pages: `npm install --save-dev gh-pages`
2. Add to package.json scripts:
   ```json
   "predeploy": "npm run build",
   "deploy": "gh-pages -d dist"
   ```
3. Run: `npm run deploy`
4. Your site will be at: `https://jeganbarranish.github.io/PortFolio/`

---

## Option 4: Deploy to Cloudflare Pages (Great Alternative)

### Steps:
1. Go to [cloudflare.com](https://cloudflare.com) and sign up/login
2. Navigate to Pages in the dashboard
3. Click "Create a project" > "Connect to Git"
4. Select your GitHub repository
5. Configure build settings:
   - Framework preset: Vite
   - Build command: `npm run build`
   - Build output directory: `dist`
6. Click "Save and Deploy"
7. Your site will be live at: `https://your-project.pages.dev`

**Advantages:**
- Free tier with generous limits
- Fast global CDN
- No favicon caching issues
- Easy custom domain setup

---

## Option 5: Deploy to Render

### Steps:
1. Go to [render.com](https://render.com) and sign up/login with GitHub
2. Click "New +" > "Static Site"
3. Connect your GitHub repository
4. Configure:
   - Name: Your portfolio name
   - Build Command: `npm run build`
   - Publish Directory: `dist`
5. Click "Create Static Site"
6. Your site will be live at: `https://your-project.onrender.com`

---

## Option 6: Deploy to Surge.sh (Simple & Fast)

### Steps:
1. Install Surge: `npm install -g surge`
2. Build your project: `npm run build`
3. Run: `surge dist`
4. Follow the prompts to create an account and deploy
5. Your site will be live at: `https://your-project-name.surge.sh`

---

## Favicon Troubleshooting

### If favicon doesn't update after deployment:

1. **Clear browser cache:**
   - Hard refresh: `Ctrl+Shift+R` (Windows/Linux) or `Cmd+Shift+R` (Mac)
   - Or clear browser cache completely

2. **Check favicon file:**
   - Ensure `favicon.ico` exists in the `public/` folder
   - The file should be properly formatted (16x16, 32x32, or 48x48 pixels)

3. **Force cache refresh on Vercel:**
   - The `vercel.json` is configured with `no-cache` headers for favicon
   - After redeploying, wait a few minutes for CDN cache to clear

4. **Alternative: Use a different hosting platform:**
   - Netlify, Cloudflare Pages, or GitHub Pages often have less aggressive caching
   - These platforms typically respect favicon changes faster

5. **Verify in HTML:**
   - Check that `index.html` has the correct favicon link: `<link rel="icon" type="image/x-icon" href="/favicon.ico" />`

---

## Quick Deploy Commands (if you have npm installed):

```bash
# Build the project
npm run build

# The dist folder will contain your production-ready website
```

---

## Recommended Hosting Platforms (Best to Worst for Favicon Updates):

1. **Cloudflare Pages** - Fastest favicon updates, excellent performance
2. **Netlify** - Good favicon handling, easy setup
3. **GitHub Pages** - Reliable, but may have slight caching delays
4. **Render** - Good alternative, less common caching issues
5. **Vercel** - Great performance, but can have aggressive caching (now fixed with no-cache headers)
6. **Surge.sh** - Simple, but basic features

