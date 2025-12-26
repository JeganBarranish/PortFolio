# GitHub Pages Deployment Guide

## ✅ Configuration Complete!

Your project is now configured for GitHub Pages deployment.

## 🚀 Quick Deploy

Run this command in your terminal (where Node.js is available):

```bash
npm run deploy
```

Or use the deployment script:

```bash
./deploy-github-pages.sh
```

## 📋 What the deploy command does:

1. **Builds your project** - Creates optimized static files in `dist/` folder
2. **Deploys to gh-pages branch** - Uploads only the built files to GitHub
3. **Makes your site live** - GitHub Pages serves from the `gh-pages` branch

## ⚙️ GitHub Pages Settings

After running the deploy command, configure GitHub Pages:

1. Go to: **https://github.com/JeganBarranish/PortFolio/settings/pages**

2. Configure:
   - **Source**: Deploy from a branch
   - **Branch**: `gh-pages`
   - **Folder**: `/` (root) ✅

3. Click **Save**

## 🌐 Your Live URL

After deployment and configuration, your portfolio will be available at:

**https://jeganbarranish.github.io/PortFolio/**

## 🔧 Configuration Details

- **Base Path**: `/PortFolio/` (configured in `vite.config.js`)
- **Build Output**: `dist/` folder
- **Deploy Branch**: `gh-pages` (automatically created)

## ⚠️ Important Notes

- The first deployment may take 5-10 minutes to go live
- Subsequent deployments are usually faster (1-3 minutes)
- Make sure you've committed and pushed your changes to the `main` branch before deploying
- The `gh-pages` branch will be created automatically - don't edit it manually

## 🐛 Troubleshooting

### If the site shows a blank page:

1. Check that GitHub Pages is set to use the `gh-pages` branch
2. Verify the folder is set to `/` (root), not `/docs`
3. Wait a few minutes for GitHub to process the deployment
4. Clear your browser cache and hard refresh (Cmd+Shift+R / Ctrl+Shift+R)

### If deployment fails:

1. Make sure you have Node.js installed: `node --version`
2. Install dependencies: `npm install`
3. Check that you have push access to the repository
4. Verify your git remote is correct: `git remote -v`

## 📝 Manual Deployment Steps

If you prefer to deploy manually:

```bash
# 1. Install dependencies
npm install

# 2. Build the project
npm run build

# 3. Deploy to GitHub Pages
npx gh-pages -d dist
```

---

**Ready to deploy?** Just run `npm run deploy`! 🚀

