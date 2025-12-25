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

## Quick Deploy Commands (if you have npm installed):

```bash
# Build the project
npm run build

# The dist folder will contain your production-ready website
```

